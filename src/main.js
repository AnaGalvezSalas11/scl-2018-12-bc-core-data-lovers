document.addEventListener('DOMContentLoaded', function() {
  window.M.AutoInit();
  window.ImageMap('img[usemap]');
  window.google.charts.load("current", {packages:["corechart"]});
  window.google.charts.setOnLoadCallback(drawChart);
});



// INTERACCION BOTON GO
  document.getElementById("go").addEventListener("click", (evento) =>{
  evento.preventDefault();
  document.getElementById("portada").style.display="none";
  document.getElementById("information").style.display="block";
  imagePokemon(); //aqui se agrega las imagenes de los pokemon
})

//INTERACCION BOTON CALCULAR
  document.getElementById("btnCalculo").addEventListener("click", () =>{
  document.getElementById("information").style.display="none";
  document.getElementById("portada").style.display="none";
  document.getElementById("calculo").style.display="block";
  window.ImageMap('img[usemap]') 
})

//INTERACCION LOGO GO!
document.getElementById("brand-logo").addEventListener("click", () =>{
document.getElementById("calculo").style.display="none";
document.getElementById("information").style.display="block";
imagePokemon();

})

//INTERACCIÓN BOTON CANDY

document.getElementById("btnCandy").addEventListener("click", () =>{
document.getElementById("information").style.display="none";
document.getElementById("portada").style.display="none";
document.getElementById("calculo").style.display="none"
document.getElementById("grafic").style.display="block";


})


document.addEventListener('DOMContentLoaded', function() {
    window.M.AutoInit();
  });

  
  //Interaccion del boton filtrar por tipo

document.getElementById("select2").addEventListener("change",() =>{
    document.getElementById("ordenado").innerHTML = " "  //cambiamos nombre de div en esta interacción
      
     let tipo =document.getElementById("select2").value
      for (let i = 0; i <window.pokego2.filterData(window.POKEMON.pokemon, tipo).length ; i++){   

       document.getElementById("ordenado").innerHTML += ` 
       <div class="col s12 m4">
       <h4 class="header"><b># ${window.pokego2.filterData(window.POKEMON.pokemon, tipo)[i].num}</b></h4>
       <div class="card horizontal">
         <div class="card-image">
           <img src="${window.pokego2.filterData(window.POKEMON.pokemon, tipo)[i].img}">
         </div>
         <div class="card-stacked">
           <div class="card-content">
             <h5><b>${window.pokego2.filterData(window.POKEMON.pokemon, tipo)[i].name}</b></h5>
           </div>
           <div class="card-action">
               <button class="ficha waves-effect waves btn modal-trigger  " href="#modal1" >Ficha pokemon</button>
           </div>
         </div>
       </div>
     </div>
         `;
  

     
   }
   abrirFicha(window.pokego2.filterData(window.POKEMON.pokemon, tipo)); 
   });






//Interacción del boton ordenar

const div_contenedor = document.getElementById("ordenado"); //imprime el listado ordenado

  document.getElementById("select1").addEventListener("change", () => {
      div_contenedor.innerHTML=""

      if (document.getElementById("select1").value === "a-z" || document.getElementById("select1").value === "z-a") {
        for (let i = 0; i < window.POKEMON.pokemon.length ;i++) {
     
        document.getElementById("ordenado").innerHTML +=` 
        <div class="col s12 m4">
        <h4 class="header">#${window.pokego.sortData(window.POKEMON.pokemon, "name", document.getElementById("select1").value)[i].num}</h4>
        <div class="card horizontal">
          <div class="card-image">
            <img src="${window.pokego.sortData(window.POKEMON.pokemon, "name", document.getElementById("select1").value)[i].img}" alt="${window.pokego.sortData(window.POKEMON.pokemon, "name", document.getElementById("select1").value)[i].img}">
          </div>
          <div class="card-stacked">
            <div class="card-content">
              <p> ${window.pokego.sortData(window.POKEMON.pokemon, "name", document.getElementById("select1").value)[i].name}</p>
            </div>
            <div class="card-action">
                <button class="ficha waves-effect waves btn modal-trigger  " href="#modal1" >Ficha pokemon</button>
            </div>
          </div>
        </div>
      </div>        
     `    
     ;}

     abrirFicha(window.pokego.sortData(window.POKEMON.pokemon, "name", document.getElementById("select1").value)); 
     }     

    if (document.getElementById("select1").value === "1-151"){
    for (let i = 0; i < window.POKEMON.pokemon.length ;i++) {
    document.getElementById("ordenado").innerHTML += `
    <div class="col s12 m4">
        <h4 class="header">#${window.pokego.sortData(window.POKEMON.pokemon, "number", document.getElementById("select1").value)[i].num}</h4>
        <div class="card horizontal">
          <div class="card-image">
            <img src="${window.pokego.sortData(window.POKEMON.pokemon, "number", document.getElementById("select1").value)[i].img}" alt="${window.pokego.sortData(window.POKEMON.pokemon, "number", document.getElementById("select1").value)[i].img}">
          </div>
          <div class="card-stacked">
            <div class="card-content">
              <p> ${window.pokego.sortData(window.POKEMON.pokemon, "number", document.getElementById("select1").value)[i].name}</p>
            </div>
            <div class="card-action">
                <button class="ficha waves-effect waves btn modal-trigger "href="#modal1" >Ficha pokemon</button>
            </div>
          </div>
        </div>
      </div>  `      
    
          
    }
    abrirFicha(window.pokego.sortData(window.POKEMON.pokemon, "number", document.getElementById("select1").value)); 

    }});

  
     



          
