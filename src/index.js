class SmartCalculator {
  constructor(initialValue) {
    this.storage = [initialValue];
  }

  add(number) {
    this.storage.push('+');
    this.storage.push(number);
    this.result = this.storage.join('');
    return this;
  }
  
  subtract(number) {
    this.storage.push('-');
    this.storage.push(number);
    this.result = this.storage.join('');
    return this;
  }

  multiply(number) {
    this.storage.push('*');
    this.storage.push(number);
    this.result = this.storage.join('');
    return this;
  }

  devide(number) {
    this.storage.push('/');
    this.storage.push(number);
    this.result = this.storage.join('');
    return this;
  }

  pow(number) {
      this.base = this.storage[this.storage.length - 1];
      this.storage.pop();
      this.storage.push(Math.pow(this.base, number));
      this.result = this.storage.join('');
    return this;
  }

  valueOf() {
    return eval(this.result);
  }
}

module.exports = SmartCalculator;
