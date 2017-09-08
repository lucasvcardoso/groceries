var modal = document.querySelector("#itemModal");

var itemModalBtn = document.querySelector("#adicionar-item-modal");

var closeBtn = document.querySelectorAll(".close")[0];

itemModalBtn.onclick = function(){
    modal.style.display = "block";
}

closeBtn.onclick = function(){
     modal.style.display = "none";
}

window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = "none";
    }
}