//aquí va la interaccion de las fichas por pokemon

let fichaPokemon = document.getElementsByClassName("ficha");
function abrirFicha(data) {
  for (let i = 0; i < fichaPokemon.length; i++) {
    fichaPokemon[i].addEventListener("click", () => {
      document.getElementById("probandomodal").innerHTML = `
                <div id="modal1" class="modal">   
                <div class="row">
                 <div class="col s12 m7 l4">
                  <div class="modal-content">
                    <h4 class ="icon"><b>${data[i].name}</b></h4>
                    <br>
                     <div class="height"><b>Altura:</b>${data[i].height}</div>
                      <div class="weight"><b>Peso:</b>${data[i].weight}</div>
                       <div class="candy_count"><b>Conteo de dulces:</b>${data[i].candy_count}</div>
                       <div class="egg"><b>Huevo:</b>${data[i].egg}</div>
                       <div class="spawn_chance"><b>Probabilidad encontrarlo:</b>${data[i].spawn_chance}</div>
                       

                   </div>
                  </div>
                  
                  <div class="col s12 m7 l4">
                  <br>
                  <br>
                  <hr/>
                   <h5 class="nameType"><b>Tipo</b></h5>        
                     <p class="type  ${data[i].type[0]}">${data[i].type[0]}</p>
                      <p class="type ${data[i].type[1]}">${data[i].type[1]}</p>
                     <h5 class="nameWeaknesses"><b>Debilidades</b></h5>
                   <h6 class="weaknesses  ${data[i].weaknesses[0]}">${data[i].weaknesses[0]}</h6>  
                   <h6 class="weaknesses  ${data[i].weaknesses[1]}">${data[i].weaknesses[1]}</h6> 
                   <h6 class="weaknesses  ${data[i].weaknesses[2]}">${data[i].weaknesses[2]}</h6>
                   <h6 class="weaknesses  ${data[i].weaknesses[3]}">${data[i].weaknesses[3]}</h6> 
                   <h6 class="weaknesses  ${data[i].weaknesses[4]}">${data[i].weaknesses[4]}</h6>
                   <h6 class="weaknesses  ${data[i].weaknesses[5]}">${data[i].weaknesses[5]}</h6>
                   </div>

                  <div class="col s12 m7 l4">
                     <div class="responsive-image">
                       <img src="${data[i].img}">                                          
                        </div>
                        <div class="tooltip">
                        <span class="tooltiptext">
                        Conteo de dulces:cantidad para evolucionar
                        Huevo:cantidad de km a recorrer
                        Probabilidad encontrarlo:0.69</span>
                      </div>           
                  </div>
                 
              
                  <div class="modal-footer">
                    <a href="#!" class="modal-close waves-effect waves-green btn-flat"> <i class="large material-icons">arrow_back</i></a>
                 </div>
                </div>
                </div>             
                </div>`;
      window.M.AutoInit();
    })
  }

}
            

//visualización del calculo      

const result = document.querySelector("#result")
document.getElementById("uno").addEventListener("click", () => {
  result.innerHTML = ` ${window.pokego.computeStats(window.POKEMON.pokemon, "01:")}`
});


document.getElementById("dos").addEventListener("click", () => {
  result.innerHTML = ` ${window.pokego.computeStats(window.POKEMON.pokemon, "02:")}`
});

document.getElementById("tres").addEventListener("click", () => {
  result.innerHTML = ` ${window.pokego.computeStats(window.POKEMON.pokemon, "03:")}`
});

document.getElementById("cuatro").addEventListener("click", () => {
  result.innerHTML = ` ${window.pokego.computeStats(window.POKEMON.pokemon, "04:")}`
});

document.getElementById("cinco").addEventListener("click", () => {
  result.innerHTML = ` ${window.pokego.computeStats(window.POKEMON.pokemon, "05:")}`
});

document.getElementById("seis").addEventListener("click", () => {
  result.innerHTML = ` ${window.pokego.computeStats(window.POKEMON.pokemon, "06:")}`
});

document.getElementById("siete").addEventListener("click", () => {
  result.innerHTML = ` ${window.pokego.computeStats(window.POKEMON.pokemon, "07:")}`
});

