// document.addEventListener('DOMContentLoaded', function() {
//     var carData = sessionStorage.getItem('carData');
  
//     if (carData) {
//       var car = JSON.parse(carData);
//       document.getElementById('img').src = car.img;
//       document.getElementById('marka').textContent = 'Marka: ' + car.marka;
//       document.getElementById('model').textContent = 'Model: ' + car.model;
//       document.getElementById('rok').textContent = 'Rocznik: ' + car.rok;
//       document.getElementById('przebieg').textContent = 'Przebieg: ' + car.przebieg;
//       document.getElementById('silnik').textContent = 'Silnik: ' + car.silnik;
//       document.getElementById('paliwo').textContent = 'Paliwo: ' + car.paliwo;
  
//       var cenaElement = document.getElementById('cena');
  
//       function obliczSumeCen() {
//         var sumaCen = parseInt(car.cena);
  
//         var checkbox1 = document.getElementById('checkbox1');
//         if (checkbox1.checked) {
//           sumaCen += parseInt(checkbox1.getAttribute('data-koszt'));
//         }
  
//         var checkbox2 = document.getElementById('checkbox2');
//         if (checkbox2.checked) {
//           sumaCen += parseInt(checkbox2.getAttribute('data-koszt'));
//         }
  
//         var checkbox3 = document.getElementById('checkbox3');
//         if (checkbox3.checked) {
//           sumaCen += parseInt(checkbox3.getAttribute('data-koszt'));
//         }
  
//         cenaElement.textContent = 'Cena: ' + sumaCen + 'zł';
//       }
  
//       var checkboxes = document.querySelectorAll('input[type="checkbox"]');
//       checkboxes.forEach(function(checkbox) {
//         checkbox.addEventListener('change', obliczSumeCen);
//       });
  
//       obliczSumeCen();
//     } else {
//       window.location.href = 'index.html';
//     }
  
//     var formData = sessionStorage.getItem('formData');
//     if (formData) {
//       var formFields = JSON.parse(formData);
//       document.getElementById('imie').value = formFields.imie;
//       document.getElementById('nazwisko').value = formFields.nazwisko;
//       document.getElementById('miasto').value = formFields.miasto;
//     }
  
//     var formInputs = document.querySelectorAll('input[type="text"]');
//     formInputs.forEach(function(input) {
//       input.addEventListener('input', function() {
//         var formFields = {
//           imie: document.getElementById('imie').value,
//           nazwisko: document.getElementById('nazwisko').value,
//           miasto: document.getElementById('miasto').value
//         };
//         sessionStorage.setItem('formData', JSON.stringify(formFields));
//       });
//     });
  
//     var form = document.querySelector('form');
//     form.addEventListener('submit', function() {
//       sessionStorage.removeItem('formData');
//     });
//   });

//  document.addEventListener('DOMContentLoaded', function() {
//     var carData = sessionStorage.getItem('carData');
  
//     if (carData) {
//       var car = JSON.parse(carData);
//       document.getElementById('img').src = car.img;
//       document.getElementById('marka').textContent = 'Marka: ' + car.marka;
//       document.getElementById('model').textContent = 'Model: ' + car.model;
      
//       var cenaElement = document.getElementById('cena');
  
//       function obliczSumeCen() {
//         var sumaCen = parseInt(car.cena);
  
//         var checkbox1 = document.getElementById('checkbox1');
//         if (checkbox1.checked) {
//           sumaCen += parseInt(checkbox1.getAttribute('data-koszt'));
//         }
  
//         var checkbox2 = document.getElementById('checkbox2');
//         if (checkbox2.checked) {
//           sumaCen += parseInt(checkbox2.getAttribute('data-koszt'));
//         }
  
//         var checkbox3 = document.getElementById('checkbox3');
//         if (checkbox3.checked) {
//           sumaCen += parseInt(checkbox3.getAttribute('data-koszt'));
//         }
  
//         cenaElement.textContent = 'Cena: ' + sumaCen + 'zł';
//       }
  
//       var checkboxes = document.querySelectorAll('input[type="checkbox"]');
//       checkboxes.forEach(function(checkbox) {
//         checkbox.addEventListener('change', obliczSumeCen);
//       });
  
//       obliczSumeCen();
//     } else {
//       window.location.href = 'index.html';
//     }
  
//     var formData = sessionStorage.getItem('formData');
//     if (formData) {
//       var formFields = JSON.parse(formData);
//       document.getElementById('imie').value = formFields.imie;
//       document.getElementById('nazwisko').value = formFields.nazwisko;
//       document.getElementById('miasto').value = formFields.miasto;
//     }
  
//     var formInputs = document.querySelectorAll('input[type="text"]');
//     formInputs.forEach(function(input) {
//       input.addEventListener('input', function() {
//         var formFields = {
//           imie: document.getElementById('imie').value,
//           nazwisko: document.getElementById('nazwisko').value,
//           miasto: document.getElementById('miasto').value
//         };
//         sessionStorage.setItem('formData', JSON.stringify(formFields));
//       });
//     });
  
//     var form = document.querySelector('form');
//     form.addEventListener('submit', function() {
//       sessionStorage.removeItem('formData');
//       window.location.href = 'dziekujemy.html';
//     });
//   });

