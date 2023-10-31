import {menuActive,dasckMenuActive,reportWindow,addPin,hidePin} from "./listner";
 
  export function getdata() {
        fetch('https://65380171a543859d1bb12222.mockapi.io//seconddesck')
        .then(response=> response.json())
        .then(data => data.forEach(element => {printTodo(element,data)}))
    }
    getdata();
    
     function printTodo(element) {
        //created variables
        let cardImg = new Image();
        cardImg.src = element.img;
        let userAvatar = new Image();
        userAvatar.src = element.avatar;
    
        const conteiner = document.querySelector('.cardConteiner');
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
        cardWrap.id = element.id
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
        menuListItemHide.id = 'hidePin';
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
        conteiner.append(cardWrap);
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
        
        //меню
        wrapMenu.addEventListener('click',(event)=>menuActive(menuListWrap,event))
        
        //добавить пин
        menuLisItemAdded.addEventListener('click',(event)=>addPin(menuListWrap,event))

        //Репорт
        menuListItemReport.addEventListener('click',(event)=>reportWindow(menuListWrap,event));

        //Хедер Меню
        const headerMeny = document.querySelector('.desckListWrap');
        headerMeny.addEventListener('click',(event)=>dasckMenuActive(menuListWrap,event));
        
        //Скрыть пин
        menuListItemHide.addEventListener('click',()=>hidePin(element))

    }
