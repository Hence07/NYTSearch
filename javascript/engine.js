var searchTerm;
var numberRecords = 0;
var startYear = 0;
var endYear = 0;

function displayNYTInfo(event) {

    var searchTermForm = $(this).attr(".form-group1");
    var numberRecordsForm = $(this).attr(".form-group2");
    var startYearForm = $(this).attr(".form-group3");
    var endYearForm = $(this).attr("form-group4");

    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q= " + searchTerm + " ?begin_date= " +
        startYear + " ?end_date= " + endYear + "&api_key=e871a8e2116e4e16a4c12868ba438a9f"

    $.ajax({
        url: url,
        method: 'GET',
    }).then(function (response) {
        console.log(response);
        
        //create NYT info divs for each return of information
        var nytDiv = ("<div>");

        //create a title of the article header
        var titleDiv = ("<h2>");
        //get the information from api to match the search term
        titleDiv.text()

        //create a year of publication paragraph
        //get the information from api to match the start year

        //create a place for the url to go
        //get the url 

        //append it all in the NYT info div

        //append to the form group container


    });
}

function renderResponses() {
    $(".search-button").on("click", function (event) {
    //grab the words in the search term box
    var searchTermForm = $(".form-group1").val().trim();
    //push the info from the Search area into searchterms
    searchTerm.push(searchTermForm);
    //grab the number in the number of records box
    var numberRecordsForm = $(".form-group2").val().trim();
    //push the info from Number of Records to numberRecords
    numberRecords.push(numberReocrdsForm);
    //grab the start year from the start year box
    var startYearForm = $(".form-group3").val().trim();
    //push the info from Start Year into startYear
    startYear.push(startYearForm); 
    //grab the end year from the end year box
    var endYearForm = $(".form-group2").val().trim();
    //push the info from End Year into endYear
    endYear.push(endYearForm);
    })
    }

    renderResponses()