import axios from "axios";

export const fileUrl = axios.create({
  baseURL: 'https://skillspace.s3.us-east-1.amazonaws.com'
})