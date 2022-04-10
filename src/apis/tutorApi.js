import { defaultInstance } from '.'

const createTutor = (data) => {
    return defaultInstance.post('/tutor', data)
}

const updateTutor = (id, data) => {
    return defaultInstance.put(`/tutor/${id}`, data)
}

const getTutorById = (id) => {
    return defaultInstance.get(`/tutor/${id}`)
}

export const tutorApi = { createTutor, getTutorById, updateTutor }
