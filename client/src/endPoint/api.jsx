// Frontend code
import axios from "axios";

const BaseUrl = "http://localhost:5000/api/v1";

const endPoint = {
  LOGIN: `${BaseUrl}/login`,
  SIGNUP: `${BaseUrl}/signup`,
  ME: `${BaseUrl}/me`,
  QUESTIONS: `${BaseUrl}/questions`,
  // Define a function to get the URL for a single question
  getSingleQuestion: (questionId) => `${BaseUrl}/questions/${questionId}`,
};

const axiosInstance = axios.create({
  baseURL: BaseUrl, // 'baseURL' should be used instead of 'baseUrl'
});

export { endPoint, axiosInstance };
