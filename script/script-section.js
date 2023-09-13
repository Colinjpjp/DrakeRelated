let selectOfDarkMode = document.getElementById("select-2");
let LinkStyleSheet = document.querySelector("link")

function  DarkModeSelected(){
    switch(selectOfDarkMode.value){
         case "Dark Mode":
             LinkStyleSheet.setAttribute("href","./style/style.css")
             break;
        
        case "Light Mode": 
            LinkStyleSheet.setAttribute("href", "./style/LigthMode/style.css");
            break;
        
        default:
            LinkStyleSheet.setAttribute("href","./style/style.css")
            break;

    }
}

selectOfDarkMode.onchange = ()=>{
    DarkModeSelected();
}


let names = document.querySelectorAll(".name-product");
let inputSearch = document.querySelector(".search-1");

// function searching() {
    document.addEventListener("keypress", e =>{
        if(e.target.matches(".search-1")) {
            document.querySelectorAll(".name-product").forEach(album =>{
                album.textContent.toLowerCase().includes(e.target.value)
                ? album.classList.remove("filtro")
                : album.classList.add("filtro")
            })
        }
    })
// }

// inputSearch.addEventListener("keypress", searching)