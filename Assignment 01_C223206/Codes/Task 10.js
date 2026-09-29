function fetchWithTimeout(url, ms) {
  const fetchPromise = fetch(url);

  const timeoutPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      reject(new Error("Request Timed Out"));
    }, ms);
  });

  return Promise.race([fetchPromise, timeoutPromise]);
}

fetchWithTimeout("https://jsonplaceholder.typicode.com/todos/1", 100)
  .then(function (response) {
    console.log("Success:", response);
  })
  .catch(function (error) {
    console.log("Failed:", error.message);
  });

  