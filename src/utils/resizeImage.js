import Compress from 'compress.js'

const compress = new Compress()

export const resizeImage = async (file) => {
    const resize = await compress.compress([file], {
        size: 5, //5Mb
        quality: 1,
        resize: true,
    })

    const img = resize[0]
    const base64str = img.data
    const imgExt = img.ext

    const resizedImg = Compress.convertBase64ToFile(base64str, imgExt)
    return resizedImg
}
