import {MenuActive, dasckMenuActive, reportWindow} from "./listner";


dasckMenuActive

reportWindow




function getTodo() {

    fetch('https://65380171a543859d1bb12222.mockapi.io//users')
    .then(response=> response.json())
    .then(data => data.forEach(element => {printTodo(element,data)}))
}
getTodo();

dasckMenuActive

function printTodo(element,data) {

    let cardImg = new Image();
    cardImg.src = element.img
    let userAvatar = new Image();
    userAvatar.src = element.avatar
    const conteiner = document.querySelector('.cardConteiner');
    const cardWrap = document.createElement('div');
    const card = document.createElement('div');
    const userDescriptionWrap = document.createElement('div');
    const wrapMenu = document.createElement('div');
    const firstDot = document.createElement('span');
    const secondDot = document.createElement('span');
    const thirdDot = document.createElement('span');
    const userDescription = document.createElement('p');
    const userWrap = document.createElement('div');
    const userAvatarWrap = document.createElement('div');
    const userNameWrap = document.createElement('div');
    const userName = document.createElement('div');

    cardWrap.classList.add('cardWrap');
    card.classList.add('card');
    cardImg.classList.add('cardImg')
    userDescriptionWrap.classList.add('userDescriptionWrap');
    wrapMenu.classList.add('wrapMenu');
    firstDot.classList.add('dots');
    secondDot.classList.add('dots');
    thirdDot.classList.add('dots');
    userDescription.classList.add('userDescription');
    userWrap.classList.add('user');
    userAvatarWrap.classList.add('userAvatarWrap');
    userAvatar.classList.add('userAvatar');
    userNameWrap.classList.add('userNameWrap');
    userName.classList.add('userName');

    conteiner.append(cardWrap);
    cardWrap.append(card);
    card.appendChild(cardImg);
    card.append(wrapMenu);
    wrapMenu.append(firstDot,secondDot,thirdDot);
    cardWrap.append(userDescriptionWrap);
    cardWrap.append(userWrap);
    userDescriptionWrap.append(userDescription)
    userDescription.innerText=element.comment;
    userWrap.append(userAvatarWrap);
    userAvatarWrap.appendChild(userAvatar);
    userWrap.append(userNameWrap);
    userNameWrap.append(userName);
    userName.innerHTML=element.name;
}
