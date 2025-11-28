import {
  ExternalFileWithCaption,
  FileWithCaption,
  ImageBlock,
  VideoBlock,
} from '@notionhq/client/build/src/api-types'
import fetch from 'node-fetch'

var sharp = undefined
var ffmpeg = undefined
if (typeof window === 'undefined') {
  sharp = require('sharp')
  ffmpeg = require('fluent-ffmpeg')
}

export function getImageFileName(url: string, id: string): string | null {
  // const fileName = url?.split('/')?.pop().split('?')[0]
  const fileName = url?.split('.').pop().split('?')[0]
  return `${id}.${fileName}`
}
export function getExternalImageFileName(
  url: string,
  id: string
): string | null {
  const fileName = url?.split('.com/')[1].split('?')[0].split('.')
  const extension = url?.split('fm=')[1].split('&')[0]
  return `${fileName}.${extension}`
}

export function getMediaBlockFileName(
  block: ImageBlock | VideoBlock
): string | null {
  let mediaBlock = getMediaBlockFile(block)
  return mediaBlock?.type === 'external'
    ? getExternalImageFileName(mediaBlock.external.url, block.id)
    : getImageFileName(mediaBlock.file.url, block.id)
}

export function getMediaBlockFile(
  block: ImageBlock | VideoBlock
): FileWithCaption | ExternalFileWithCaption | null {
  if (
    block.type === 'image' &&
    (block.image.type === 'file' || block.image.type === 'external')
  ) {
    return block.image
  } else if (
    block.type === 'video' &&
    (block.video.type === 'file' || block.video.type === 'external')
  ) {
    return block.video
  } else {
    return null
  }
}

export async function fetchImage(
  fs,
  url: string,
  id: string,
  fileName: string
): Promise<string> {
  if (!fs.existsSync('public/images')) {
    console.info('created public/images folder.')
    fs.mkdirSync('public/images')
  }

  const filePath = `public/images/${fileName}`
  // Don't download images if they're already there.
  if (!fs.existsSync(filePath)) {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`unexpected response ${response.statusText}`)
    }

    const body = await response.buffer()

    // Write the original file.
    fs.writeFileSync(filePath, body)

    // Transcode and optimize if possible
    if (/^.*\.(png|jpe?g)$/.test(fileName)) {
      const webpPromise = sharp(body)
        .rotate()
        .resize({
          width: 1500,
          height: 1500,
          withoutEnlargement: true,
          fit: 'inside',
        })
        .webp({
          quality: 80,
        })
        .toFile(`${filePath}.optimized.webp`)
      const jpegPromise = sharp(body)
        .rotate()
        .resize({
          width: 1500,
          height: 1500,
          withoutEnlargement: true,
          fit: 'inside',
        })
        .jpeg({
          quality: 85,
          progressive: true,
        })
        .toFile(`${filePath}.optimized.jpg`)
      await Promise.all([webpPromise, jpegPromise])
    } else if (/^.*\.mp4$/.test(fileName)) {
      const thumbnail = await generateThumbnail(filePath, id)
      await sharp(thumbnail)
        .rotate()
        .resize({
          width: 1500,
          height: 1500,
          withoutEnlargement: true,
          fit: 'inside',
        })
        .jpeg({
          quality: 85,
          progressive: true,
        })
        .toFile(`${filePath}.optimized.jpg`)
    }
  }
  return fileName
}

function generateThumbnail(filePath, id) {
  return new Promise((resolve, reject) => {
    ffmpeg(filePath)
      .on('error', (err) => {
        reject(err)
      })
      .on('end', () => {
        resolve(`/tmp/${id}.png`)
      })
      .screenshots({
        folder: '/tmp',
        filename: `${id}.png`,
        count: 1,
        timemarks: ['25%'],
      })
  })
}
