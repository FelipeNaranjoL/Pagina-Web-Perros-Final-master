$(document).ready(function(){
    var llave = "1823f857"
    $("#formulario_pelis").submit(function(event){
        event.preventDefault()
        var pelicula = $("#pelicula").val()
        var url = "http://www.omdbapi.com/?apikey="+llave
        var resultado = ""
        $.ajax({
            method:'GET',
            url:url+"&t="+pelicula,
            success:function(data){
                console.log(data)
                resultado = `
                    <img src="${data.Poster}"/>
                    <h2>Director: ${data.Director} <br/>
                    Actores: ${data.Actors} <br/>
                    Genero: ${data.Genre} <br/>
                    Tipo: ${data.Type} <br/>
                    Año de estreno: ${data.Year} <br/>
                    Tiempo de duración: ${data.Runtime}</h2>    
                `
                $("#resultado_busqueda").html(resultado)
            }
        })
    })
})


