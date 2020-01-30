class User {
  constructor(userData) {
    this._name = userData.name;
    this._gender = userData.gender;
    this._birth = userData.birth;
    this._country = userData.country;
    this._email = userData.email;
    this._password = userData.password;
    this._photo = userData.photo;
    this._admin = userData.admin;
    this._register = new Date();
  }

  get register() {
    return this._register;
  }

  get name() {
    return this._name;
  }

  get gender() {
    return this._gender;
  }

  get birth() {
    return this._birth;
  }

  get country() {
    return this._country;
  }

  get email() {
    return this._email;
  }

  get password() {
    return this._password;
  }

  get photo() {
    return this._photo;
  }

  get admin() {
    return this._admin;
  }

  set photo(value) {
    this._photo = value;
  }

}