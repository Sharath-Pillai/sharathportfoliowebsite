let tablinks = document.getElementsByClassName('tab-links')
let tabcontents = document.getElementsByClassName('tab-contents')
let sideMenu=document.getElementById('side-menu')
function openTab(tabname) {

    for (tablink of tablinks) {
        tablink.classList.remove('active-links');
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-links');
    document.getElementById(tabname).classList.add('active-tab');
}
// -----------side-menu--------
function openMenu(){
sideMenu.style.right='0';
}
function menubarClose(){
 sideMenu.style.right= '-200px';   ;
}