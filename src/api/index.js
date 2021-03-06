import axios from 'axios';
import URLs from './URLs';

const appkey = '15067884835_1590928628683';
const ajax = axios.create({
  baseURL: URLs.baseURL,
  params: {
    appkey,
  },
});
ajax.interceptors.response.use((data) => {
  const newdata = data.data;
  if (newdata.status === 'success') {
    return newdata;
  }
  return Promise.reject(newdata.msg);
});
const login = (data) => ajax.post(URLs.login, `appkey=${appkey}&${data}`);
const logon = (data) => ajax.post(URLs.logon, `appkey${appkey}&${data}`);
const findByPage = (page, size) => ajax.get(URLs.findByPage, {
  params: {
    page,
    size,
  },
});
const updateStu = (option) => ajax.get(URLs.updateStu, {
  params: {
    ...option,
  },
});
const addStu = (option) => ajax.get(URLs.addStu, {
  params: {
    ...option,
  },
});
const delStu = (sNo) => ajax.get(URLs.delStu, {
  params: {
    sNo,
  },
});

export default {
  login,
  logon,
  findByPage,
  updateStu,
  addStu,
  delStu,
};
