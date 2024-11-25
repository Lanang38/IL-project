import axios from "axios";

const BASE_URL = "http://localhost:3000/api/v1"; // Ganti dengan URL backend Anda

export const fetchAllMentors = async () => {
  return await axios.get(`${BASE_URL}/mentors`);
};

export const addMentor = async (mentorData) => {
  return await axios.post(`${BASE_URL}/mentors`, mentorData);
};

export const editMentor = async (email, updatedData) => {
  return await axios.put(`${BASE_URL}/mentors/${email}`, updatedData);
};

export const deleteMentor = async (email) => {
  return await axios.delete(`${BASE_URL}/mentors/${email}`);
};

export default mentor;