// document.addEventListener('DOMContentLoaded', function() {
//     var carData = sessionStorage.getItem('carData');
  
//     if (carData) {
//       var car = JSON.parse(carData);
//       document.getElementById('img').src = car.img;
//       document.getElementById('marka').textContent = 'Marka: ' + car.marka;
//       document.getElementById('model').textContent = 'Model: ' + car.model;
      
//       var cenaElement = document.getElementById('cena');
  
//       function obliczSumeCen() {
//         var sumaCen = parseInt(car.cena);
  
//         var checkbox1 = document.getElementById('checkbox1');
//         if (checkbox1.checked) {
//           sumaCen += parseInt(checkbox1.getAttribute('data-koszt'));
//         }
  
//         var checkbox2 = document.getElementById('checkbox2');
//         if (checkbox2.checked) {
//           sumaCen += parseInt(checkbox2.getAttribute('data-koszt'));
//         }
  
//         var checkbox3 = document.getElementById('checkbox3');
//         if (checkbox3.checked) {
//           sumaCen += parseInt(checkbox3.getAttribute('data-koszt'));
//         }
  
//         cenaElement.textContent = 'Cena: ' + sumaCen + 'zł';
//       }
  
//       var checkboxes = document.querySelectorAll('input[type="checkbox"]');
//       checkboxes.forEach(function(checkbox) {
//         checkbox.addEventListener('change', obliczSumeCen);
//       });
  
//       obliczSumeCen();
//     } else {
//       window.location.href = 'index.html';
//     }
  
//     var formData = sessionStorage.getItem('formData');
//     if (formData) {
//       var formFields = JSON.parse(formData);
//       document.getElementById('imie').value = formFields.imie;
//       document.getElementById('nazwisko').value = formFields.nazwisko;
//       document.getElementById('miasto').value = formFields.miasto;
//     }
  
//     var form = document.querySelector('form');
//     form.addEventListener('submit', function() {
//       sessionStorage.removeItem('formData');
//       window.location.href = 'dziekujemy.html';
//       form.target = '_blank'; // Otwórz nową kartę po kliknięciu przycisku "Kup"
//     });
//   });

  document.addEventListener('DOMContentLoaded', function() {
    var carData = sessionStorage.getItem('carData');
  
    if (carData) {
      var car = JSON.parse(carData);
      document.getElementById('img').src = car.img;
      document.getElementById('marka').textContent = 'Marka: ' + car.marka;
      document.getElementById('model').textContent = 'Model: ' + car.model;
  
      var cenaElement = document.getElementById('cena');
  
      function obliczSumeCen() {
        var sumaCen = parseInt(car.cena);
  
        var checkbox1 = document.getElementById('checkbox1');
        if (checkbox1.checked) {
          sumaCen += parseInt(checkbox1.getAttribute('data-koszt'));
        }
  
        var checkbox2 = document.getElementById('checkbox2');
        if (checkbox2.checked) {
          sumaCen += parseInt(checkbox2.getAttribute('data-koszt'));
        }
  
        var checkbox3 = document.getElementById('checkbox3');
        if (checkbox3.checked) {
          sumaCen += parseInt(checkbox3.getAttribute('data-koszt'));
        }
  
        cenaElement.textContent = 'Cena: ' + sumaCen + 'zł';
  
        // Zapisz sumę cen w sesji, aby przekazać ją do strony "dzienkujemy.html"
        sessionStorage.setItem('sumaCen', sumaCen);
      }
  
      var checkboxes = document.querySelectorAll('input[type="checkbox"]');
      checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', obliczSumeCen);
      });
  
      obliczSumeCen();
    } else {
      window.location.href = 'index.html';
    }
  
    var formData = sessionStorage.getItem('formData');
    if (formData) {
      var formFields = JSON.parse(formData);
      document.getElementById('imie').value = formFields.imie;
      document.getElementById('nazwisko').value = formFields.nazwisko;
      document.getElementById('miasto').value = formFields.miasto;
    }
    var sumaCen = sessionStorage.getItem('sumaCen');

    if (sumaCen) {
      document.getElementById('cena').textContent = 'Cena: ' + sumaCen + 'zł';
    } else {
      // Jeśli brak sumy cen, przekieruj użytkownika na stronę główną
      window.location.href = 'index.html';
    }
  
    var platnoscForm = document.getElementById('platnoscForm');
    platnoscForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      var imie = document.getElementById('imie').value;
      var nazwisko = document.getElementById('nazwisko').value;
      var miasto = document.getElementById('miasto').value;
      var opcja = document.querySelector('input[name="opcje"]:checked').value;
      var checkbox1 = document.getElementById('checkbox1').checked;
      var checkbox2 = document.getElementById('checkbox2').checked;
      var checkbox3 = document.getElementById('checkbox3').checked;
  
      // Tutaj możesz wykonać żądanie AJAX, wysłać dane na serwer itp.
  
      // Przekieruj użytkownika na stronę "dziekujemy.html"
      window.location.href = 'dziekujemy.html';
  
      // Wyczyść zawartość pól formularza
      document.getElementById('imie').value = '';
      document.getElementById('nazwisko').value = '';
      document.getElementById('miasto').value = '';
    });
  });