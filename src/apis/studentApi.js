import { defaultInstance } from ".";

const getStudentByUserId = (userId) => {
  return defaultInstance.post(`/student/${userId}`);
};

const updateStudentInfo = ({ studentId, ...data }) => {
  return defaultInstance.put(`/student/${studentId}`, data);
};

const getStudentProfile = () => {
  return defaultInstance.get(`/student/profile`);
}

export const studentApi = { getStudentByUserId, updateStudentInfo, getStudentProfile };
