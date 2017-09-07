 // alert("1")

(function(){
    window.addEventListener("load", function(){
        var message = document.getElementById("msg");
        var formulaire = document.getElementById ("needs-validation");
        var nom = document.getElementById("oblignom");

        formulaire.addEventListener("submit", function(event){
            if (formulaire.checkValidity() == false){
                event.preventDefault();
                event.stopPropagation();

                msg.classList.add('error');

                var pbFormulaire = document.getElementsByClassName('error');
                var msgInfo = "Vous devez remplir les champs surlignés en rouge !";
                pbFormulaire[0].innerText = msgInfo;
            }
            formulaire.classList.add("was-validated");
            if(formulaire.checkValidity() === true){
                event.preventDefault();
                event.stopPropagation();

                msg.classList.add("valid");
                var formulaireOK = document.getElementsByClassName("valid");
                var msgInfo = "votre formulaire a bien été envoyé";
                formulaireOK[0].innerText = msgInfo;
            }
        }, false);

    }, false);
}());
