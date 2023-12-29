const cellContainer = document.querySelector(".cells");
const textfeildContainer = document.querySelector(".textfeild");


cellContainer.addEventListener("click",(e)=>{
  const clickedElement = e.target.closest(".cell_typical");
  if (clickedElement){
    let oldValue = textfeildContainer.innerHTML;

    if (clickedElement.classList.contains("cell_Probel")) {
      textfeildContainer.innerHTML = textfeildContainer.innerHTML + " "
    }
    if (clickedElement.classList.contains("cell_backespace")){
      textfeildContainer.innerHTML = textfeildContainer.innerHTML.slice(0,textfeildContainer.innerHTML.length-1);
    }
    else{
      textfeildContainer.innerHTML = oldValue + clickedElement.innerHTML;
    }

  }
 
})









