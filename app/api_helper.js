import request from 'superagent';

let config = require('../config');

function _request(reqType, endpoint, options = {}) {

  let req, url = endpoint, headers = {
    'Content-type': 'application/json'
  };

  headers = Object.assign({}, headers);
  
  req = request[reqType.toLowerCase()](url)
    .query(options.query || {})
    .set(headers);
  
  if(reqType.toLowerCase() !== 'get') {
    req = req.send(options.payload || {});
  }
  
  return new Promise((resolve, reject) => {
    req.end((err, res) => {
      let response;
      if(err) {
        return reject(err);
      }
      try {
        if(res.text && res.text !== '') {
          response = JSON.parse(res.text);
        }
      } catch(e) {
        return reject(e);
      }
      resolve(response);
    });
  });
}

const API = {
  get: _request.bind(this, 'get'),
  post: _request.bind(this, 'post'),
  patch: _request.bind(this, 'patch'),
  remove: _request.bind(this, 'delete')
};

export default API;
