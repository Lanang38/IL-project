import axios from "axios";

const BASE_URL = "http://localhost:3000/api/v1"; // Ganti dengan URL backend Anda

// API untuk Mentor
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

// API untuk Notifikasi
export const sendNotification = async (notificationData) => {
  try {
    const response = await axios.post(`${BASE_URL}/notifications`, notificationData);
    return response.data;
  } catch (error) {
    console.error("Gagal mengirim notifikasi:", error);
    throw error;
  }
};

export default {
  fetchAllMentors,
  addMentor,
  editMentor,
  deleteMentor,
  sendNotification,
};
