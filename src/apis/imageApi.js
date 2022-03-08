import { defaultInstance } from '.'
const uploadImage = (formData) => {
    return defaultInstance.post('/image/upload', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })
}

export const imageApi = { uploadImage }
