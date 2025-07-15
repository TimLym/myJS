let lotto1 = document.querySelector("#lotto1");
let lotto2 = document.querySelector("#lotto2");
let lotto3 = document.querySelector("#lotto3");
lotto1.addEventListener("click", ()=>{genNum("1");});
lotto2.addEventListener("click", ()=>{genNum("2");});
lotto3.addEventListener("click", ()=>{genNum("3");});

function genNum(type) {
    if (type === "1") {
        let lottoBalls = genBallPool(38, 6, 8);
        resultLotto("威力彩", lottoBalls.balls, lottoBalls.secondBall);
    } else if (type === "2") {
        let lottoBalls = genBallPool(49, 7);
        console.log(`大樂透號碼7碼：${lottoBalls.balls}`);
        let specNum = lottoBalls.balls.pop();
        resultLotto("大樂透", lottoBalls.balls, specNum);
    }else if (type === "3"){
        let lottoBalls = genBallPool(39,5);
        resultLotto("今彩539", lottoBalls.balls, lottoBalls.secondBall);
    }
}

function genBallPool(scope, count, secondScope = 0){
    let genLotto = [];
    while(genLotto.length < count){
        let ball = Math.floor(Math.random() * scope + 1);
        if (!genLotto.includes(ball)) {
            genLotto.push(ball);
        }
    }

    if (secondScope != 0) {
        let secondNum = Math.floor(Math.random() * secondScope + 1);
        return { balls: genLotto, secondBall: secondNum };

    } else {
        return { balls: genLotto, secondBall: "無" };
    }
    
}

function resultLotto(title, balls, seccondBall) {
    let titlePlay = document.getElementById("title");
    let sortBefore = document.getElementById("sortBefore");
    let sortAfter = document.getElementById("sortAfter");
    let secNo = document.getElementById("secNo");

    sortBalls = [...balls].sort((a,b)=> a-b);
    titlePlay.textContent = `玩法：${title}`;
    sortBefore.textContent = `排序前號碼：${balls}`;
    sortAfter.textContent = `排序後號碼：${sortBalls}`;
    secNo.textContent = `第二區號碼：${seccondBall}`;

}