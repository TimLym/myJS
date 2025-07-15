// 排序前
let sortBefore = document.getElementById("sortBefore");
// 排序後
let sortAfter = document.getElementById("sortAfter");
// 第二區號碼
let secNum = document.getElementById("secNo");

function lott(tp,firstMax,firstNo,secMax,secNo) {
    // 建立存放號碼的空陣列
    let lott = [];
    let lottNo2;
    if (tp == 2){firstNo = firstNo + 1;}
    // 產生第一區
    while (1) {
        // 檢查是已經有6個號碼
        if (lott.length == firstNo) {
            break;
        }
        // 亂數取號碼
        let lottNo = Math.floor(Math.random() * firstMax) + 1;
        // 檢查是否重覆
        if (!lott.includes(lottNo)) {   // 沒有重覆
            lott.push(lottNo);  // 增加號碼到陣列中
        }
    }
    // console.log(tp);
    // console.log(lott);
    // 產生第二區
    if (secNo != 0 ){
        (tp == 2) ? lottNo2 = lott.pop() : lottNo2 = Math.floor(Math.random() * secMax) + 1;
    }else {
        lottNo2 = "無";
    }
    
    // 未排序
    sortBefore.textContent = "排序前號碼:" + lott;
    // 排序
    lott.sort((a, b) => a - b);
    sortAfter.textContent = "排序後號碼:" + lott;
    // 第二區
    secNum.textContent = "第二區號碼:" + lottNo2;    
}