document.getElementById("ocho").addEventListener("click", () => {
  result.innerHTML = ` ${window.pokego.computeStats(window.POKEMON.pokemon, "08:")}`
});

document.getElementById("nueve").addEventListener("click", () => {
  result.innerHTML = ` ${window.pokego.computeStats(window.POKEMON.pokemon, "09:")}`
});

document.getElementById("diez").addEventListener("click", () => {
  result.innerHTML = ` ${window.pokego.computeStats(window.POKEMON.pokemon, "10:")}`
});

document.getElementById("once").addEventListener("click", () => {
  result.innerHTML = ` ${window.pokego.computeStats(window.POKEMON.pokemon, "11:")}`
});

document.getElementById("doce").addEventListener("click", () => {
  result.innerHTML = ` ${window.pokego.computeStats(window.POKEMON.pokemon, "12:")}`
});



const resultTwo = document.querySelector("#resultTwo")
document.getElementById("trece").addEventListener("click", () => {
  resultTwo.innerHTML = ` ${window.pokego.computeStats(window.POKEMON.pokemon, "13:")}`
});


document.getElementById("catorce").addEventListener("click", () => {
  resultTwo.innerHTML = ` ${window.pokego.computeStats(window.POKEMON.pokemon, "14:")}`
});

document.getElementById("quince").addEventListener("click", () => {
  resultTwo.innerHTML = ` ${window.pokego.computeStats(window.POKEMON.pokemon, "15:")}`
});

document.getElementById("dieciseis").addEventListener("click", () => {
  resultTwo.innerHTML = ` ${window.pokego.computeStats(window.POKEMON.pokemon, "16:")}`
});

document.getElementById("diecisiete").addEventListener("click", () => {
  resultTwo.innerHTML = ` ${window.pokego.computeStats(window.POKEMON.pokemon, "17:")}`
});

document.getElementById("dieciocho").addEventListener("click", () => {
  resultTwo.innerHTML = ` ${window.pokego.computeStats(window.POKEMON.pokemon, "18:")}`
});

document.getElementById("diecinueve").addEventListener("click", () => {
  resultTwo.innerHTML = ` ${window.pokego.computeStats(window.POKEMON.pokemon, "19:")}`
});

document.getElementById("veinte").addEventListener("click", () => {
  resultTwo.innerHTML = ` ${window.pokego.computeStats(window.POKEMON.pokemon, "20:")}`
});

document.getElementById("veintiuno").addEventListener("click", () => {
  resultTwo.innerHTML = ` ${window.pokego.computeStats(window.POKEMON.pokemon, "21:")}`
});

document.getElementById("veintidos").addEventListener("click", () => {
  resultTwo.innerHTML = ` ${window.pokego.computeStats(window.POKEMON.pokemon, "22:")}`
});

document.getElementById("veintitres").addEventListener("click", () => {
  resultTwo.innerHTML = ` ${window.pokego.computeStats(window.POKEMON.pokemon, "23:")}`
});

document.getElementById("veinticuatro").addEventListener("click", () => {
  resultTwo.innerHTML = ` ${window.pokego.computeStats(window.POKEMON.pokemon, "00:")}`
});
           
            


    //Aqui se muestran las imagenes de los pokemon en el inicio

function imagePokemon (){
  for (let i = 0; i < window.POKEMON.pokemon.length ;i++) {
    document.getElementById("ordenado").innerHTML += `
    <div class="col s12 m4">
        <h4 class="header">#${window.POKEMON.pokemon[i].num}</h4>
        <div class="card horizontal">
          <div class="card-image">
            <img src="${window.POKEMON.pokemon[i].img}" alt="${window.POKEMON.pokemon[i].img}">
          </div>
          <div class="card-stacked">
            <div class="card-content">
              <p> ${window.POKEMON.pokemon[i].name}</p>
            </div>
          </div>
        </div>
      </div>  `      
}
         
}


function drawChart() {
  var data = window.google.visualization.arrayToDataTable([
    ['Candys', 'Cantidad de pokemón'],
    ['12 Candys',     window.pokego2.filterData(window.POKEMON.pokemon,12).length],
    ['25 Candys',     window.pokego2.filterData(window.POKEMON.pokemon,25).length],
    ['50 Candys',     window.pokego2.filterData(window.POKEMON.pokemon,50).length],
    ['100 Candys',    window.pokego2.filterData(window.POKEMON.pokemon,100).length],
    ['400 Candys',    window.pokego2.filterData(window.POKEMON.pokemon,400).length],
    
  ]);

  var options = {
    'width': 900, 
    'height': 500,
    title: 'Grupos de Pokemón de Acuerdo a la Cantidad de Candy que Necesitan para Evolucionar',
    pieHole: 0.4,
  };

  var chart = new window.google.visualization.PieChart(document.getElementById('donutchart'));
  chart.draw(data, options);
}
    


          