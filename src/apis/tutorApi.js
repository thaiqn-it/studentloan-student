import { defaultInstance } from '.'

const createTutor = (data) => {
    return defaultInstance.post('/tutor', data)
}

export const tutorApi = { createTutor }
