import { printCards } from "./PinterestCard";
const headerMeny = document.querySelector('.desckListWrap');
const headerMenuList = document.querySelector('.dasckMenu');


// const listItemReport = document.getElementById('report');
// const reportPin = document.querySelector('.reportPin');
// const reportbackGround = document.querySelector('.reportBackground'); 


// export function reportWindow() {
//     reportPin.classList.toggle('active')
//     menuList.classList.remove('active')
//     document.body.addEventListener('click',()=>{reportPin.classList.remove('active')});
//     reportbackGround.classList.toggle('active')
//     document.body.addEventListener('click',()=>{reportbackGround.classList.remove('active')});
// }
 
// listItemReport.addEventListener('click',reportWindow)



export function dasckMenuActive() {
    headerMenuList.classList.toggle('active')
    document.body.addEventListener('click',()=>{headerMenuList.classList.remove('active')});
    // let menuListWrap = document.getElementsByClassName('.menuListWrap')
    // menuListWrap.classList.remove('active')
}

headerMeny.addEventListener('click',dasckMenuActive)

// export function menuActive() {
//     const headerMenuList = document.querySelector('.dasckMenu');
//     let menuListWrap =  document.getElementsByClassName('menuListWrap')
//     console.log(menuListWrap);
//     menuListWrap.classList.toggle('active');
//     // document.body.addEventListener('click',()=>{menuListWrap.classList.remove('active')});
//     headerMenuList.classList.remove('active');
// }

