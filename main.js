//dentro de la variable thepokemon se llama el fetch
let thepokemon;


fetch('data/pokemon/pokemon.json')
.then(answer =>answer.json())
.then(answer =>{
  thepokemon = answer;
  imagePokemon(thepokemon);
} )

    



document.addEventListener('DOMContentLoaded', function() {
  window.M.AutoInit();
  window.ImageMap('img[usemap]');
});



//AQUI VA BOTON CALCULAR
  document.getElementById("btnCalculo").addEventListener("click", () =>{
  document.getElementById("informationPokemon").style.display="none";
  document.getElementById("grafic").style.display="none"
  document.getElementsByClassName("textCandy")[0].style.display="none"
  document.getElementById("calculation").style.display="block";
  window.ImageMap('img[usemap]') 
})

//Aqui va boton volver del logo GO!
document.getElementById("brand-logo").addEventListener("click", () =>{
document.getElementById("calculation").style.display="none";
document.getElementById("grafic").style.display="none"
document.getElementById("informationPokemon").style.display="block";
imagePokemon();

})

//INTERACCIÓN BOTON CANDY

document.getElementById("btnCandy").addEventListener("click", () =>{
  document.getElementById("informationPokemon").style.display="none";
  document.getElementById("calculation").style.display="none"
  document.getElementsByClassName("textCandy")[0].style.display="block"
  document.getElementById("grafic").style.display="block";
  })


document.addEventListener('DOMContentLoaded', function() {
    window.M.AutoInit();
  });

  
  // interaccion del boton filtrar por tipo

document.getElementById("selectType").addEventListener("change",() =>{
    document.getElementById("container_organized").innerHTML = " "  //cambiamos nombre de div en esta interacción
      
     let tipo =document.getElementById("selectType").value
      for (let i = 0; i <window.pokego2.filterData(thepokemon.pokemon, tipo).length ; i++){   

       document.getElementById("container_organized").innerHTML += ` 
       <div class="col s12 m4">
       <h4 class="header"><b># ${window.pokego2.filterData(thepokemon.pokemon, tipo)[i].num}</b></h4>
       <div class="card horizontal">
         <div class="card-image">
           <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${window.pokego2.filterData(thepokemon.pokemon, tipo)[i].num}.png">
         </div>
         <div class="card-stacked">
           <div class="card-content">
             <h5>${window.pokego2.filterData(thepokemon.pokemon, tipo)[i].name}</h5>
           </div>
           <div class="card-action">
               <button class="card_container waves-effect waves btn modal-trigger  " href="#modal1" >Ficha pokemon</button>
           </div>
         </div>
       </div>
     </div>
         `;
  

     
   }
   abrirFicha(window.pokego2.filterData(thepokemon.pokemon, tipo), card_Pokemon); 
   });






//interacción del boton ordenar

const div_container = document.getElementById("container_organized"); //imprime el listado ordenado

  document.getElementById("selectOrder").addEventListener("change", () => {
    div_container.innerHTML=""

      if (document.getElementById("selectOrder").value === "a-z" || document.getElementById("selectOrder").value === "z-a") {
        for (let i = 0; i < thepokemon.pokemon.length ;i++) {
     
        document.getElementById("container_organized").innerHTML +=` 
        <div class="col s12 m4">
        <h5 class="header"><b>#${window.pokego.sortData(thepokemon.pokemon, "name", document.getElementById("selectOrder").value)[i].num}</b></h5>
        <div class="card horizontal">
          <div class="card-image">
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${window.pokego.sortData(thepokemon.pokemon, "name", document.getElementById("selectOrder").value)[i].num}.png" alt="${window.pokego.sortData(thepokemon.pokemon, "name", document.getElementById("selectOrder").value)[i].img}">
          </div>
          <div class="card-stacked">
            <div class="card-content">
              <h5> ${window.pokego.sortData(thepokemon.pokemon, "name", document.getElementById("selectOrder").value)[i].name}</h5>
            </div>
            <div class="card-action">
                <button class="card_container waves-effect waves btn modal-trigger  " href="#modal1" >Ficha pokemon</button>
            </div>
          </div>
        </div>
      </div>        
     `    
     ;}

     abrirFicha(window.pokego.sortData(thepokemon.pokemon, "name", document.getElementById("selectOrder").value),card_Pokemon); 
     }     

    if (document.getElementById("selectOrder").value === "1-151"){
    for (let i = 0; i < thepokemon.pokemon.length ;i++) {
    document.getElementById("container_organized").innerHTML += `
    <div class="col s12 m4">
        <h5 class="header"><b>#${window.pokego.sortData(thepokemon.pokemon, "number", document.getElementById("selectOrder").value)[i].num}</b></h5>
        <div class="card horizontal">
          <div class="card-image">
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${window.pokego.sortData(thepokemon.pokemon, "number", document.getElementById("selectOrder").value)[i].num}.png" alt="${window.pokego.sortData(thepokemon.pokemon, "number", document.getElementById("selectOrder").value)[i].img}">
          </div>
          <div class="card-stacked">
            <div class="card-content">
              <h5> ${window.pokego.sortData(thepokemon.pokemon, "number", document.getElementById("selectOrder").value)[i].name}</h5>
            </div>
            <div class="card-action">
                <button class="card_container waves-effect waves btn modal-trigger "href="#modal1" >Ficha pokemon</button>
            </div>
          </div>
        </div>
      </div>  `      
    
          
    }
    abrirFicha(window.pokego.sortData(thepokemon.pokemon, "number", document.getElementById("selectOrder").value), card_Pokemon); 

    }});

  
          
