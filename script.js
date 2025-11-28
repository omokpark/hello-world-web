// 버튼과 메시지 영역을 찾아서 변수에 저장
const button = document.getElementById('helloButton');
const message = document.getElementById('message');

// 버튼을 클릭했을 때 실행될 함수
function toggleHelloWorld() {
    // 현재 메시지가 비어있으면 Hello World 표시, 아니면 숨기기
    if (message.textContent === '') {
        message.textContent = 'Hello World! 🎉';
    } else {
        message.textContent = '';
    }
}

// 버튼에 클릭 이벤트 연결
button.addEventListener('click', toggleHelloWorld);
