import { defaultInstance } from '.'

const getAllSchool = () => {
    return defaultInstance.get(`/school`)
}

export const schoolApi = { getAllSchool,  }
