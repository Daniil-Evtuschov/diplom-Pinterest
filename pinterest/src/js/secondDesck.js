
export function getSecondData() {
fetch('https://65380171a543859d1bb12222.mockapi.io//seconddesck')
    .then(response=> response.json())
    .then(data => data.forEach(element => {printsecondDesck(element,data)}))
}
getSecondData();

 function printsecondDesck(element) {
    //created variables
    let cardImg = new Image();
    cardImg.src = element.img
    let userAvatar = new Image();
    userAvatar.src = element.avatar
    
    const secondContiner = document.getElementById('secondConteiner');
    const cardWrap = document.createElement('div');
    const card = document.createElement('div');

    const wrapMenu = document.createElement('div');
    const firstDot = document.createElement('span');
    const secondDot = document.createElement('span');
    const thirdDot = document.createElement('span');

    const menuListWrap = document.createElement('div');
    const MenuList = document.createElement('ul');
    const menuLisItemAdded = document.createElement('li');
    const menuListItemHide = document.createElement('li');
    const menuListItemReport = document.createElement('li');

    const userDescriptionWrap = document.createElement('div');
    const userDescription = document.createElement('p');
    
    const userWrap = document.createElement('div');
    const userAvatarWrap = document.createElement('div');
    const userNameWrap = document.createElement('div');
    const userName = document.createElement('div');

    //added class
    cardWrap.classList.add('cardWrap');
    card.classList.add('card');

    cardImg.classList.add('cardImg')

    userDescriptionWrap.classList.add('userDescriptionWrap');
    userDescription.classList.add('userDescription');

    wrapMenu.classList.add('wrapMenu');
    firstDot.classList.add('dots');
    secondDot.classList.add('dots');
    thirdDot.classList.add('dots');

    menuListWrap.classList.add('menuListWrap');
    MenuList.classList.add('menuList');
    menuLisItemAdded.classList.add('menuListItem');
    menuListItemHide.classList.add('menuListItem');
    menuListItemReport.classList.add('menuListItem');

    menuLisItemAdded.innerText = 'Добавить на доску';
    menuListItemHide.innerText = 'Скрыть пин со страницы';
    menuListItemReport.innerText = 'Пожаловаться';

    userWrap.classList.add('user');
    userAvatarWrap.classList.add('userAvatarWrap');
    userAvatar.classList.add('userAvatar');
    userNameWrap.classList.add('userNameWrap');
    userName.classList.add('userName');

    //append elements
    secondContiner.append(cardWrap);
    cardWrap.append(card);
    card.appendChild(cardImg);

    card.append(wrapMenu);
    wrapMenu.append(firstDot,secondDot,thirdDot);
    
    cardWrap.append(menuListWrap)
    menuListWrap.append(MenuList)
    MenuList.append(menuLisItemAdded,menuListItemHide,menuListItemReport)
    
    cardWrap.append(userDescriptionWrap);
    cardWrap.append(userWrap);
    userDescriptionWrap.append(userDescription)
    userDescription.innerText=element.comment;

    userWrap.append(userAvatarWrap);
    userAvatarWrap.appendChild(userAvatar);
    userWrap.append(userNameWrap);
    userNameWrap.append(userName);
    userName.innerHTML=element.name;

     function menuActive(e) {
        e.stopPropagation()

        const headerMenuList = document.querySelector('.dasckMenu');
        menuListWrap.classList.toggle('active')
        document.body.addEventListener('click',()=>{menuListWrap.classList.remove('active')});
        headerMenuList.classList.remove('active');
    }
    wrapMenu.addEventListener('click',menuActive)

    reportWindow
     function reportWindow(e) {
        e.stopPropagation()

        const reportPin = document.getElementById('reportPin');
        const reportbackGround = document.getElementById('reportBackground');
         
        reportPin.classList.toggle('active')
        menuListWrap.classList.remove('active')
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
            e.stopPropagation()
            reportPin.classList.remove('active');
            const continueModalWindow = document.createElement ('div');
            const continueModaltext = document.createElement ('p');
            continueModalWindow.classList.add('continueModalWindow')
            reportbackGround.append(continueModalWindow)
            continueModalWindow.appendChild(continueModaltext)
            continueModaltext.innerText='большое спасибо за обратную связь. Мы отправим подозрительный конетент в службу поддержки на расмотрение'
        }

    }
    menuListItemReport.addEventListener('click',reportWindow);
}

const  dasckMenuListItem = document.getElementById('dasckMenuSecondListItem');
export function secondDesck () {
    const firstConteiner = document.getElementById('firstConteiner');
    const secondContiner = document.getElementById('secondConteiner');

    secondContiner.classList.remove('disabled');
    firstConteiner.classList.add('disabled');

}

dasckMenuListItem.addEventListener('click',secondDesck);