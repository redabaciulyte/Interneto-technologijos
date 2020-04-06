var lang = window.localStorage.getItem('lang');

if (!lang) {
  window.localStorage.setItem("lang", "en");
} else {
  if(lang === 'lt') {
    var translations = [
      {key: 'products', value: 'PRODUKTAI'},
      {key: 'home', value: 'PAGRINDINIS'},
      {key: 'templates', value: 'ŠABLONAI'},
      {key: 'pricing', value: 'KAINOS'},
      {key: 'contacts', value: 'KONTAKTAI'},
      {key: 'gallery', value: 'GALERIJA'},
      {key: 'signin', value: 'Prisijungti'},
      {key: 'signup', value: 'Registruotis'},
      {key: 'head', value: 'Kurkite ypatingus sprendimus su mumis'},
      {key: 'cont1', value: 'Lengvo naudojimo įrankis jūsų vaizdo medžiagai kurti.'},
      {key: 'cont2', value: 'Pradėkite savo projekto kūrimą jau dabar!'},
      {key: 'head1', value: 'Kurkite ypatingus sprendimus su mumis'},
      {key: 'cont11', value: 'Lengvo naudojimo įrankis jūsų vaizdo medžiagai kurti.'},
      {key: 'cont21', value: 'Pradėkite savo projekto kūrimą jau dabar!'},
      {key: 'head2', value: 'Kurkite ypatingus sprendimus su mumis'},
      {key: 'cont12', value: 'Lengvo naudojimo įrankis jūsų vaizdo medžiagai kurti.'},
      {key: 'cont22', value: 'Pradėkite savo projekto kūrimą jau dabar!'},
      {key: 'head3', value: 'Kurkite ypatingus sprendimus su mumis'},
      {key: 'cont13', value: 'Lengvo naudojimo įrankis jūsų vaizdo medžiagai kurti.'},
      {key: 'cont23', value: 'Pradėkite savo projekto kūrimą jau dabar!'},
      {key: 'create', value: 'Kurti sprendimą'},
      {key: 'create1', value: 'Kurti sprendimą'},
      {key: 'create2', value: 'Kurti sprendimą'},
      {key: 'create3', value: 'Kurti sprendimą'},
      {key: 'signInModalLabel', value: 'Prisijungti'},
      {key: 'siginEmail', value: 'El. paštas'},
      {key: 'emailHelp', value: 'Užtikriname Jūsų duomenų konfidencialumą'},
      {key: 'siginPassword', value: 'Slaptažodis'},
      {key: 'checkme', value: 'Susipažinau ir sutinku su naudojimo taisyklėmis'},
      {key: 'signinClose', value: 'Atšaukti'},
      {key: 'signinSubmit', value: 'Toliau'},
      {key: 'signUpModalLabel', value: 'Registruotis'},
      {key: 'signupEmail', value: 'El. paštas'},
      {key: 'signupName', value: 'Vardas'},
      {key: 'signupSurname', value: 'Pavardė'},
      {key: 'date', value: 'Gimimo data'},
      {key: 'singupPassword', value: 'Slaptažodis'},
      {key: 'signupClose', value: 'Atšaukti'},
      {key: 'signupSubmit', value: 'Registruotis'},
      {key: 'firstN', value: 'Vardas'},
      {key: 'lastN', value: 'Pavardė'},
      {key: 'handleN', value: 'Slapyvardis'},
    ];

    translations.forEach(translation => {
      // check if key (id) exists in page
      if (window[translation.key]) {
        // check element content
        window[translation.key].textContent = translation.value;
        // window.hi.textContent = 'hello';
      }
    });
  }
}

// on language button click set its language
$('#lt').click(function () {
  window.localStorage.setItem("lang", "lt");
  window.location.reload();
});

$('#en').click(function () {
  window.localStorage.setItem("lang", "en");
  window.location.reload();
});
