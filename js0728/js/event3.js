let navBar = document.querySelector("nav");
let navLink = document.querySelectorAll("a");

//頁面捲動時
window.addEventListener("scroll", ()=>{
    if(window.pageYOffset!=0){
        navBar.style.backgroundColor= "rgba(0,0,0,.3)" ;
        // navLink.style.color="#fff";querySelectorAll 需要遍歷每個元素出來
        navLink.forEach(a=>{
            a.style.color = "#fff";
        })
    }else{
        navBar.style.backgroundColor= "#ccc" ;
        navLink.forEach(a=>{
            a.style.color = "#000";
        })
    }
})