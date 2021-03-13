var imagem = document.querySelector("#user-avatar");

url_base = "https://api.github.com/users/";

var nameInputDev = document.querySelector("#areaNameDev");
var n = "";
const msg = (n) =>{
    return n;
}

nameInputDev.addEventListener('change', (event) => {
    n = `${event.target.value}`;
    n = msg(n);
})

function teste(){
    var dados = "";
    fetch(url_base + n)
    .then(res => res.json())
    .then(data => {
        dados = data;
        console.log(data);
        avatar = document.createElement("img");
        avatar.src = dados.avatar_url;
        avatar.style.width = "200px";
        avatar.style.height = "200px"; 
        avatar.style.borderRadius = "50%";
        nomeDev = document.createElement("h2");
        nomeDev.innerText = dados.name;
        nomeDev.style.marginBottom = "0px";
        bio = document.createElement("p");
        bio.innerText = dados.bio;
        bio.style.width = "400px";
        bio.style.textAlign = "center";
        bio.style.marginBottom = "10px";
        imagem.innerHTML = "";
        imagem.appendChild(avatar);
        imagem.appendChild(nomeDev);
        imagem.appendChild(bio);
    });
}

const browseDev = async () => {
    return await teste();
}