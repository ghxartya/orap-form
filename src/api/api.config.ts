import axios from 'axios'

import { getContentType } from './api.helper'

const axiosOptions = {
  baseURL: process.env.API_URL,
  headers: getContentType()
}

export const instance = axios.create(axiosOptions)
