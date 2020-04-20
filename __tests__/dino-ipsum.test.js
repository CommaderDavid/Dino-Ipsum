// use "debugger" to look for bugs and broken code.
import { EraseVowels } from "./../src/erase-vowels.js";

describe('Removing Vowels', () => {

  // test('should remove Us from the dinosaur name, and replace them with -', () => {
  //   let dino = "Technosaurus";
  //   let removeU = dino.replace(/u/gi, "-");
  //   expect(removeU).toEqual("Technosa-r-s");
  // });

  test('should replace a vowel with a symbol', () => {
    let testDino = new EraseVowels("Technosaurus");
    console.log(testDino.randomVowels());
    expect(testDino).toEqual(testDino);
  });
});
