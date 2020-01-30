$.getJSON("/articles", data => {
    for(var i=0; i < data.length; i++){
        //grabs the articles and turns it into a JSON file and displays the info on the page
    $("#articles").append("<p data-id='" + data[i]._id + "'>" + data[i].title + "<br />" + data[i].link + "</p>");
    }
});