//aquí va la interaccion de las fichas por pokemon

let card_Pokemon = document.getElementsByClassName("card_container");
function abrirFicha(data, card_Pokemon) {
  for (let i = 0; i < card_Pokemon.length; i++) {
    card_Pokemon[i].addEventListener("click", () => {
      document.getElementById("card_information").innerHTML = `
                <div id="modal1" class="modal">   
                <div class="row puddin1">
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
                       <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${data[i].num}.png">                                          
                        </div>
                        <div class="tooltip">
                        <span class="tooltiptext">
                        Conteo de dulces:cantidad para evolucionar
                        Huevo:cantidad de km a recorrer
                        Probabilidad encontrarlo:0.69</span>
                      </div>           
                  </div>
                 
              
                  <div class="modal-footer">
                    <a href="#!" class="modal-close waves-effect waves-green btn-flat"> <i class="large material-icons">cancel</i></a>
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
document.getElementById("one").addEventListener("click", () => {
  result.innerHTML = ` ${window.pokego.computeStats(thepokemon.pokemon, "01:")}`
});


document.getElementById("two").addEventListener("click", () => {
  result.innerHTML = ` ${window.pokego.computeStats(thepokemon.pokemon, "02:")}`
});

document.getElementById("three").addEventListener("click", () => {
  result.innerHTML = ` ${window.pokego.computeStats(thepokemon.pokemon, "03:")}`
});

document.getElementById("four").addEventListener("click", () => {
  result.innerHTML = ` ${window.pokego.computeStats(thepokemon.pokemon, "04:")}`
});

document.getElementById("five").addEventListener("click", () => {
  result.innerHTML = ` ${window.pokego.computeStats(thepokemon.pokemon, "05:")}`
});

document.getElementById("six").addEventListener("click", () => {
  result.innerHTML = ` ${window.pokego.computeStats(thepokemon.pokemon, "06:")}`
});

document.getElementById("seven").addEventListener("click", () => {
  result.innerHTML = ` ${window.pokego.computeStats(thepokemon.pokemon, "07:")}`
});

document.getElementById("eight").addEventListener("click", () => {
  result.innerHTML = ` ${window.pokego.computeStats(thepokemon.pokemon, "08:")}`
});

document.getElementById("nine").addEventListener("click", () => {
  result.innerHTML = ` ${window.pokego.computeStats(thepokemon.pokemon, "09:")}`
});

document.getElementById("ten").addEventListener("click", () => {
  result.innerHTML = ` ${window.pokego.computeStats(thepokemon.pokemon, "10:")}`
});

document.getElementById("eleven").addEventListener("click", () => {
  result.innerHTML = ` ${window.pokego.computeStats(thepokemon.pokemon, "11:")}`
});

document.getElementById("twelve").addEventListener("click", () => {
  result.innerHTML = ` ${window.pokego.computeStats(thepokemon.pokemon, "12:")}`
});



const resultTwo = document.querySelector("#resultTwo")
document.getElementById("thirteen").addEventListener("click", () => {
  resultTwo.innerHTML = ` ${window.pokego.computeStats(thepokemon.pokemon, "13:")}`
});


document.getElementById("fourteen").addEventListener("click", () => {
  resultTwo.innerHTML = ` ${window.pokego.computeStats(thepokemon.pokemon, "14:")}`
});

document.getElementById("fifteen").addEventListener("click", () => {
  resultTwo.innerHTML = ` ${window.pokego.computeStats(thepokemon.pokemon, "15:")}`
});

document.getElementById("sixteen").addEventListener("click", () => {
  resultTwo.innerHTML = ` ${window.pokego.computeStats(thepokemon.pokemon, "16:")}`
});

document.getElementById("seventeen").addEventListener("click", () => {
  resultTwo.innerHTML = ` ${window.pokego.computeStats(thepokemon.pokemon, "17:")}`
});

document.getElementById("eighteen").addEventListener("click", () => {
  resultTwo.innerHTML = ` ${window.pokego.computeStats(thepokemon.pokemon, "18:")}`
});

document.getElementById("nineteen").addEventListener("click", () => {
  resultTwo.innerHTML = ` ${window.pokego.computeStats(thepokemon.pokemon, "19:")}`
});

document.getElementById("twenty").addEventListener("click", () => {
  resultTwo.innerHTML = ` ${window.pokego.computeStats(thepokemon.pokemon, "20:")}`
});

document.getElementById("twenty_one").addEventListener("click", () => {
  resultTwo.innerHTML = ` ${window.pokego.computeStats(thepokemon.pokemon, "21:")}`
});

document.getElementById("twenty_two").addEventListener("click", () => {
  resultTwo.innerHTML = ` ${window.pokego.computeStats(thepokemon.pokemon, "22:")}`
});

document.getElementById("twenty_three").addEventListener("click", () => {
  resultTwo.innerHTML = ` ${window.pokego.computeStats(thepokemon.pokemon, "23:")}`
});

document.getElementById("twenty_four").addEventListener("click", () => {
  resultTwo.innerHTML = ` ${window.pokego.computeStats(thepokemon.pokemon, "00:")}`
});
           
          


    //  aqui se muestran las imagenes de los pokemon en el inicio

function imagePokemon (data){
  for (let i = 0; i < data.pokemon.length ;i++) {
    document.getElementById("container_organized").innerHTML += `
    <div class="col s12 m4">
        <h5 class="header"><b>#${data.pokemon[i].num}</b></h5>
        <div class="card horizontal">
          <div class="card-image">
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${data.pokemon[i].num}.png" alt="${data.pokemon[i].img}">
          </div>
          <div class="card-stacked">
            <div class="card-content">
              <h5> ${data.pokemon[i].name}</h5>
            </div>
            <div class="card-action">
                <button class="card_container waves-effect waves btn modal-trigger "href="#modal1" >Ver ficha</button>
            </div>
          </div>
        </div>
      </div>  `      
}
 abrirFicha(data.pokemon, card_Pokemon)        
}

      // Aquí se muestra el grafico

window.google.charts.load('current', {packages: ['corechart', 'bar']});
window.google.charts.setOnLoadCallback(drawMaterial);

function drawMaterial() {
      let data = window.google.visualization.arrayToDataTable([
        ['Candys', 'Cantidad de Pokemón'],
        ['No Evolucionan',      81],
        ['12 Candys',     window.pokego2.filterData(window.POKEMON.pokemon,12).length],
        ['25 Candys',     window.pokego2.filterData(window.POKEMON.pokemon,25).length],
        ['50 Candys',     window.pokego2.filterData(window.POKEMON.pokemon,50).length],
        ['100 Candys',    window.pokego2.filterData(window.POKEMON.pokemon,100).length],
        ['400 Candys',    window.pokego2.filterData(window.POKEMON.pokemon,400).length],
       
      ]);

      let materialOptions = {
        'width': 750, 
        'height': 350,
      };


      let materialChart = new window.google.charts.Bar(document.getElementById('chart_div'));
      materialChart.draw(data, materialOptions);
    }

    //aqui se muestra las imagenes filtradas por candy

    document.getElementById("selectCandy").addEventListener("change",() =>{
      document.getElementById("container_Candy").innerHTML = " "  
        
       let candy = Number(document.getElementById("selectCandy").value)
        for (let i = 0; i <window.pokego2.filterData(thepokemon.pokemon, candy).length ; i++){   
  
         document.getElementById("container_Candy").innerHTML += ` 
         <div class="col s12 m4">
         <h4 class="header"><b># ${window.pokego2.filterData(thepokemon.pokemon, candy)[i].num}</b></h4>
         <div class="card horizontal">
           <div class="card-image">
             <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${window.pokego2.filterData(thepokemon.pokemon, candy)[i].num}.png">
           </div>
           <div class="card-stacked">
             <div class="card-content">
               <h5>${window.pokego2.filterData(thepokemon.pokemon, candy)[i].name}</h5>
             </div>
             <div class="card-action">
                 <button class="card_container2 waves-effect waves btn modal-trigger  " href="#modal1" >Ficha pokemon</button>
             </div>
           </div>
         </div>
       </div>
           `;
          }
          let card_Pokemon2 = document.getElementsByClassName("card_container2")
          abrirFicha(window.pokego2.filterData(thepokemon.pokemon, candy),card_Pokemon2); 
          });