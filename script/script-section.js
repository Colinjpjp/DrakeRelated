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

