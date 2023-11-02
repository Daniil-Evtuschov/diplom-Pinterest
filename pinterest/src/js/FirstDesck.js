import {menuActive,reportWindow,addPin,hidePin,deleteInStorage,reportWindowInStoraje} from "./listner";
import  printTodo  from "./PinterestCard";

   export default function firstDec(element) {
        let cardImg = new Image();
                cardImg.src = element.img;
                let userAvatar = new Image();
                userAvatar.src = element.avatar;

                const conteiner = document.querySelector('.firstDesck');
                const cardWrap = document.createElement('div');
                const card = document.createElement('div');
                const cardImgWrap = document.createElement('div');
            
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
                const hashtag = document.createElement('span');
                
                const userWrap = document.createElement('div');
                const userAvatarWrap = document.createElement('div');
                const userNameWrap = document.createElement('div');
                const userName = document.createElement('div');
            
                //added class
                cardWrap.classList.add('cardWrap');
                cardWrap.id = element.id
                card.classList.add('card');
        
                cardImgWrap.classList.add('cardImgWrap')
                cardImg.classList.add('cardImg')
            
                userDescriptionWrap.classList.add('userDescriptionWrap');
                hashtag.classList.add('hashtag');
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
                card.appendChild(cardImgWrap);
                cardImgWrap.appendChild(cardImg)
            
                cardImgWrap.append(wrapMenu);
                wrapMenu.append(firstDot,secondDot,thirdDot);
                
                cardWrap.append(menuListWrap)
                menuListWrap.append(MenuList)
                MenuList.append(menuLisItemAdded,menuListItemHide,menuListItemReport)
                
                card.append(userDescriptionWrap);
                card.append(userWrap);
                userDescriptionWrap.append(userDescription);
                userDescriptionWrap.append(hashtag);
                userDescription.innerText=element.comment;
                hashtag.innerText=element.hashtag
            
                userWrap.append(userAvatarWrap);
                userAvatarWrap.appendChild(userAvatar);
                userWrap.append(userNameWrap);
                userNameWrap.append(userName);
                userName.innerHTML=element.name;
                
                //меню
                wrapMenu.addEventListener('click',(event)=>menuActive(menuListWrap,event));
                
                //добавить пин
                menuLisItemAdded.addEventListener('click',(event)=>addPin(menuListWrap,event,element));
        
                //Репорт
                menuListItemReport.addEventListener('click',(event)=>reportWindowInStoraje(menuListWrap,event,element,cardWrap));
                
                //Скрыть пин
                menuListItemHide.addEventListener('click',()=>deleteInStorage(element,cardWrap,));
        }   
