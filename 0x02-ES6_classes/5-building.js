export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() { //eslint-disable-line
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
