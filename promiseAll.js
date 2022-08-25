const promiseAll = (promises) => {
  return new Promise((resolve, reject) => {
    let results = [];
    let completedCount = 0;

    promises.forEach((promise) => {
      resolve(promise)
        .then((value) => {
          result.push(value);
          completedCount ++;

          if (completedCount === promises.length) {
            return results;
          }
        })
        .catch(reject)
    })
  })
}