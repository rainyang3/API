

let url = "https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=RpI4gkUAvvPiuL84PIosepa0GWRDW9jm"
let url2 = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=RpI4gkUAvvPiuL84PIosepa0GWRDW9jm"
let articlebutton = document.getElementById("articlebutton");
let moviebutton = document.getElementById("moviebutton");
let article = document.getElementById("article");
let movie= document.getElementById("movie");



$.getJSON (url,function(data){
        console.log (data.results[0].abstract);
        //adding buttons
        articlebutton.addEventListener("click",function() {
        $("#article").html(data.results[0].abstract);
        })
    })

$.getJSON (url2,function(data){
        console.log (data.results[5].headline);
        //adding buttons
        moviebutton.addEventListener("click",function() {
        $("#movie").html(data.results[5].headline);
        })
    
})