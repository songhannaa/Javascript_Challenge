// 미션1. API 호출1
// 아래와 같은 fakeApiCall 함수가 있습니다. 이 함수는 2초 후에 사용자 정보를 반환합니다.
//
// async와 await를 사용하여 이 API 호출을 기다리고, 사용자 이름을 콘솔에 출력하는 fetchUserData 함수를 작성하세요.
function fakeApiCall() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ name: 'John Doe', age: 30 });
        }, 2000);
    });
}

async function fetchUserData() {
    try {
        const user = await fakeApiCall();
        console.log(`사용자 이름: ${user.name}`);
    } catch (error) {
        console.log('API 호출 중 오류가 발생했습니다.');
    }
}

fetchUserData(); // 출력: 2초 후 "사용자 이름: John Doe"


/*
미션2. API 호출2
아래의 API 주소는 포켓몬들의 정보가 담겨있는 data를 반환합니다. 주어진 API 주소를 사용해, 아래의 조건을 모두 만족하는 코드를 작성하세요.

    try/catch를 사용한 에러 핸들링
async/await을 사용한 비동기 처리
받아온 데이터들 중 "color 값이 green"인 포켓몬의 정보들이 담긴 배열을 출력하세요.
    출력 결괏값 : (이상해씨, 이상해풀, 이상해꽃, 캐터피, 단데기, 모다피, 우츠동, 우츠보트, 스라크의 정보가 담긴 9개의 객체들이 모인 배열)*/
const API_URL = 'https://pokemon-api-ecru-eta.vercel.app/main';

const getPokemonData = async () => {
    try {
        let response = await fetch(API_URL);
        let data = await response.json();
        let pokemonArray = data.data;
        let answer = pokemonArray.filter((elm) => elm.color === 'green');
        console.log(answer);
    } catch (error) {
        console.log(`error : ${error}`);
    }
};

getPokemonData();