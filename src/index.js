class SmartCalculator {
  constructor(initialValue) {
    this.storage = [initialValue];
    this.powersArr = [];
  }

  add(number) {
    this.storage.push('+');
    this.storage.push(number);
    this.powersArr = [];
    this.result = this.storage.join('');
    return this;
  }
  
  subtract(number) {
    this.storage.push('-');
    this.storage.push(number);
    this.powersArr = [];
    this.result = this.storage.join('');
    return this;
  }

  multiply(number) {
    this.storage.push('*');
    this.storage.push(number);
    this.powersArr = [];
    this.result = this.storage.join('');
    return this;
  }

  devide(number) {
    this.storage.push('/');
    this.storage.push(number);
    this.powersArr = [];
    this.result = this.storage.join('');
    return this;
  }

  pow(number) {
      this.base = this.storage[this.storage.length - 1]; 
      if (this.powersArr.length === 0) {
        this.powersArr.push(this.base); 
        this.powersArr.push(number);
      } else {
       number = Math.pow(this.powersArr[1], number); 
       this.base = this.powersArr[0]; 
       this.powersArr[1] = number; 
      } 
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
