// 미션1
const mul =(a,b)=> a*b;
console.log(mul(3,4));

// 미션 2
const book = {
    title: '자바스크립트',
    author: '담곰이',

    getSummary: function () {
        return `책 제목은 ${this.title}이고 저자는 ${this.author}입니다.`;
    },
};

console.log(book.getSummary());

// 미션3
function sumNumbers(a, b) {
    function addFive(number) {
        //코드 작성
        return number + 5
    }
    //코드 작성
    return addFive(b) + a;
}
console.log(sumNumbers(3, 7)); // 출력: 15 (7에 5를 더한 후 3을 더함)
console.log(sumNumbers(10, 5)); // 출력: 20 (5에 5를 더한 후 10을 더함)