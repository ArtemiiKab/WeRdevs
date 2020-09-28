export const sendData = data => {
  return {
    type: 'Send',
    payload: data,
  }
}

export const clearData = () => {
  return {
    type: 'Clear',
  }
}