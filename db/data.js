import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "./config";

// Додавання даних в колекцію
export const writeDataToFirestore = async (data) => {
  try {
    const docRef = await addDoc(collection(db, "users"), data);
    console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e;
  }
};

// Отримання даних з колекції
export const getDataFromFirestore = async () => {
  try {
    const snapshot = await getDocs(collection(db, "users"));
    const data = snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }));
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// Оновлення даних в базі
export const updateDataInFirestore = async (collectionName, docId, newData) => {
  try {
    const ref = doc(db, collectionName, docId);
    await updateDoc(ref, newData);
    console.log("Document updated");
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// Інші функції для роботи з Firestore можуть бути додані сюди
