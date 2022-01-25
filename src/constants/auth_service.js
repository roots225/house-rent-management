export default class AuthSdrvice {
    static isLoggedIn() {
      return localStorage.getItem('user') !== null;
    }
  
    static getUser() {
      let user = localStorage.getItem('user')
      if (user === undefined || user === null) return null
      return JSON.parse(user)
    }
  
    /**
     * Sauvegarde le user connecté actuellement
     * @param {UserImpl|null} user 
     * @param {string} token 
     */
    static saveUser(user, token) {
      localStorage.setItem('user', JSON.stringify(user))
      localStorage.setItem('token', token)
    }
  
    /**
     * On déconnecte le user actuellement connecté
     */
    static deleteUser() {
      localStorage.deleteItem('user')
    }
  }