const $text = document.getElementById('text');
const $button = document.getElementById('changeTextButton');

function changeText() {
    $text.textContent = '텍스트가 변경되었습니다!';
}

$button.addEventListener('click', changeText);