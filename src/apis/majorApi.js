import { defaultInstance } from '.'

const getAllMajor = () => {
    return defaultInstance.get(`/major`)
}

export const majorApi = { getAllMajor,  }
