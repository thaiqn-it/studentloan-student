import { defaultInstance } from '.'

const getBySchoolId = (id) => {
    return defaultInstance.get(`/major/school/${id}`)
}

export const majorApi = { getBySchoolId,  }
