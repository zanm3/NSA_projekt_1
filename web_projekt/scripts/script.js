function showHidden() {
    const stevilo = (document.querySelector('input[name="steviloOseb"]:checked')).value;
    const hiddenDiv = document.getElementById("steviloNum");
    if (stevilo === "vecosebna") {
        hiddenDiv.style.display = "flex";
    } else {
        hiddenDiv.style.display = "none";
    }
}
function showHidden2() {
    const smer = (document.querySelector('input[name="smer"]:checked')).value;
    const hiddenDiv = document.getElementById("prihod");
    let b;
    if (smer === "povratni") {
        hiddenDiv.style.display = "block";
        b = true;
    } else {
        hiddenDiv.style.display = "none";
        b = false;
    }
}
function uspesno() {
    const form = document.getElementById("forma");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        Swal.fire({
            icon: 'success',
            title: 'Super!',
            text: 'Nakup vozovnice je bil uspešen'

        }).then(() => {
            form.submit();
        });
    });
}
Swal.fire({
    title: 'O strani',
    html: "Razvijalec: Žan Markuža<br>Razred: 4.RB"
});