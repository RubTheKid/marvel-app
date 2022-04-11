import axios from 'axios';
import md5 from 'md5';

const baseUrl = 'http://gateway.marvel.com/v1/public';
const privateKey = '93186bfacb320bae2a0a8c7ca7bbf81acbc3b8c9';
const publicKey = 'c84eaf14db29cc232543abbc18edc30f';

const timeStamp = new Date().getTime();
const hash = md5(timeStamp + privateKey + publicKey);
const queryString = `ts=${timeStamp}&apikey=${publicKey}&hash=${hash}&offset=500&limit=40`;

export const getCharacters = () => axios.get(`${baseUrl}/characters?${queryString}`)
  .then((response) => response.data.data.results)
  .catch((err) => console.log(err));
