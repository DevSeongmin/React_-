// async
// 어떤 함수를 비동기 함수로 만들어주는 키워드
// 함수가 프로미스를 반환하도록 변환하는 키워드

async function getData() {
  return {
    name: "성민",
    id: "아이고 시팔 프론트",
  };
}

// awit
// async 함수 내부에서만 사용 가능
// 프로미스가 처리될 때까지 기다리고, 처리된 값을 반환

async function printData() {
  const data = await getData();
  console.log(data);
}

printData();
