import './styles.css';
import $ from 'jquery';


$(document).ready(function() {
  setInterval(function() {
    let date = new Date();
    let hours = date.getHours();
    let mins = date.getMinutes();
    let seconds = date.getSeconds();
    var time = hours + ":" + mins + ":" + seconds;
    console.log(time);
    return time;
  }, 1000);
  $('#time-div').click(function() {
    $('.time-display').text(time);
  });





  $('#weather-div').click(function() {
    $('.weather').toggle();
  });
  $('#weatherLocation').click(function() {
    let city = $('#location').val();
    $('#location').val('');
    $.ajax({
      url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=af35f6d151c31227a31d5723fc914b24`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
        $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp}.`);
      },
      error: function() {
        $('#errors').text('There was an error processing your request.  Please try again.')
      }
    });
  });
});
