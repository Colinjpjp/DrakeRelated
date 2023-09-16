const selectOfDarkMode = document.getElementById("select-2");
const LinkStyleSheet = document.querySelector(".linkCss");

function DarkModeSelected() {
  switch (selectOfDarkMode.value) {
    case "Dark Mode":
      LinkStyleSheet.setAttribute("href", "style/style.css");
      break;

    case "Light Mode":
      LinkStyleSheet.setAttribute("href", "style/LigthMode/style.css");
      break;

    default:
      LinkStyleSheet.setAttribute("href", "style/style.css");
      break;
  }
}
selectOfDarkMode.onchange = DarkModeSelected;

const selectOfOrder = document.getElementById("select-1");
const ProductsSection = document.querySelector(".Products");

function change() {
  const value = selectOfOrder.value;

  if (value === "Mas recientes") {
    return $(".Products").load("mode/MasRecientes.html");
  } else if (value === "Mas vendidos") {
    return $(".Products").load("mode/MasVendidos.html");
  } else if (value === "Aclamados por la Critica") {
    return $(".Products").load("/mode/AclamadosPorLaCritica.html");
  } else if (value === "Precio Mas bajo") {
    return $(".Products").load("mode/PrecioMasBajo.html");
  } else if (value === "Precio Mas alto") {
    return $(".Products").load("mode/PrecioMasAlto.html");
  } else if (value === "Mas populares") {
    return $(".Products").load("mode/MasPopulares.html");
  }
}
selectOfOrder.onchange = change;

$(function () {
  $(".Products").load("mode/MasRecientes.html");
});


  addEventListener("keyup", (e) => {
    if (e.target.matches(".search-1")) {
      document.querySelectorAll(".products").forEach((names) => {
        names.textContent.toLowerCase().includes(e.target.value.toLowerCase())
          ? names.classList.remove("filter")
          : names.classList.add("filter");
      });
    }
  });

