const debounce = (cb, delay) => {
  let timeout;

  return (...args) => {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      cb(...args)
    }, delay)
  }
}