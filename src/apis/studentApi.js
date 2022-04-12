import { defaultInstance } from ".";

const getStudentByUserId = (userId) => {
  return defaultInstance.post(`/student/${userId}`);
};

const updateStudentInfo = ({ id, ...data }, userType) => {
  return defaultInstance.put(`/student/profile/${id}`, {studentInfo: data, userType});
};

const getStudentProfile = () => {
  return defaultInstance.get(`/student/profile`);
}

export const studentApi = { getStudentByUserId, updateStudentInfo, getStudentProfile };
