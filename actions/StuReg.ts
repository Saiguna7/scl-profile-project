import * as z from "zod";
import { RegisterSchema } from "@/schemas";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@/firebase/clientApp";
import { collection, query, where, getDocs, doc, setDoc } from "firebase/firestore";

export const StuReg = async (values: any) => {
  try {
    const validatedFields = RegisterSchema.parse(values);
    const { email, password, name,confirmPassword } = validatedFields;

    // Check if the user already exists
    const userCollection = collection(db, "users");
    const userQuery = query(userCollection, where("email", "==", email));
    const existingUser = (await getDocs(userQuery)).size > 0;

    if (existingUser) {
      throw new Error("Email has been used!");
    }

    // Create the user
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const userId = userCredential.user.uid;
    const userRef = doc(collection(db, "users"), userId);
    await setDoc(userRef, {
      ...validatedFields,
    });


    return { success: "User created!" };
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message };
    } else {
      return { error: "An unknown error occurred" };
    }
  }
};
