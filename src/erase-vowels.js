export class EraseVowels {
  constructor(dino) {
    let vowels = [a, e, i, o, u];
    this.dino = dino;
  }
  replacementLetter() {
    let removeA = this.dino.replace(/a/g, "-");
    let removeE = this.dino.replace(/e/g, "-");
    let removeI = this.dino.replace(/i/g, "-");
    let removeO = this.dino.replace(/o/g, "-");
    let removeU = this.dino.replace(/u/g, "-");
  }
  // Start here and remember to grab the .replace and,
  //look at a random number generator for getting a number bewteen 0-4.
}
