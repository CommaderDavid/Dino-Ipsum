import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { EraseVowels } from './erase-vowels.js';

$(document).ready(function () {
  var dinoName;

  $("button#get-name").click(function () {

    (async () => {
      let response = await fetch(`http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=1&words=1`);
      let jsonifiedResponse = await response.json();
      getElements(jsonifiedResponse);
    })();

    const getElements = function (response) {
      dinoName = new EraseVowels(response[0][0]);
      $('.name').text(`${dinoName.randomVowels()}`);
    };
  });


  $("form#guess").submit(function (e) {
    e.preventDefault();

    const vowel = $("select#vowels").val();

    $("#correct-spelling").text(dinoName.dino);
    $("#answer").text(dinoName.correctAnswer(vowel));
  });
});
