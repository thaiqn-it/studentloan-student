import { defaultInstance } from '.'

const updateById = (data) => {
    return defaultInstance.put(`/achievement`, data)
}

const createByStudentId = (data) => {
    return defaultInstance.post(`/achievement`, data)
}

export const achievementApi = { updateById, createByStudentId }
