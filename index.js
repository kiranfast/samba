var selectbtn = document.querySelector(".select-btn"),
       item = document.querySelectorAll(".items");
     console.log(selectbtn,item)

     selectbtn.addEventListener("click",()=>{
        selectbtn.classList.toggle("open");
     });

     item.forEach( items => {
        items.addEventListener("click",() => {
            items.classList.toggle("checked")
        })
     })