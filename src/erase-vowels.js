export class EraseVowels {
  constructor(dino) {
    this.dino = dino;
  }

  randomVowels() {
    let vowelNumber = Math.floor(Math.random() * 5);
    if (vowelNumber === 0) {
      return this.dino.replace(/a/gi, "-");
    } else if (vowelNumber === 1) {
      return this.dino.replace(/e/gi, "-");
    } else if (vowelNumber === 2) {
      return this.dino.replace(/i/gi, "-");
    } else if (vowelNumber === 3) {
      return this.dino.replace(/o/gi, "-");
    } else if (vowelNumber === 4) {
      return this.dino.replace(/u/gi, "-");
    }
  }
}
