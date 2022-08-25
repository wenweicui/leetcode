const throttle = (cb, delay) => {
  let shouldWait = false;

  return (...args) => {
    if (shouldWait) return;

    cb(...args)

    shouldWait = true;
    
    setTimeout(() => {
      shouldWait = false;
    }, delay)
  }
}