function hideMyMenu(){
    //hide menu-left    
    let divShow = document.querySelector(".tab-content")        
        divShow.setAttribute("style","visibility:hidden")  
    let arrFade = Array.from(divShow.querySelectorAll(".tab-pane.fade"))
    arrFade.filter(function(fade){
        fade.classList.toggle('active',false)
        fade.classList.toggle('show',false)
    })
    //hide menu top
    let arrUl = Array.from(document.querySelectorAll('.menu-top ul.dropdown-menu'))
    arrUl.filter(ul=>ul.classList.toggle('show',false))        
}
document.addEventListener('DOMContentLoaded', function () {
    // event mouse over menu-left 
    let btns = document.querySelectorAll("div.menu-left>ul>li>a");
    let arrBtns = Array.from(btns);
    arrBtns.filter(btn=>btn.onmouseenter= function(){                   
        hideMyMenu()//hide menu                 
        //show fade        
        let divShow = document.querySelector(".tab-content")        
        divShow.setAttribute("style","visibility:visible")          
        let id = this.getAttribute("href")
        document.querySelector(id).classList.add('show','active')
    });
    
    //event mouse leave local-show
    document.querySelector("#local-show").onmouseleave = function(){
        hideMyMenu()
    }    
    //event click btn close category
    let closers = Array.from(document.querySelectorAll(".icon-close-category"));
    closers.filter(close=>close.onclick= function(){
        document.querySelector(".tab-content").setAttribute("style","visibility:hidden")           
    })    

    //event hover img product
    let prodImgs = document.querySelectorAll("div.img-special img")
    let arrProdImgs = Array.from(prodImgs)
    for(img of arrProdImgs){
        let parent = img.parentNode
        parent.onmouseover = function(){
            let btnViewCart = this.querySelector("div.btn-view-cart");    
            btnViewCart.setAttribute("style","visibility:visible;opacity: 1;")    
        }
        parent.onmouseout = function(){
            let btnViewCart = this.querySelector("div.btn-view-cart");    
            btnViewCart.setAttribute("style","visibility:hide;opacity: 0;")    
        }
    }
 });
 