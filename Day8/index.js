/*
미션1. 자바스크립트의 this
다음 코드에서 regularFunction과 arrowFunction이 있습니다.

    두 함수 모두 this가 어떻게 작동하는지 확인하기 위해 각각 this.value를 출력하려고 합니다.

    각 함수의 this가 무엇을 가리키는지 확인하고, 각 함수가 정상적으로 this.value를 출력할 수 있도록 코드를 수정하세요. (주석으로 작성된 질문에 대한 답도 주석으로 남겨주세요!!)
*/

const obj = {
    value: 42,
    regularFunction: function () {
        console.log(this.value); // 여기서 this는 무엇을 가리키나요? =>this는 함수가 호출 된 객체 obj를 가리킵니다.
    },
    // arrowFunction: () => {
    //     console.log(this.value); // 여기서 this는 무엇을 가리키나요? => this는 객체 obj가 아니라 함수가 정의될 때의 전역 객체를 가리킵니다.
    // },
    arrowFunction: function () { // 화살표 함수를 일반 함수로 변경
        console.log(this.value);
    },
};

obj.regularFunction();
obj.arrowFunction();