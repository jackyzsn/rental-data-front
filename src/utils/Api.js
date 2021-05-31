import axios from 'axios';

export function simpleRequest(endpoint, payload = {}, method = 'POST', dispatch) {
  const setLoading = (flag) => {
    dispatch({
      type: 'SET_LOADING',
      payload: flag
    });
  };

  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: 'Basic d2ViOmFiY2RlZmdoaWprMTIzNDU2Nzg5'
  };

  const opts = {
    url: endpoint,
    method,
    data: JSON.stringify(payload),
    headers,
    withCredentials: true // for cors cookies
  };

  setLoading(true);

  return axios(opts)
    .then((resp) => {
      if (resp.status !== 200) {
        throw resp;
      } else {
        return resp.data;
      }
    })
    .then((json) => {
      setLoading(false);
      return Promise.resolve(json);
    })
    .catch((error) => {
      setLoading(false);
      console.log(JSON.stringify(error));
      return Promise.reject(error);
    });
}
