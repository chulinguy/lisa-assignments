class Parrot {
    constructor(name) {
      this.name = name || "A nameless parrot";
    }
    
    speak() {
      return `${this.name} want a cracker!`
    }
}

class ApprenticeParrot extends Parrot {
    constructor(name) {
        super(name);
        this.counter = 0;
    }
    
    speak() {
        if (this.counter < 3) {
            this.counter++;
            return "😴";
        } else {
            this.counter++;
            return super.speak();
        }
    }
}

module.exports = {Parrot, ApprenticeParrot}