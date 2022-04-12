import { defaultInstance } from '.'

const getBySchoolAndMajorId = (majorId, schoolId) => {
    return defaultInstance.get(`/schoolmajor/${majorId}/${schoolId}`)
}

export const schoolMajorApi = { getBySchoolAndMajorId }
