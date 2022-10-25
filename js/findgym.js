// 이전 버튼
const prevBtn = document.querySelector(".prevBtn");

prevBtn.onclick = () => {
  history.back();
};

// 화이트모드, 다크모드 변경하기
const themeToggler = document.querySelector(".theme-toggler");

// change theme
themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");

  themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
});

// 체육관 리스트
const gymList = [
  "구로누리배드민턴장(서울)", 
  "영등포체육관(서울)", 
  "사랑배드민턴체육관(인천)",
  "챌린지배드민턴구장(김포)"
];

let findGym = document.querySelector(".findGym");
let searchBtn = document.querySelector(".searchBtn");
let result = document.querySelector(".result");

searchBtn.addEventListener("click", function () {
  if (!findGym.value) {
    alert("찾으려는 지역을 입력해 주세요!");
  } else {
    const filterGym = gymList.filter((gym) => gym.includes(findGym.value));

    let list = document.createElement("li");

    if (filterGym.length) {
      list.innerText = filterGym;
    } else {
      list.innerText = alert("입력하신 지역에 등록 체육관이 없습니다.");
      findGym.value = "";
      findGym.focus();
      return;
    }
    result.appendChild(list);
    findGym.value = "";
  }
  findGym.focus();
});

// 주소검색 api
const btnFindAddress = document.querySelector(".find_address");
btnFindAddress.addEventListener("click", () => {
  new daum.Postcode({
    oncomplete: function (data) {
      let result = document.querySelector(".result");
      result.innerText = data.autoJibunAddress !== "" ? data.autoJibunAddress : data.jibunAddress;
      console.log("found data", data);
      // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분입니다.
      // 예제를 참고하여 다양한 활용법을 확인해 보세요.
    },
  }).open();
});
