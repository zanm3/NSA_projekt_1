function showHidden(){
    const stevilo = (document.querySelector('input[name="steviloOseb"]:checked')).value;
    const hiddenDiv = document.getElementById("steviloNum");
    if(stevilo === "vecosebna"){
        hiddenDiv.style.display = "flex";
    }else{
        hiddenDiv.style.display = "none";
    }
}
function showHidden2(){
    const smer = (document.querySelector('input[name="smer"]:checked')).value;
    const hiddenDiv = document.getElementById("prihod");
    let b;
    if(smer === "povratni"){
        hiddenDiv.style.display = "block";
        b = true;
    }else{
        hiddenDiv.style.display = "none";
        b = false;
    }
}
function getPodatki(){
    const smerLeta = (document.getElementById('input[name="smer"]:checked')).value;
    const stOseb = (document.getElementById('input[name="steviloOseb"]:checked')).value;
    const datumOdhoda = (document.getElementById("odInput")).value;
    
}