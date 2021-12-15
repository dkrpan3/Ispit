import layout from "../view/layout.js";
import dohvatRezultat from "./dohvatRezultat.js";
import rezultat from "../view/rezultati.js";

export default () => {
 
  document.getElementById("App").innerHTML = layout();
  var spinner = document.getElementById("spinner");
  spinner.style.display= "none";
  document.getElementById("search").addEventListener("keyup", (event) => {
      spinner.style.display = "";
    dohvatRezultat(event.target.value).then((rezultati) => { 
      if (rezultati.length > 0) {
        document.getElementById("rezultati").innerHTML = rezultat(rezultati);
      } else {
        document.getElementById("rezultati").innerHTML = "Nema rezultata";
      }
      spinner.style.display = "none";
    }).catch((data) => {
        spinner.style.display = "";
        return alert (`Greška u pozivu APIja`);
          });;
  });
  
};
