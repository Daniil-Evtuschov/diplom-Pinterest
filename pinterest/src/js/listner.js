import { printCards } from "./PinterestCard";
const headerMenuList = document.querySelector('.dasckMenu');

export function reportWindow(menuListWrap,event) {
    event.stopPropagation();

    const reportPin = document.getElementById('reportPin');
    const reportbackGround = document.getElementById('reportBackground');
     
    reportPin.classList.toggle('active');
    menuListWrap.classList.remove('active');
    document.body.addEventListener('click',()=>{reportPin.classList.remove('active')});

    reportbackGround.classList.toggle('active')
    document.body.addEventListener('click',()=>{reportbackGround.classList.remove('active')});

    const ContinueButton = document.getElementById('acceptButton');
    const closeButton = document.getElementById('closeButton');

    closeButton.onclick = () => {
        reportPin.classList.remove('active');
        reportbackGround.classList.remove('active');
    }

    ContinueButton.onclick = (e) => {
        e.stopPropagation();
        reportPin.classList.remove('active');
        const continueModalWindow = document.createElement ('div');
        const continueModaltext = document.createElement ('p');
        continueModalWindow.classList.add('continueModalWindow');
        reportbackGround.append(continueModalWindow);
        continueModalWindow.appendChild(continueModaltext);
        continueModaltext.innerText='большое спасибо за обратную связь. Мы отправим подозрительный конетент в службу поддержки на расмотрение';   
    }
}

export function addPin (menuListWrap,event) {
    event.stopPropagation();
    const reportbackGround = document.getElementById('reportBackground');
    const modalDesckWindow = document.createElement('ul')
    const AddedInfirstDesck = document.createElement('li')
    const AddedInSecondDesck = document.createElement('li')
    const AddedInThirdDesck = document.createElement('li')

    AddedInfirstDesck.innerText="Доска 1"
    AddedInSecondDesck.innerText="Доска 2"
    AddedInThirdDesck.innerText="Доска 3"

    const reportPin = document.getElementById('reportPin');
    const reportPinList =document.querySelector('.reportPinList');
    const buttonWrap = document.querySelector('.buttonWrap');
   

    reportbackGround.classList.toggle('active');
    document.body.addEventListener('click',()=>{reportbackGround.classList.remove('active')});

    
    reportPin.classList.toggle('active');
    menuListWrap.classList.remove('active');
    document.body.addEventListener('click',()=>{reportPin.classList.remove('active')});

    reportPin.id ="secondModal"

    buttonWrap.remove(buttonWrap)
    reportPinList.remove(reportPinList);

    reportPin.append(modalDesckWindow);
    modalDesckWindow.append(AddedInfirstDesck,AddedInSecondDesck,AddedInThirdDesck);
}

export function menuActive(menuListWrap,event) {
    event.stopPropagation()
    const headerMenuList = document.querySelector('.dasckMenu');
    menuListWrap.classList.toggle('active');
    document.body.addEventListener('click',()=>{menuListWrap.classList.remove('active')});
    headerMenuList.classList.remove('active');
}

 export function dasckMenuActive(menuListWrap,event) {
    event.stopPropagation()
    headerMenuList.classList.toggle('active');
    document.body.addEventListener('click',()=>{headerMenuList.classList.remove('active')});
    menuListWrap.classList.remove('active');
}

export function hidePin (element) {
    let badPin = document.getElementById(element.id)
    badPin.classList.add('disabled')
}
const desckMenufirstListItem = document.getElementById('dasckMenufirstListItem')
function mainDesck () {
    const mainConteiner = document.getElementById('mainConteiner');

    const firstDesck = document.getElementById('firstDesck');
    const secondDesck = document.getElementById('secondDesck');
    const thirdDesck = document.getElementById('thirdDesck');

    mainConteiner.classList.remove('disabled')
    mainConteiner.classList.add('active')

    firstDesck.classList.add('disabled');
    secondDesck.classList.add('disabled');
    thirdDesck.classList.add('disabled');
}
desckMenufirstListItem.addEventListener('click',mainDesck);


const dasckMenusFirstListItem = document.getElementById('AddedInfirstDesck')
function firstDesck () {
    const mainConteiner = document.getElementById('mainConteiner');

    const firstDesck = document.getElementById('firstDesck');
    const secondDesck = document.getElementById('secondDesck');
    const thirdDesck = document.getElementById('thirdDesck');

    firstDesck.classList.remove('disabled')
    firstDesck.classList.add('active')

    
    mainConteiner.classList.add('disabled');
    secondDesck.classList.add('disabled');
    thirdDesck.classList.add('disabled');
}
dasckMenusFirstListItem.addEventListener('click',firstDesck);


const dasckMenuSecondListItem = document.getElementById('AddedInSecondDesck');
function secondDesck () {
    const mainConteiner = document.getElementById('mainConteiner');

    const firstDesck = document.getElementById('firstDesck');
    const secondDesck = document.getElementById('secondDesck');
    const thirdDesck = document.getElementById('thirdDesck');
    
    secondDesck.classList.remove('disabled');
    secondDesck.classList.add('active')

    firstDesck.classList.add('disabled');
    mainConteiner.classList.add('disabled');
    thirdDesck.classList.add('disabled');
}
dasckMenuSecondListItem.addEventListener('click',secondDesck);


const dasckMenuThirdListItem = document.getElementById('AddedInThirdDesck');
function thirdDesck () {
    const mainConteiner = document.getElementById('mainConteiner');

    const firstDesck = document.getElementById('firstDesck');
    const secondDesck = document.getElementById('secondDesck');
    const thirdDesck = document.getElementById('thirdDesck');
    
    thirdDesck.classList.remove('disabled');
    thirdDesck.classList.add('active')
    
    firstDesck.classList.add('disabled');
    secondDesck.classList.add('disabled');
    mainConteiner.classList.add('disabled');
}
dasckMenuThirdListItem.addEventListener('click',thirdDesck);

