
let OpenMenuLeft = document.querySelector('#OpenMenuLeftCenter');
let MenuOver     = document.querySelector('.sidebar');
let CloseMenuLeft = document.querySelector('.CloseMenuLeft');



OpenMenuLeft.addEventListener("click", () => {
    document.querySelector('.sidebar').style.left= "0";
});

CloseMenuLeft.addEventListener("click", () => {
    document.querySelector('.sidebar').style.left= "-200%";
});