export class EraseVowels {
  constructor(dino) {
    this.dino = dino;
    this.missingVowel = "";
  }

  randomVowels() {
    let vowelNumber = Math.floor(Math.random() * 5);
    if (vowelNumber === 0) {
      this.missingVowel = "a";
      return this.dino.replace(/a/gi, "-");
    } else if (vowelNumber === 1) {
      this.missingVowel = "e";
      return this.dino.replace(/e/gi, "-");
    } else if (vowelNumber === 2) {
      this.missingVowel = "i";
      return this.dino.replace(/i/gi, "-");
    } else if (vowelNumber === 3) {
      this.missingVowel = "o";
      return this.dino.replace(/o/gi, "-");
    } else if (vowelNumber === 4) {
      this.missingVowel = "u";
      return this.dino.replace(/u/gi, "-");
    }
  }

  correctAnswer(vowel) {
    if (this.missingVowel === vowel) {
      return "You are correct!";
    } else {
      return "Wrong answer!"
    }
  }
}
