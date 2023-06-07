
$(document).ready(function() {
    $('.btn-primary').on('click', function() {
      var parentId = $(this).closest('.car').attr('id');
  
      $.getJSON('samochody.json', function(data) {
        var car = data[parentId];
  
        sessionStorage.setItem('carData', JSON.stringify(car));
  
        window.location.href = 'platnosc.html';
      });
    });
  
    $('#exampleSelect').val('all');
    $('#exampleSelect').on('change', function() {
      var selectedOption = $(this).val();
  
      if (selectedOption === 'all') {
        $('.car').css('display', 'block').removeClass('order-last');
      } else {
        $('.car').css('display', 'none').removeClass('order-last');
        if (selectedOption === 'volkswagen') {
          $('.vw').css('display', 'block');
        } else if (selectedOption === 'audi') {
          $('.audi').css('display', 'block').addClass('order-last');
        } else if (selectedOption === 'opel') {
          $('.opel').css('display', 'block').addClass('order-last');
        } else if (selectedOption === 'kia') {
          $('.kia').css('display', 'block').addClass('order-last');
        }
      }
    });
  });
  