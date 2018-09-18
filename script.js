$(document).ready(function(){
    $("#search").on("click", function(e){
        e.preventDefault();
        var $input = $("input").val();
        $.ajax({
            method: "GET",
            url: "https://api.giphy.com/v1/gifs/search",
            data: {
                api_key: myKey,
                q: $input
            },
            dataType: "json"
        }).then(function(response){
            var length = response.data.length;
            var randomIndex = Math.floor(Math.random()*length);
            var $gif = $("<img>", {
                src: response.data[randomIndex].images.original.url
            });
            var $area = $("#gif-area")
            $("#gif-area").append($gif);
            safe();
        }).catch(function(error){
            console.log(error);
            safe();
        })
    })
    $("#delete").on("click",function(e){
        e.preventDefault();
        $("#gif-area").empty();
    })
});