import { defaultInstance } from '.'
const uploadImage = (formData) => {
    return defaultInstance.post('/image/upload', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })
}

const uploadImageWithProg = (formData, options) => {
    return defaultInstance.post('/image/upload', formData, options)
}

const downloadFileURL = (url) => {
    return defaultInstance.get(url, { responseType: 'blob' })
}

export const imageApi = { uploadImage, uploadImageWithProg, downloadFileURL }
