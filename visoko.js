// informacije :)
function informacije() {
    let informacija = "Ovo je sajt o gradjevinama Njujorka :)";
    alert(informacija);
}

//If petlja za da ili ne
const submitButton = document.getElementById('potvrdi-btn');

submitButton.addEventListener('click', () => {
  const answer = document.querySelector('input[name="odgovor"]:checked');

  if (answer && answer.value === 'DA') {
    alert('Hvala na informaciji :)');
  } else if (answer && answer.value === 'NE') {
    alert('Hvala na informaciji :(');
  } else {
    alert('Molim vas da izaberete odgovor.');
  }
});

//menjanje boje teksta kada je mis preko 
const menjaBoju = document.getElementById('promeni-boju');

menjaBoju.addEventListener('mouseover', function() {
  menjaBoju.style.color = 'red';
});

menjaBoju.addEventListener('mouseout', function() {
  menjaBoju.style.color = '';
});

function proveraForme() {
  //Preuzima vrednosti imena, mejla i komentara
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let comment = document.getElementById("comment").value;

  // Proverava da li su polja prazna
  if (name == "" || email == "" || comment == "") {
    alert("Molimo popunite sva polja.");
    return false;
  }

  // Vraca vrednost ako je sve ok
  else {
  alert('Komentar poslat');
  return true;
  }
}

//funkcija za ogranicavanje duzine
function duzina() {
  let nameInput = document.getElementById('name');
  let emailInput = document.getElementById('email');
  let commentInput = document.getElementById('comment');
  
  //Ogranicava ime na duzinu od 25 karaktera
  if (nameInput.value.length > 25) {
    nameInput.value = nameInput.value.slice(0, 25);
  }

  //Ogranicava duzinu mejla na 50 karatera
  if (emailInput.value.length > 50) {
    emailInput.value = emailInput.value.slice(0, 50);
  }

  //Ogranicava duzinu komentara na 250 karaktera
  if (commentInput.value.length > 250) {
    commentInput.value = commentInput.value.slice(0, 250);
  }
}

//Poziv funkcije "duzina", a da nije direktno pozvana u html kodu
let nameInput = document.getElementById('name');
nameInput.addEventListener('input', duzina);

let emailInput = document.getElementById('email');
emailInput.addEventListener('input', duzina);

let commentInput = document.getElementById('comment');
commentInput.addEventListener('input', duzina);

//gore dole dugme
document.addEventListener('DOMContentLoaded', () => {
  const scrollToTopButton = document.getElementById('scrollToTopButton');
  const scrollToBottomButton = document.getElementById('scrollToBottomButton');
//gore
  scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
//dole
  scrollToBottomButton.addEventListener('click', () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  });
});