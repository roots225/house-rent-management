export default class Agency {
  constructor(name, phone, email, address, id = null) {
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.address = address;
    this.id = id;
  }

  static fromJson(json) {
    return new Agency(json.name, json.phone, json.email, json.address, json.id);
  }

  toJson() {
    return {
      name: this.name,
      phone: this.phone,
      email: this.email,
      address: this.address,
    }
  }
}