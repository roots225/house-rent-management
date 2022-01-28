export default class User {
  constructor(id, fullName, email, type = 'google') {
    this.fullName = fullName
    this.type = type
    this.id = id
    this.email = email
  }

  static fromJson(json) {
    return new User(
      json.id, json.fullName, json.email, json.type
    )
  }
}

