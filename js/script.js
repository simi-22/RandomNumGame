
//유저는 숫자를 입력할 수 있다.
//유저가 입력한 숫자가 컴퓨터가 뽑은 숫자보다 작으면 up!이라고 알려준다.
//유저가 입력한 숫자가 크면 다운이라고 알려준다.
//유저가 입혁한 숫자가 컴퓨터가 뽑은 숫자와 일치한다면 댓츠라잇이라고 뜨고 게임이 종료된다.
//유저에게는 총 다섯번의 기회가 있다.
//게임이 종료되면 버튼은 비활성화 된다.
//리셋버튼을 누르면 게임이 초기화된다.
//유저가 1~100범위 밖에 숫자를 입력할 시에 경고메시지가 뜬다.
//유저가 이미 입력한 값을 또 입력할 시에 경고메세지가 뜬다.
//반응형 UI
let computerNum = 0;
let randomBox = document.getElementById("random-box");
let playBtn = document.getElementById("play-btn");
let userInput = document.getElementById("value-box");
let resultArea = document.getElementById("result-area");
let resetBtn = document.getElementById("reset-btn");
let chances = 5;
let gameOver = false;
let chanceArea = document.getElementById("chance-area");
let history = []


function defaultValueDelete(event){//폼 브라우저 기본값(새로고침)막는 함수
    event.preventDefault();
}
randomBox.addEventListener("submit",defaultValueDelete);//폼이 제출될때 새로고침막는 함수 호출

playBtn.addEventListener("click", play) // 플레이버튼에 클릭이벤트 추가 클릭했을때 플레이 함수 실행
//함수를 매개변수로 넘길때 ()를 안씀, ()를 쓰면 바로 실행.
resetBtn.addEventListener("click", reset);
userInput.addEventListener("focus", function(){userInput.value = ""});


function pickRandomNum(){
    computerNum = Math.floor(Math.random() * 100)+1;
    console.log("정답", computerNum);
}

function play(){
    let userValue = userInput.value;

    if(userValue<1 || userValue>100){
        resultArea.innerText = "1과 100사이 숫자를 입력해주세요"
        return;
    }
    if(history.includes(userValue)){
        resultArea.innerText = "이미 입력한 숫자입니다."
        return;
    }

    chances -- ;
    chanceArea.innerText = `chance : ${chances}`

    if(userValue < computerNum){
        resultArea.innerText = "UP!";
    }else if(userValue > computerNum){
        resultArea.innerText = "DOWN!";
    }else{
        resultArea.innerText = "CORRECT!";
        gameOver = true;
    }

    history.push(userValue);//히스토리라는 배열에 유저밸류 저장



    if(chances < 1){
        gameOver = true;
    }
    if(gameOver == true){
        playBtn.disabled = true;
    }
};

function reset(){
    //userinput창 정리
    userInput.value = ""
    //새로운 번호 생성
    pickRandomNum();
    resultArea.innerText = "New Game!";
    chanceArea.innerText = "Chance : 5";
    gameOver = false;
    playBtn.disabled = false;
    chances = 5;
    chanceArea.innerText = `chance : ${chances}`;
    history = [];
}


pickRandomNum();