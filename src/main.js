

document.addEventListener('DOMContentLoaded', function() {
    M.AutoInit();
  });
  
  

      
document.getElementById("select2").addEventListener("change",() =>{
    document.getElementById("resultado").innerHTML = " " 
   
     let tipo =document.getElementById("select2").value
      for (let i = 0; i < filterData(POKEMON.pokemon, tipo).length ; i++){   

       document.getElementById("resultado").innerHTML += ` 
       <div class="col s12 m3">
       <div id="cardgeneral" class="card">
           <div id="cardgeneral" class="card-image blue darken-4">
                 <img src="${filterData(POKEMON.pokemon, tipo)[i].img}" alt="${filterData(POKEMON.pokemon, tipo)[i].img}">
                 <div id="cardgeneral" class="card-content">
                <h3>${filterData(POKEMON.pokemon, tipo)[i].name}</h3>
               <h5>${filterData(POKEMON.pokemon, tipo)[i].num}</h5>
            </div> 
       </div>
       <div class="card-action">
          <button class="ficha waves-effect waves-light btn modal-trigger blue darken-4 " href="#modal1">Ficha pokemon</button>
       </div>
     </div>
   </div>
 </div>
        
    `;
   
   }
   fff(filterData(POKEMON.pokemon, tipo)); 
   });



  const div_contenedor = document.getElementById("ordenado"); //imprime el listado ordenado
  
    document.getElementById("select1").addEventListener("change", () => {
        div_contenedor.innerHTML=""
  
        if (document.getElementById("select1").value === "a-z" || document.getElementById("select1").value === "z-a") {
          for (let i = 0; i < POKEMON.pokemon.length ;i++) {
       
          document.getElementById("ordenado").innerHTML +=` 
          <div class="col s12 m3">
          <div class="card">
              <div class="card-image blue darken-4">
                  <span class="card-title"> ${pokego.sortData(POKEMON.pokemon, "name", document.getElementById("select1").value)[i].name} </span>
                 <img src="${pokego.sortData(POKEMON.pokemon, "name", document.getElementById("select1").value)[i].img}" alt="${pokego.sortData(POKEMON.pokemon, "name", document.getElementById("select1").value)[i].img}">
                 <div class="num">${pokego.sortData(POKEMON.pokemon, "name", document.getElementById("select1").value)[i].num}</div>
          </div>
          <div class="card-action">
          <button class="ficha waves-effect waves-light btn modal-trigger blue darken-4 " href="#modal1">Ficha pokemon</button>
          </div>
        </div>
      </div>
    </div>
           
       `    
       ;}
       fff(pokego.sortData(POKEMON.pokemon, "name", document.getElementById("select1").value)); 
       };
  
      if (document.getElementById("select1").value === "1-151"){
        for (let i = 0; i < POKEMON.pokemon.length ;i++) {

        document.getElementById("ordenado").innerHTML += `<img src="${pokego.sortData(POKEMON.pokemon, "number", document.getElementById("select1").value)[i].img}" alt="${pokego.sortData(POKEMON.pokemon, "number", document.getElementById("select1").value)[i].img}"> ${pokego.sortData(POKEMON.pokemon, "number", document.getElementById("select1").value)[i].id}`;

        
      }

      }});
      
        document.getElementById("ordenado").innerHTML="";
       
       


      // document.getElementById("go").addEventListener("click", () =>{
      //   console.log("select1", "select2");
      //   });
           

            
        
                   
           let fichaPokemon =  document.getElementsByClassName("ficha");
            function fff(data){
              for (let i=0; i < fichaPokemon.length; i++){
                fichaPokemon[i].addEventListener("click",()=>{
                  document.getElementById("probandomodal").innerHTML =`
                   <div id="modal1" class="modal">
                <div class="modal-content">
                 <div class="row">
              <div class="col s4"><span class="flow-text">
              <div class="num">
               <span class="blue-text text-darken-2"><h3>#001</h3></span></div>
               <div class="name"><h3><b>${data[i].name}</b></h3></div>
               <div class="height"><h5><b>Altura:</b>0.71 m</h5></div>
               <div class="weight"><b>Peso:</b>6.9 kg</div>
               <div class="candy"><b>Caramelos:</b>Bulbasaur Candy</div>
               <div class="candy_count"><b>Caramelos contador:</b>25</div>
              </span></div>
          
              <div class="col s4"><span class="flow-text">
               <div> <h5 class="center-align"><b>Tipo</b></h5></div>          
               <div class="type center-align"> Grass,Poison</div>
               <div> <h5 class="center-align"><b>Debilidades</b></h5></div> 
               <div> <h6 class="type center-align"> "Fire", "Ice","Flying","Psychic"</h6></div>  
              </span></div>
          
              <div class="col s4 "><span class="flow-text">
               <div class="respondive-image">
               <img src="http://www.serebii.net/pokemongo/pokemon/001.png ">
               <div> <h5 class="center-align"><b>Evoluciones</b></h5></div> 
              </div>           
              </span></div>      
          
              <div class="modal-footer">
          <a href="#!" class="modal-close waves-effect waves-green btn-flat"> <i class="large material-icons">arrow_back</i></a>
          </div>
          </div>`;
        M.AutoInit();
        })
                }

              }
            
            
             
              
              
            
           
        




 

