import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function () {

  (async () => {
    let response = await fetch(`http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=1&words=1`);
    let jsonifiedResponse = await response.json();
    getElements(jsonifiedResponse);
  });

  const getElements = function (response) {
    $('.name').text(`${response.main}`);
  };

  $("form#guess").submit(function (e) {
    e.preventDefault();

    const vowel = $("select#vowels").val();
  });
});
