import  printCards  from "./PinterestCard";
import firstDec from "./FirstDesck";
import secondDesc from "./secondDesck";
import thirdDesc from "./thirdDesck";

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

            let getSecondStorage = JSON.parse(localStorage.getItem('secondDesc'));
            let secondFilter = getSecondStorage.filter(todo=> todo.id !== element.id);
            cardWrap.remove(cardWrap);
            localStorage.setItem('secondDesc',JSON.stringify(secondFilter));

            let getThirdStorage = JSON.parse(localStorage.getItem('thirdDesc'));
            let thirdFilter = getThirdStorage.filter(todo=> todo.id !== element.id);
            cardWrap.remove(cardWrap);
            localStorage.setItem('thirdDesc',JSON.stringify(thirdFilter));
        

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


    reportbackGround.classList.add('active');
    document.body.addEventListener('click',()=>{reportbackGround.classList.remove('active')});
    menuListWrap.classList.remove('active');

    function idGenerator() {
        let min = 1;
        let max = 1000;
        return Math.floor(Math.random() * (max - min)) + min;
    }

    element.id = idGenerator()

    modalDesckWindow.classList.add('active');
    localStorage.setItem('descCandidate', JSON.stringify(element));
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


const adedInSecindDesck = document.querySelector('.adedInSecindDesck');

function secondDescStorajeAd(event) {
    event.stopPropagation();

    const reportbackGround = document.getElementById('reportBackground');
    let secondDescStoraje = localStorage.getItem('secondDesc') ? JSON.parse(localStorage.getItem('secondDesc')) : [];
    const element = JSON.parse(localStorage.getItem('descCandidate'));
    
    reportbackGround.classList.remove('active');

    secondDescStoraje.push(element);

    localStorage.setItem('secondDesc', JSON.stringify(secondDescStoraje));
    }

    adedInSecindDesck.addEventListener('click',secondDescStorajeAd);



    const adedInThirdDesck = document.querySelector('.adedInThirdDesck');
    
function thirdDescStorajeAd(event) {
    event.stopPropagation();

    const reportbackGround = document.getElementById('reportBackground');
    let thirdDescStoraje = localStorage.getItem('thirdDesc') ? JSON.parse(localStorage.getItem('thirdDesc')) : [];
    const element = JSON.parse(localStorage.getItem('descCandidate'));
    
    reportbackGround.classList.remove('active');

    thirdDescStoraje.push(element);

    localStorage.setItem('thirdDesc', JSON.stringify(thirdDescStoraje));
    }

    adedInThirdDesck.addEventListener('click',thirdDescStorajeAd);


export function menuActive(menuListWrap,event) {
    event.stopPropagation();
    const headerMenuList = document.querySelector('.dasckMenu');
    menuListWrap.classList.toggle('active');
    document.body.addEventListener('click',()=>{menuListWrap.classList.remove('active')});
    headerMenuList.classList.remove('active');
    
}

 export function dasckMenuActive(menuListWrap,event) {
    event.stopPropagation()
    const headerMenuList = document.getElementById('dasckMenu');
    headerMenuList.classList.add('active');
    document.body.addEventListener('click',()=>{headerMenuList.classList.remove('active')});
    menuListWrap.classList.remove('active');
    console.log('11');
}

export function hidePin (element) {
    let badPin = document.getElementById(element.id)
    badPin.classList.add('disabled')
}

export function deleteInStorage(element,cardWrap) {

    let getStorage = JSON.parse(localStorage.getItem('firstDesc'));
    let filter = getStorage.filter(todo=> todo.id !== element.id );
    cardWrap.remove(cardWrap)
    localStorage.setItem('firstDesc',JSON.stringify(filter));
    return
}


export function deleteInSecondStorage(element,cardWrap) {
    let getSecondStorage = JSON.parse(localStorage.getItem('secondDesc'));
    let secondFilter = getSecondStorage.filter(todo=> todo.id !== element.id);
    cardWrap.remove(cardWrap);
    localStorage.setItem('secondDesc',JSON.stringify(secondFilter));
    return
}



export function deleteInThirdStorage(element,cardWrap) {
    let getThirdStorage = JSON.parse(localStorage.getItem('thirdDesc'));
    let ThirdStorageFilter = getThirdStorage.filter(todo=> todo.id !== element.id);
    cardWrap.remove(cardWrap)
     localStorage.setItem('thirdDesc',JSON.stringify(ThirdStorageFilter));
}



const desckMenufirstListItem = document.getElementById('dasckMenufirstListItem')

function mainDesck () {
    const mainConteiner = document.getElementById('mainConteiner');

    const firstDesck = document.getElementById('firstDesck');
    const secondDesck = document.getElementById('secondDesck');
    const thirdDesck = document.getElementById('thirdDesck');

    firstDesck.classList.remove('active')
    secondDesck.classList.remove('active')
    thirdDesck.classList.remove('active');



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
    secondDesck.classList.remove('active')
    thirdDesck.classList.remove('active');

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

    mainConteiner.classList.remove('active')
    firstDesck.classList.remove('active')
    thirdDesck.classList.remove('active');

    secondDesck.classList.remove('disabled');
    secondDesck.classList.add('active')

    firstDesck.classList.add('disabled');
    mainConteiner.classList.add('disabled');
    thirdDesck.classList.add('disabled');

    secondDesck.innerHTML = '';

    let secondDescStoraje = localStorage.getItem('secondDesc') ? JSON.parse(localStorage.getItem('secondDesc')) : [];
    secondDescStoraje.forEach(item => secondDesc(item));

}
dasckMenuSecondListItem.addEventListener('click',secondDesck);


const dasckMenuThirdListItem = document.getElementById('AddedInThird');
function thirdDesck () {
    const mainConteiner = document.getElementById('mainConteiner');

    const firstDesck = document.getElementById('firstDesck');
    const secondDesck = document.getElementById('secondDesck');
    const thirdDesck = document.getElementById('thirdDesck');

    mainConteiner.classList.remove('active');
    firstDesck.classList.remove('active');
    secondDesck.classList.remove('active');
    
    thirdDesck.classList.remove('disabled');
    thirdDesck.classList.add('active')
    
    firstDesck.classList.add('disabled');
    secondDesck.classList.add('disabled');
    mainConteiner.classList.add('disabled');

    thirdDesck.innerHTML = '';

    let ThirdDescStoraje = localStorage.getItem('thirdDesc') ? JSON.parse(localStorage.getItem('thirdDesc')) : [];
    ThirdDescStoraje.forEach(item => thirdDesc(item));
}
dasckMenuThirdListItem.addEventListener('click',thirdDesck);

