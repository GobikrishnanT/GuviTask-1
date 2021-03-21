//1 . Create a instance of XMLHttpRequest();
var request = new XMLHttpRequest();

// 2 . Create a connection : //Open a connection
request.open('GET' , 'https://restcountries.eu/rest/v2/all' , true) 
//Get : Method , URL : link  , true : depend for 
//free and escape from any issue

// 3 . Send the request :
request.send();

//4 . Load the response ...This function is triggered only when the date
// is retrived

request.onload = function() {
    var myData = JSON.parse(this.response);
    console.log(typeof myData);
    for(let index in myData) {
        console.log(myData[index]["name"]);
    }
    
}

