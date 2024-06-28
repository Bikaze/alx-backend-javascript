import Car from './10-car.js'; //eslint-disable-line

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() { //eslint-disable-line
    return new Car();
  }
}

export default EVCar;
