let selectOfDarkMode = document.getElementById("select-2");
let LinkStyleSheet = document.querySelector("link")

function  DarkModeSelected(){
    switch(selectOfDarkMode.value){
         case "Dark Mode":
             LinkStyleSheet.setAttribute("href","/style/style.css")
             break;
        
        case "Light Mode": 
            LinkStyleSheet.setAttribute("href", "/style/LigthMode/style.css");
            break;
        
        default:
            LinkStyleSheet.setAttribute("href","/style/style.css")
            break;

    }
}

selectOfDarkMode.onchange = ()=>{
    DarkModeSelected();
}


let inputSearch = document.querySelector(".search-1");
let search = ["Dark Lane Tapes Demo"]
let searchSplit = search[0].split(" ");

function searching (){
    if(inputSearch.value === search[0] || inputSearch.value === searchSplit[0]){
        
    }else{
        console.error("ERROR 404 NOT FUND")
    }
}

inputSearch.addEventListener("keypress", searching)


