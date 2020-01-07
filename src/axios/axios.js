import axios from 'axios'

export const axiosBase = axios.create({
  baseURL: 'https://ddanshin-af25f.firebaseio.com/'
})