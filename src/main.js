

document.addEventListener('DOMContentLoaded', function() {
    window.M.AutoInit();
  });
  

     
document.getElementById("select2").addEventListener("change",() =>{
    document.getElementById("resultado").innerHTML = " " 
      
     let tipo =document.getElementById("select2").value
      for (let i = 0; i <window.pokego2.filterData(window.POKEMON.pokemon, tipo).length ; i++){
   

       document.getElementById("resultado").innerHTML += 
      `<div class="col s12 m5" style=" width: 298px;    height: 348px;">
          <div class="card">
              <div class="card-image blue accent-1">
              <div class="num" > ${window.pokego2.filterData(window.POKEMON.pokemon, tipo)[i].num}</div>
              <span class="card-title"> ${window.pokego2.filterData(window.POKEMON.pokemon, tipo)[i].name} </span> 
              <img src="${window.pokego2.filterData(window.POKEMON.pokemon, tipo)[i].img}" alt="${window.pokego2.filterData(window.POKEMON.pokemon, tipo)[i].img}" style= "width: 210px;">
            
          </div>
          <div class="card-action">
              <a class="waves-effect waves-light btn modal-trigger blue accent-1 " href="#modal1">Ficha pokemon</a>
          </div>
        </div>
      </div>
      </span>
    </div>`;

      
   }
   });

  const div_contenedor = document.getElementById("ordenado"); //imprime el listado ordenado
  
        document.getElementById("select1").addEventListener("change", () => {
        div_contenedor.innerHTML=""
  
        if (document.getElementById("select1").value === "a-z" || document.getElementById("select1").value === "z-a") {
        for (let i = 0; i < window.POKEMON.pokemon.length ;i++) {
        document.getElementById("ordenado").innerHTML += `<img src="${window.pokego.sortData(window.POKEMON.pokemon, "name", document.getElementById("select1").value)[i].img}" alt="${window.pokego.sortData(window.POKEMON.pokemon, "name", document.getElementById("select1").value)[i].name}"> ${window.pokego.sortData(window.POKEMON.pokemon, "name", document.getElementById("select1").value)[i].name}`;
        } 

      }
  
      if (document.getElementById("select1").value === "1-151"){
      for (let i = 0; i < window.POKEMON.pokemon.length ;i++) {
      document.getElementById("ordenado").innerHTML += `<img src="${window.pokego.sortData(window.POKEMON.pokemon, "number", document.getElementById("select1").value)[i].img}" alt="${window.pokego.sortData(window.POKEMON.pokemon, "number", document.getElementById("select1").value)[i].img}"> ${window.pokego.sortData(window.POKEMON.pokemon, "number", document.getElementById("select1").value)[i].id}`;

        
      }

      }});

      //document.getElementById("IngresaTexto").value = ""

       document.getElementById("go").addEventListener("click", () =>{
         document.getElementById("portada").style.display="none";
         document.getElementById("select-ordenar").style.display="block";
         document.getElementById("container").style.display="block"; //este es el resultado del filtro
       } 
       )





//        const reset=document.getElementById("reset");
// document.getElementById("resetText").addEventListener("click", () => {

//     document.getElementById("IngresaTexto").value = "";
//     document.getElementById("cifrado").innerHTML= "";
//     document.getElementById("descifrado").innerHTML= "";

// }); 

       
        

      // document.getElementById("go").addEventListener("click", () =>{
      // console.log("select1", "select2");
      //    });

// document.getElementById("myBtn").addEventListener("click", function(){
//   document.getElementById("demo").innerHTML = "Hello World";
// });



 
