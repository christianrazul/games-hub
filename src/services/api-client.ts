import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'd734fb22991b4088b9abcff417a7abbc',
  },
});
