import { defaultInstance } from ".";

const getStudentByUserId = (userId) => {
  return defaultInstance.post(`/student/${userId}`);
};

const updateStudentInfo = ({ studentId, ...data }) => {
  return defaultInstance.put(`/student/${studentId}`, data);
};

export const studentApi = { getStudentByUserId, updateStudentInfo };
