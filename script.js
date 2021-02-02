let url = "https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=RpI4gkUAvvPiuL84PIosepa0GWRDW9jm"
let url2 = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=RpI4gkUAvvPiuL84PIosepa0GWRDW9jm"

$.getJSON (url,function(data){
        console.log (data.results[0].abstract);
    
    })

$.getJSON (url2,function(data){
        console.log (data.results[5].headline);
    
})