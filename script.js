
var n = document.createElement("input");
n.setAttribute("id","text");
document.body.appendChild(n);

var button=document.createElement("button");
button.addEventListener("click",breweries);
button.innerHTML="click me";
document.body.append(button);

async function breweries(){
    let ip = document.getElementById("text").value;
    console.log(ip);
    try{
    let list = await fetch(`https://api.openbrewerydb.org/breweries/search?query=${ip}`);
    let result = await list.json();
    console.log(result);
    for(i=0;i<result.length;i++){
        var address = result[i].street+", "+result[i].postal_code+", "+ result[i].city+" ,"+result[i].country;
       
        let element = document.createElement("p");
        element.innerHTML = 
          ` Name:${result[i].name} <br> 
            Type:${result[i].brewery_type} <br>
            Phone:${result[i].phone} <br>
            Website:${result[i].website_url} <br>
            Address:${result[i].street} ${result[i].city} <br>
                    ${result[i].country} ${result[i].postal_code}` ; 
        document.body.append(element);
    }
    }catch(error){
        console.log(error);
    }

}  