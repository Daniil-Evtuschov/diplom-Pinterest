import  printCards  from "./PinterestCard";
import firstDec from "./FirstDesck";


const headerMenuList = document.querySelector('.dasckMenu');

export function reportWindowInStoraje(menuListWrap,event,element,cardWrap) {
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

    const modalDesckWindow = document.querySelector('.secondModal');
    modalDesckWindow.classList.remove('active')

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
        document.body.addEventListener('click',()=>{continueModalWindow.remove(continueModalWindow)});

        let getStorage = JSON.parse(localStorage.getItem('firstDesc'));
        let filter = getStorage.filter(todo=> todo.id !== element.id);
        cardWrap.remove(cardWrap);
        localStorage.setItem('firstDesc',JSON.stringify(filter));
    }
    let badPin = document.getElementById(element.id)
    badPin.classList.add('disabled')
}

export function reportWindow(menuListWrap,event,element) {
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

    const modalDesckWindow = document.querySelector('.secondModal');
    modalDesckWindow.classList.remove('active')

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
        document.body.addEventListener('click',()=>{continueModalWindow.remove(continueModalWindow)});

        let badPin = document.getElementById(element.id)
        badPin.classList.add('disabled')
    }
}

export function addPin (menuListWrap,event,element) {
    event.stopPropagation();
    const reportbackGround = document.getElementById('reportBackground');
    const modalDesckWindow = document.querySelector('.secondModal');
    const AddedInfirstDesck = document.querySelector('.AddedInfirstDesck');
    const AddedInSecondDesck = document.querySelector('.secondModalMenuList');
    const AddedInThirdDesck = document.querySelector('.secondModalMenuList');


    reportbackGround.classList.add('active');
    document.body.addEventListener('click',()=>{reportbackGround.classList.remove('active')});
    menuListWrap.classList.remove('active');

    modalDesckWindow.classList.add('active');
    localStorage.setItem('descCandidate', JSON.stringify(element));
    
    // AddedInfirstDesck.onclick = (event,element)=>{
      
    //}
    // AddedInSecondDesck.onclick = ()=>{
    //     console.log('222');
    // }
    // AddedInThirdDesck.onclick = ()=>{
    //     console.log('333');
    // }
}

const AddedInfirstDesck = document.querySelector('.AddedInfirstDesck');

function firstDescStoraje(event) {
    event.stopPropagation();

    const reportbackGround = document.getElementById('reportBackground');
    let firstDesckStorje = localStorage.getItem('firstDesc') ? JSON.parse(localStorage.getItem('firstDesc')) : [];
    const element = JSON.parse(localStorage.getItem('descCandidate'));
    
    reportbackGround.classList.remove('active');

    firstDesckStorje.push(element);

    localStorage.setItem('firstDesc', JSON.stringify(firstDesckStorje));
    }

AddedInfirstDesck.addEventListener('click',firstDescStoraje);

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

export function deleteInStorage(element,cardWrap) {
    let getStorage = JSON.parse(localStorage.getItem('firstDesc'));
    let filter = getStorage.filter(todo=> todo.id !== element.id);
    cardWrap.remove(cardWrap);
    localStorage.setItem('firstDesc',JSON.stringify(filter));
}


const desckMenufirstListItem = document.getElementById('dasckMenufirstListItem')
function mainDesck () {
    const mainConteiner = document.getElementById('mainConteiner');

    const firstDesck = document.getElementById('firstDesck');
    const secondDesck = document.getElementById('secondDesck');
    const thirdDesck = document.getElementById('thirdDesck');

    firstDesck.classList.remove('active')
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

    mainConteiner.classList.remove('active')
    firstDesck.classList.remove('disabled')
    firstDesck.classList.add('active')

    
    mainConteiner.classList.add('disabled');
    secondDesck.classList.add('disabled');
    thirdDesck.classList.add('disabled');

    firstDesck.innerHTML = '';

    let firstDesckStorje = localStorage.getItem('firstDesc') ? JSON.parse(localStorage.getItem('firstDesc')) : [];
    firstDesckStorje.forEach(item => firstDec(item));
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

