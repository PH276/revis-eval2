// alert("1")

$(".btnsubmit").on("click", function(){
    var nom = $("#oblignom").val();

    var message = $("#msg");

    if (nom===""){
        $("#oblignom").closest('div.form-group').addClass("has-error");
        message.addClass('error');
        var pasDeNom = $('.error');
        var msgPasDeNom = "Vous n'avez pas renseigné votre nom !";
        pasDeNom[0].innerHTML = msgPasDeNom+"<br>";
    }

    // formulaire rempli correctement ==> formulaire remplacé par messagede réussite

    var prenom = $("#obligprenom").val();

    if (prenom===""){
        $("#obligprenom").closest('div.form-group').addClass("has-error");
        message.addClass('error');
        var pasDePrenom = $('.error');
        var msgPasDePrenom = "Vous n'avez pas renseigné votre prénom !";
        pasDePrenom[0].innerHTML += msgPasDePrenom+"<br>";
    }

    var adresse = $("#obligadresse").val();
    if (adresse===""){
        $("#obligadresse").closest('div.form-group').addClass("has-error");
        message.addClass('error');
        var pasDadresse = $('.error');
        var msgPasDadresse = "Vous n'avez pas renseigné votre adresse !";
        pasDadresse[0].innerHTML += msgPasDadresse+"<br>";
    }

    var cp = $("#inputcp").val();
    if (cp.length != 5){
        $("#inputcp").closest('div.form-group').addClass("has-error");
        message.addClass('error');
        var pasDecp = $('.error');
        var msgDecp = "Vous n'avez pas renseigné correctement votre code postal !";
        pasDecp[0].innerHTML += msgDecp+"<br>";
    }

    var telephone = $("#telephone").val();
    if (telephone.length != 10){
        $("#telephone").closest('div.form-group').addClass("has-error");
        message.addClass('error');
        var pasDeTelephone = $('.error');
        var msgDeTelephone = "Vous n'avez pas renseigné correctement votre téléphone !";
        pasDeTelephone[0].innerHTML += msgDeTelephone+"<br>";
    }

    var selection = $("#selection").val(); // pays

    if (nom !=="" && prenom !=="" && adresse !=="" && cp.length == 5 && telephone.length == 10 && selection !==""){
        var formulaireOK = $('form');
        formulaireOK.addClass('valid');
        var msgOK = "Votre formulaire est validé !";
        formulaireOK[0].innerHTML = msgOK;
        message.remove(".error");
    }
});
