const sideBar = document.getElementById('sidebar');
const menuBar = document.getElementById('menuBar');
const subscribers = document.getElementById('subscribers');
const container = document.getElementById('container');
const menuName = document.getElementsByClassName('menu-name');


menuBar.addEventListener('click',()=>{
  sideBar.classList.toggle('sidebar-width');
  for(let obj of menuName){
    obj.classList.toggle('remove-label');
  }
  subscribers.classList.toggle('remove-label');
  container.classList.toggle('set-pad-6');
});
