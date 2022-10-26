// 이전 버튼 //
const prevBtn = document.querySelector(".prevBtn");

prevBtn.onclick = () => {
  history.back();
};
// prevBtn.addEventListener("click", () => {
//   history.back();
// })

// SCORE //
let left = document.querySelector("#leftScore");
let right = document.querySelector("#rightScore");
let leftnumber = left.innerHTML;
let rightnumber = left.innerHTML;

// 더블클릭 확인을 위함
let leftClickCheck = 0;
let rightClickCheck = 0;

function handleScore(direction) {
  // console.log("direction", direction) // left, right 중 어느쪽 눌렸는지 확인
  if (direction == "left") {
    leftClickCheck++;
    console.log("1", left);

    let timer = setTimeout(() => {
      // 클릭
      // console.log("reset") // timer reset 확인
      if (leftClickCheck == 1) {
        left.innerHTML = ++leftnumber;
      }
      leftClickCheck = 0;
    }, 200);

    // 더블클릭
    if (leftClickCheck == 2) {
      console.log("left double click");
      clearTimeout(timer);
      if (leftnumber > 0) {
        left.innerHTML = --leftnumber;
      }
      leftClickCheck = 0;
    }
  } else if (direction == "right") {
    rightClickCheck++;
    let timer = setTimeout(() => {
      if (rightClickCheck == 1) {
        right.innerHTML = ++rightnumber;
      }
      rightClickCheck = 0;
    }, 200);

    if (rightClickCheck == 2) {
      clearTimeout(timer);
      if (rightnumber > 0) {
        right.innerHTML = --rightnumber;
      }
      rightClickCheck = 0;
    }
  }
}
