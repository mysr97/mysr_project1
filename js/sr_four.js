// 랜덤 슬라이드
let slide = document.getElementById("slide");
let img_arr = ["img/sub_product_j1.jpg", "img/sub_product_j2.jpg", "img/sub_product_j3.jpg", "img/sub_product_j4.jpg","img/sub_product_j5.jpg","img/sub_product_j6.jpg"];

let interval = setInterval(() => {
    let random = Math.floor(Math.random() * img_arr.length);
    slide.src= img_arr[random];
}, 200);

slide.addEventListener("mouseover",function(){
    clearInterval(interval)
});
slide.addEventListener("mouseout",function(){
    interval =  setInterval(() => {
    let random = Math.floor(Math.random() * img_arr.length);
    slide.src= img_arr[random];
}, 200); // 변수에 다시 setInterval 함수의 반환값을 재할당하여 재시작
});