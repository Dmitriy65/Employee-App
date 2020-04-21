const checkFetchStatus = response => {
  if (response.ok) {
    return response;
  } else {
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

const parseJSON = response => response.status !== 204 ? response.json() : '';

const convertReqParams = params => new URLSearchParams(params).toString();

const prepareReqBody = (body, method) => {
  return {
    method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  }
}

const fetchWrapper = {
  get: (path, params) =>
    fetch(`${path}?${convertReqParams(params)}`)
      .then(checkFetchStatus)
      .then(parseJSON)
  ,
  post: (path, body) =>
    fetch(path, prepareReqBody(body, 'POST'))
      .then(checkFetchStatus)
      .then(parseJSON)
  ,
  patch: (path, params, body) =>
    fetch(`${path}?${convertReqParams(params)}`, prepareReqBody(body, 'PATCH'))
      .then(checkFetchStatus)
      .then(parseJSON)
}

export { fetchWrapper }