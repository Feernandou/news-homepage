const btnMenu = document.getElementById("icon-menu")

const menuResponsive = document.getElementById("menu-responsive")
const menuClose = document.getElementById("menu-close")
const bdy = document.querySelector("body")
btnMenu.addEventListener("click",()=>{
    if(btnMenu.style.display === "none"){
        btnMenu.style.display = "flex"
        menuResponsive.style.display = "none"
        
    }else{
        btnMenu.style.display = "none"
        menuResponsive.style.display = "flex"
        menuResponsive.style.boxShadow = "0 0 0 100vmax rgba(0,0,0,.5)"
        
        
        
    }
})
menuClose.addEventListener("click", ()=>{
    if(menuClose.style.display === "none"){
    }else{
        menuResponsive.style.display = "none"
        btnMenu.style.display = "flex"
        
    }
})
