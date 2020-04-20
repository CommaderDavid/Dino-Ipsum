// use "debugger" to look for bugs and broken code.
import { EraseVowels } from "./../src/erase-vowels.js";

describe('Removing Vowels', () => {

  test('should remove Us from the dinosaur name, and replace them with -', () => {
    let dino = "Technosaurus";
    let removeU = dino.replace(/u/g, "-");
    expect(removeU).toEqual("Technosa-r-s");
  });
});
