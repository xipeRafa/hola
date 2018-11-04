
 
 window.addEventListener('load', function() {
  let  formx = document.getElementById('f')
    formx.addEventListener('submit' , funx)
    
//const salida = document.getElementById('salida')
   salida.addEventListener('click', borrar) 

});



function funx(evt) {
  evt.preventDefault()
  let entrada = parseInt(document.getElementById('entrada').value)
      entrada2 = parseInt(document.getElementById('entrada2').value)
      salida = document.getElementById('salida')
     
      let botonBorrar = document.createElement('a')
      botonBorrar.classList = 'borrar'
      botonBorrar.innerText = 'X'
    
      let item = document.createElement('li')
       item.classList = 'borrarp'
     
      salida.appendChild(item)
      salida.appendChild(botonBorrar)
    
      if (entrada<entrada2) {
        item.innerHTML=` ${entrada} mas ${ entrada2} es: ${entrada+entrada2} `
     } else {
        item.innerHTML=` ${entrada} menos ${ entrada2} es: ${entrada-entrada2}`
     }
    
      document.getElementById("entrada").value = "";
     document.getElementById("entrada2").value = "";  
    
     let list = []
      list.push(item.innerHTML)
   
      console.log(list)   
     // console.log(salida)   

      //localStorage.setItem(entrada,entrada2)  

  //agregar en forma de objeto
  agregarLS(list)

     
}






 function borrar(evt){
  evt.preventDefault()
      //obgetivo la clase borrar
     if(evt.target.className === 'borrar' ){
    //evt.target.parentElement.remove()
      remove()
   console.log('Diste click en borrar')
  }else{
  
   console.log('Diste click en otra parte')}
} 






   //1
   function agregarLS(list) {
    let salidas  //salidas es LS adentro de la variable salisas
    //para obtener valores de LS 5
    salidas = obtenerEntradaLS()
   //añadir el nuevo li 6
    salidas.push(list.pop())
    //convertir de arreglo a string  en local Storege  2/7
    localStorage.setItem('salidas', JSON.stringify(salidas) )  
   }


 

   //3
   function obtenerEntradaLS() {
    let salidas 
     //revisamos los valores de local storage 4
    if(localStorage.getItem('salidas') === null){
            //si esta vacio
      salidas = []
    }else{    // si hay algo convertir de string a arreglo en local Storege 
      salidas = JSON.parse(localStorage.getItem('salidas'))
    }
    return salidas
  }
    

    //cargar local storage a documento
function localStorageListo() {
  let salidas
  salidas = obtenerEntradaLS()
 
  salidas.forEach(function(salidas) {

    let botonBorrar = document.createElement('a')
    botonBorrar.classList = 'borrar'
    botonBorrar.innerText = 'X'
  
    let item = document.createElement('li')
   
    salida.appendChild(item)
    salida.appendChild(botonBorrar)
    item.innerText=salidas
 
  })
}




function remove(task) {
  var task = target.previousSibling.data;
  console.log('Diste click en remove')}
	var taskListArray = obtenerEntradaLS("taskList");
	for (var i = 0; i < taskListArray.length; i++) {
		if (taskListArray[i] == task) {
			taskListArray.splice(i, 1);
		}
		localStorage.setItem("taskList", JSON.stringify(taskListArray));
	}




