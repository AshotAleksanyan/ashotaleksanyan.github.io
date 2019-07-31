'use strict';
// setting current year
document.getElementById("currentYear").innerText =''+ new Date().getFullYear();
// end of setting current year

/////search////
// document.getElementById("search").onclick=function () {
//
// };
// end search////
document.getElementsByClassName("background-color-items").onclick=function (myFunction) {
    document.body.style.backgroundColor = this.value();

};

