let info = {
    "name": "Djordy",
    "age": 22,
    "hobbies": [
        "tekenen",
        "fietsen",
        "gamen"
    ]
}

window.addEventListener("load", async function() {

    let API = await fetch("https://api.thecatapi.com/v1/images/search")
    let data = await API.json()

    document.querySelector("#box1").addEventListener('click', function(){
        document.querySelector('#box1').innerHTML = `<h1>${info.name}</h1><p>${info.age}</p>`;
        document.querySelector('#box2').innerHTML = `<img alt="Cat" src="${data[0].url}">`;
    });

    document.querySelector("#box2").addEventListener('click', function(){
        document.querySelector('#box2').innerHTML = `<h2>${info.hobbies.join(", ")}</h2>`;
    });
});