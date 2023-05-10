// informacije :)
function informacije() {
    var informacija = "Ovo je sajt o gradjevinama Njujorka :)";
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