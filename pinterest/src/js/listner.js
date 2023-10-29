// const menuList = document.getElementsByClassName('menuListWrap');
// const menu = document.getElementsByClassName('wrapMenu');

const headerMeny = document.querySelector('.desckListWrap');
const headerMenuList = document.querySelector('.dasckMenu');

// const listItemReport = document.getElementById('report');
// const reportPin = document.querySelector('.reportPin');
// const reportbackGround = document.querySelector('.reportBackground') 

// export function MenuActive() {
//     menuList.classList.toggle('active')
//     // document.body.addEventListener('click',()=>{menuList.classList.remove('active')});
//     headerMenuList.classList.remove('active')
// }

// menu.addEventListener('click',MenuActive)

// export function MenuActive() {
//     menuList.classList.toggle('active')
//     document.body.addEventListener('click',()=>{menuList.classList.remove('active')});
//     headerMenuList.classList.remove('active')
// }

// menu.addEventListener('click',MenuActive)


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
    menuList.classList.remove('active')
}

headerMeny.addEventListener('click',dasckMenuActive)
