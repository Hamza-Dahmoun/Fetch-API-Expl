function fetchData() {
    //since we are loading data from a local file, always use (mode: 'no-cors') otherwise it won't permit loading data, it will throw
    //it will throw cross origin error
    //N.B: browsers (i'm sure abt chrome) won't permit loading data from local json file, so in order to check if the code works
    //if the code works just open the file using Live Server or something similar
    let url = "data.json";
    fetch(url, {
        //method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors',//cors, no-cors, *cors, same-origin
        //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        //credentials: 'same-origin', // include, *same-origin, omit
        /*headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },*/
        //redirect: 'follow', // manual, *follow, error
        //referrer: 'no-referrer', // no-referrer, *client
    }).then(res => {
        //so once it finishes fetching it will execute this block of code
        //1- we'll log the response we've got (just for testing)
        //2- we'll log the response body in a json format (just for testing)
        //3- we'll return the response body in a json format
        console.log(res);
        //console.log(res.json());//N.B: if we left this line of code we'll get the error msg: TypeError: "Body has already been consumed."
        return res.json();
        //the return statements will return an object that we're going to use in the next 'then' ... so this current 'then' will return a promess
    }).then(ourJsonData => {
        console.log(JSON.stringify(ourJsonData) + " *-*-* and its length is: " + ourJsonData.length);
        displayJsonData(ourJsonData);
    })
        .catch(error => {
            console.log(error);
        });
}

function displayJsonData(fetchedData){
    console.log(fetchedData.length);
    var ul = document.createElement("UL");
    for(let i = 0; i < fetchedData.length; i++){
        var li = document.createElement("LI");
        li.innerHTML = 
        "<strong>" + fetchedData[i].id + ":  </strong>" 
        + "<span>" + fetchedData[i].property1 + "  </span>"
        + " --- " 
        + "<span>" + fetchedData[i].property2 + "  </span>"
        + " --- " 
        + "<span>" + fetchedData[i].property3 + "  </span>"
        + "."
        ;
        ul.appendChild(li);
    }
    document.getElementById("output").appendChild(ul);
}