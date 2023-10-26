// const burger = document.querySelector('#burger');
// const menu = document.querySelector('#menu');

// function openMenu() {
//     mob-menu.
//     mob-menu
//   style.display = 'block';
//   }
//   function closeMenu() {
//     mobmenu.style.display = 'none';
//   }

// burger.addEventListener('click', ()=> {
//     if (menu.classList.contains('is-open') == true){
//         menu.classList.remove('is-open');
//     } else {
//         menu.classList.add('is-open');
//     }
// });

document.querySelector('#burger').addEventListener('click',function () {
    document.querySelector('#menu').classList.add('is-open')
})

document.querySelector('#clouseButtom').addEventListener("click",function () {
    document.querySelector('#menu').classList.remove("is-open")
})


document.querySelector('#open-bacdroup').addEventListener('click',function () {
    document.querySelector('#backdrop').classList.add('is-open')
})

document.querySelector('#clouse-backdroup').addEventListener("click",function () {
    document.querySelector('#backdrop').classList.remove("is-open")
})
