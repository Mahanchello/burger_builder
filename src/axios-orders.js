import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-18b76.firebaseio.com/',
});

export default instance;
