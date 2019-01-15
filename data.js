// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

window.pokego = {

  sortData: (data, sortBy, sortOrder) => {
    if (sortBy === "name" && sortOrder === "a-z"){
      data.sort((a,b) =>{
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        //a debe ser igual b
        return 0;
        
      } )
     return data;

    } 

    if (sortBy === "name" && sortOrder === "z-a"){
      data.sort((a,b) =>{
        if (a.name > b.name) {
          return -1;
        }
        if (a.name < b.name) {
          return 1;
        }
        //a debe ser igual b
        return 0;
        
      } )
     return data;

    } 
    

    if (sortBy === "number" && sortOrder === "1-151"){
      data.sort((a,b) =>{
        if (a.id < b.id) {
          return -1;
        }
        if (a.id > b.id) {
          return 1;
        }
        //a debe ser igual b
        return 0;
        
      } )
     return data;


  }



},
//podria cambiarlo por un map
computeStats:(data, hours) => {
  let groupForHour = []
  let counter = 0

  for (let i = 0; i <data.length; i++){
    groupForHour.push(data[i].spawn_time)

  }
    groupForHour.forEach(spawn => {
      if (spawn.slice(0,3) === hours){
        counter++
      }
    })

    return Math.round(100 * counter/151) //redondeamos porcentaje
  }

}, 


window.pokego2 = {
      filterData(data, condition)  {
        let tiposDePokemon;
        if (typeof condition === "string") 
        {
          tiposDePokemon = data.filter(tipos =>{
            return tipos.type.indexOf(condition) !== -1;
           })
              
        }
        else {
          tiposDePokemon = data.filter(candy =>{
            return candy.candy_count===(condition);
          })  
      }
      return tiposDePokemon; 
    }
  };
//obervaciones de Ale:
 //cambiar las variables en ingles y que sean bien descriptivas
 //trabajar más con arreglos
 //revizar html semantico, hay muchos div y desorden
 //css hay class duplicadas, falto DRY
 