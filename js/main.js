const parent_original=document.querySelector(".footer__info"),parent=document.querySelector(".footer__adap"),item=document.querySelector(".footer__text_da");window.addEventListener("resize",(function(e){Math.max(document.documentElement.clientWidth,window.innerWidth||0)<992?item.classList.contains("done")||(parent.insertBefore(item,parent.children[0]),item.classList.add("done")):item.classList.contains("done")&&(parent_original.insertBefore(item,parent_original.children[2]),item.classList.remove("done"))}));