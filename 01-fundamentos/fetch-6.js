



fetch('no-encontrado.html')
.then (resp=> resp.text())
.then (html=>{



    let body = document.querySelector('body');
    body.innerHTML = html;
})

.catch( error => {
    console.log('Error en laa peticion');
    console.log(error);



} );








