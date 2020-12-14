var watch = document.getElementById('watchNow').addEventListener("click");
var returnMenu = document.getElementById('return').addEventListener("click");
var informations = document.getElementById('btnInformation').addEventListener("click");
var endInformation = document.getElementById('btnInformation').addEventListener("mouseout")

function assistirAgora(){
        window.location.href='the-queens-gambit.html';
};

function returnToMenu(){
        window.location.href='index.html';
};

function moreInformation(){
    document.getElementById('sinopse').style.display = "flex";
}

function closeInformation(){
    document.getElementById('sinopse').style.display = "none";
}

