function add10(num) {
  const promise = new Promise((resolve, reject) => {
    // 비동기 작업
    // executor 함수 내부에서 비동기 작업을 수행한다.
    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
        return;
      }

      reject(`${num}이 숫자가 아닙니다.`);
    }, 200);
  });

  return promise;
}

add10(0)
  .then((result) => {
    console.log(result);

    return add10(result);
  })
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
