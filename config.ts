
let mode = process.env.NODE_ENV as string;

const BASE_URL = ( mode === 'development' ) ? 'http://localhost:3000' : 'https://cuteblog.com.br';

const API_URL = BASE_URL + "/api/v1/";

export {
  BASE_URL,
  API_URL
}