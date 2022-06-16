function abrirmenu(menu){

    console.log('abrindo menu')

    /* Um sistema de menu simples */ 
    const abrir = document.getElementById('nav')
    const fecha = document.getElementById('fechamenu')

    const logo = document.getElementById('imgNavbar')

    if(abrir.style.display = 'none'){

        /**Tira o shape  */
        logo.style.display = 'none'

        /**Abri o menu */
        abrir.style.display = 'block'

        /**Coloca o " X " */
        fecha.style.display = 'flex'

    }
    
  
    
}

function fecharmenu(menu){

    console.log('fechando menu')


    const abrir = document.getElementById('nav')

    /* Inicia*/
    const logo = document.getElementById('imgNavbar')

    /* fecha*/ 
    const fecha = document.getElementById('fechamenu')

    if(abrir.style.display = 'block'){
        /* tira a imagem " X "*/
        fecha.style.display = 'none'
        
        /** Tira o menu  */
        abrir.style.display = 'none'

        /**Coloca o shape */
        logo.style.display = 'flex'
    }


}




