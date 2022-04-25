import { defaultInstance } from '.'

const updateById = (data) => {
    return defaultInstance.put(`/achievement`, data)
}

const createByStudentId = (data) => {
    return defaultInstance.post(`/achievement`, data)
}

const getByStudentId = ()=>{
    return defaultInstance.get(`/achievement/student/`)
}

export const achievementApi = { updateById, createByStudentId, getByStudentId }
