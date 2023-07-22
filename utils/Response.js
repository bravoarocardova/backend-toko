export const success =  (res, message, data, status = 200) => {
  return res.status(status).json({
    status: status,
    message: message, 
    data: data
  });
}

export const errorResp = (res, message, status = 400) => {
  return res.status(status).json({
    status: status,
    message: message
  });
}

export const response = (status, message, data) => {
  return {status, message, data};
}