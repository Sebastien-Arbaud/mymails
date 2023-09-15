//Cible toutes les balises <p> présentes dans notre index.html afin de connaître le nombre de mails présents sur notre page web. 

const messagesCount = document.querySelectorAll('p').length;

//Met à jour la valeur de l'id count, qui sert de compteur pour les mails, en lui affectant la valeur de la variable messagesCount.

document.querySelector('#count').textContent = messagesCount;


//Récupère l'année, le mois et le jour de la date actuelle.

let year = new Date().getUTCFullYear();
let month;
let day;

//Condition qui rajoute un 0 devant les mois qui contiennent qu'un seul chiffre

if (new Date().getMonth() < 9) {
  month = "0" + (new Date().getMonth() + 1);
} else {
  month = new Date().getMonth() + 1;
}

//Condition qui rajoute un 0 devant les jours qui contiennent qu'un seul chiffre

if (new Date().getDate() < 9) {
  day = "0" + new Date().getDate();
} else {
  day = new Date().getDate();
}

//Mise en forme de la date sous le format "YYYY-MM-DD"

const date = year + "-" + month + "-" + day;

//Ajout de la date dans le pied de page.

document.querySelector('#footer').innerHTML += `<span id="date">${date}</span>`;

//Cible tous les éléments possédant une "X" via la classe delete.

const deleteClick = document.querySelectorAll('.delete');

//Création d'une boucle vérifiant si un clic a été réalisé sur l'une des "X", si c'est le cas le mail est supprimé et l'id count est MAJ.

for(let i = 0; i < deleteClick.length; i++){
  deleteClick[i].addEventListener('click' , function () {
    console.log('Click detected');
    this.parentNode.remove();
    document.querySelector('#count').textContent = document.querySelectorAll('p').length;
  });
  

}

//Cible le bouton 'Add' et ajoute un écouteur de clic sur celui-ci, qui au clic déclenchera une fonction permettant de créer un nouveau mail

const buttonClick = document.querySelector('#btn-add');


buttonClick.addEventListener('click' , function() {
  console.log('Click detected');

//Récupère le texte renseigné dans l'input " 📩 New message..."  et le stocke dans la variable message

  let message = document.querySelector("#add-message");
 console.log(message);

//Permet d'ajouter un nouveau mail dans la boîte mail en récupérant la valeur de la variable message.

 document.querySelector('#msg-container').innerHTML += `
 <div class="row new-row">
 <img class="avatar" src="images/avatar-1.jpg" />
 <div class="text-container">
   <h6>Seb Arbaud</h6>
   <p>${message.value}</p>
 </div>
 <span class="delete">✖</span>
</div>`;

//Réinitialise la valeur de l'input pour créer un nouveau mail.

message.value = "";

//Mise à jour du compteur de mail.

document.querySelector('#count').textContent = document.querySelectorAll('p').length;

//Ajout de la fonctionnalité de suppression sur les nouveaux mails crées.

for(let i = 0; i < document.querySelectorAll('.delete').length; i++){
  document.querySelectorAll('.delete')[i].addEventListener('click' , function () {
    console.log('Click detected');
    this.parentNode.remove();
    document.querySelector('#count').textContent = document.querySelectorAll('p').length;
  });
  

}

});


//Ajout d'une écoute de clic sur le bouton "Search"

document.querySelector('#btn-search').addEventListener('click' , function(){
  console.log("Click detected");

//Création d'une variable récupérant les informations renseignés dans l'input " 🔎 Search message..." permettant de faire une recherche

  let textToCompare = document.querySelector('#search-message');

//Création d'une variable récupérant le nom des auteurs des mails via la balise <h6>

  let comparaison = document.querySelectorAll('h6');
  console.log(textToCompare);

//Création d'une boucle qui parcourt tous les mails présents dans la boîte mail.

   for(let i = 0; i < document.querySelectorAll('.row').length; i++){

  //Si les informations renseignés dans la barre de recerche sont bien présentes dans le nom de l'ulilisateur alors le mail est affiché.

    if((comparaison[i].textContent.toLowerCase().includes(textToCompare.value.toLowerCase()))){
    document.querySelectorAll('.row')[i].style.display = 'flex';
    console.log('Match', i);

  //Sinon le mail est masqué.    

  } else {
    document.querySelectorAll('.row')[i].style.display = 'none'

  }
}

//Réinitialise la valeur de l'input pour faire une recherche.

textToCompare.value = "";


})





