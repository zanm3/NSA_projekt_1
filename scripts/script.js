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
    Swal.fire({
        icon: 'success',
        title: 'Super!',
        text: 'Nakup vozovnice je bil uspešen'
    }).then((result) => {
        if (result.isConfirmed) {
            form.submit();
        }
    });
}

function intro() {
    Swal.fire({
        icon: 'info',
        title: 'O strani',
        html: "Razvijalec: Žan Markuža<br>Razred: 4.RB<br>Mentor: dr. Boštjan Vouk"
    });
}
function disablesDate() {
    const danes = new Date();
    const dd = String(danes.getDate()).padStart(2, '0');
    const mm = String(danes.getMonth() + 1).padStart(2, '0');
    const yyyy = danes.getFullYear();


    const format = `${yyyy}-${mm}-${dd}`;


    document.getElementById('odInput').setAttribute('min', format);
    document.getElementById('prInput').setAttribute('min', format);


}
document.addEventListener('focuson', disablesDate());

function vreduDatum() {
    const datumOdhoda = document.getElementById("odInput").value;
    const datumPrihoda = document.getElementById("prInput").value;

    const datum1 = new Date(datumOdhoda);
    const datum2 = new Date(datumPrihoda);

    if (datum1 > datum2) {
        return false;
    } else {
        return true;
    }
}

function istiKraj() {
    const krajOdhoda = document.getElementById("od").value.trim();
    const krajPrihoda = document.getElementById("pri").value.trim();

    if (!(krajOdhoda == krajPrihoda)) {
        return true;
    } else {
        return false;
    }
}
function checks() {
    const forma = document.getElementById("forma");

    forma.addEventListener("submit", function (event) {
        event.preventDefault();

        const smer1 = document.getElementById("first");
        const smer2 = document.getElementById("second");
        const jeIzbranoRadio1 = smer1.checked || smer2.checked;

        const vrsta1 = document.getElementById("ena");
        const vrsta2 = document.getElementById("vec");
        const jeIzbranoRadio2 = vrsta1.checked || vrsta2.checked;
        const datumOdhoda = document.getElementById("odInput").value.trim() !== "";
        const krajOdhoda = document.getElementById("od").value.trim();
        const krajPrihoda = document.getElementById("pri").value.trim();
        const jeIzpolnjenKraj = krajOdhoda !== "" && krajPrihoda !== "";

        const razred = document.getElementById("selectRazred").value.trim() !== "";

        if (jeIzbranoRadio1 && jeIzbranoRadio2 && validateNumbers() && datumOdhoda && jeIzpolnjenKraj && razred) {
            if (vreduDatum() && istiKraj()) {
                uspesno();
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Napaka!',
                    text: 'Vpis podatkov je neveljaven!'
                });
            }
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Napaka!',
                text: 'Podatki, označeni z zvezdico so obvezni!'
            });
        }
    });
}
function validateNumbers() {
        const vrsta2 = document.getElementById("vec"); // Multi-passenger option
        if (vrsta2.checked) {
            const steviloOdraslih = document.getElementById("odrasliInput").value.trim();
            const steviloMladoletnih = document.getElementById("mladoletniInput").value.trim();
            return steviloOdraslih !== "" && steviloMladoletnih !== "";
        }
        return true;
}

