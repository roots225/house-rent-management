import { collection, addDoc } from "firebase/firestore";

export default class AgencyUsecases {
  constructor(db) {
    this.db = db;
  }

  async add(model) {
    try {
      const docRef = await addDoc(collection(this.db, "agencies"), model.toJson());
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }    
  }
}