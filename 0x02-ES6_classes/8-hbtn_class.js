export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // Method to cast the class instance to a Number
  valueOf() {
    return this._size;
  }

  // Method to cast the class instance to a String
  toString() {
    return this._location;
  }
}
