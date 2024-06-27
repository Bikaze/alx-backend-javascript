export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (this.constructor !== Building
        && this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() { //eslint-disable-line
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
