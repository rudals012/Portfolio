// main.js

/* works 마우스 오버 시 배경컬러 */
const workList = document.querySelectorAll(".works_list>.work");
const bg = document.querySelector(".works");
console.log(workList);

for(let i=0;i<workList.length;i++){
    workList[i].addEventListener("mouseover" , e => {
        e.preventDefault();
        if(i==0){
            bg.style.background = "#2569A8"
        } if(i==1){
            bg.style.background = "#9C2CA6"
        } if(i==2){
            bg.style.background = "#26A46F"
        } if(i==3){
            bg.style.background = "#BAA432"
        } if(i==4){
            bg.style.background = "#A12828"
        }
        
    })
    workList[i].addEventListener("mouseout" , e => {
        e.preventDefault();
        bg.style.background = "#252525"
    })

}

/* 화면 스크롤 이벤트 */
const title = document.querySelector(".title");
const btnLink = document.querySelector(".btn_link");
const workInfo = document.querySelector(".work_info");
const mockupImg = document.querySelector(".mockup_image");
const sections = document.querySelectorAll("#container>section");
const btnTop = document.querySelector(".btn_top");
const scrollDown = document.querySelector(".scrolldown");
let devHeight = window.innerHeight;

window.addEventListener("scroll" , e => {
    let scroll = document.querySelector("html").scrollTop;

    //scrolldown
    if(scroll > 200){
        scrollDown.style.opacity = "0";
    }


    // sections
    for(let i=0;i<sections.length;i++){
        if(scroll >= (i*devHeight-300) && scroll < (i+1)*devHeight){
            sections[i].classList.add("on");
            sections[3].classList.remove("on");
        }if(scroll > (devHeight+3000)){
            sections[3].classList.add("on");
        }
    }

    // btn_link
    if(scroll > 260 ){
        btnLink.classList.add("on");
    }

    // workInfo
    if(scroll > 260 ){
        workInfo.classList.add("on");
    }  

    // btn_top
    if(scroll > 0){
        btnTop.classList.add("ab");
    }
});

let start = setTimeout(() => {
    title.classList.add("on");
    mockupImg.classList.add("on");
},500);

/* 메뉴 클릭시 */
const hamBurger = document.querySelector(".checkbox");
const gnb = document.querySelector(".gnb");
const gnbList = document.querySelectorAll(".gnb_inner>ul>li");
const header = document.querySelector("#header");
console.log(gnbList);

hamBurger.addEventListener("click" , e => {
    gnb.classList.toggle("on");
    header.classList.toggle("on");

});

for(let i=0;i<gnbList.length;i++){
    gnbList[i].addEventListener("mouseover" , e => {
        e.preventDefault();
        gnbList.forEach(item => {
            item.style.opacity = "0.3";
        })
        e.currentTarget.style.opacity = "1";
    });
    gnbList[i].addEventListener("mouseout" , e => {
        gnbList.forEach(item => {
            item.style.opacity = "1";
        })
    });
}

/* 마우스커서 효과 */
const border = document.querySelector(".cursor-border");
const fill = document.querySelector(".cursor-fill");
document.addEventListener("mousemove",function(event){
border.style.cssText = fill.style.cssText = "left: " + event.clientX + "px; top: " + event.clientY + "px;";
});

const btn = document.querySelectorAll("a");
console.log(btn);

hamBurger.addEventListener("mouseover" , e => {
    e.preventDefault();
    border.classList.add("on");
})
hamBurger.addEventListener("mouseout" , e => {
    border.classList.remove("on");
})

for(let i=0;i<btn.length;i++){
    btn[i].addEventListener("mouseover" , e => {
        e.preventDefault();
        border.classList.add("on");
    })
    btn[i].addEventListener("mouseout" , e => {
        e.preventDefault();
        border.classList.remove("on");
    })
}

btnTop.addEventListener("click" , e => {
    e.preventDefault();
    window.scroll({
        left: 0,
        top: 0,
        behavior: 'smooth'
    });
});
