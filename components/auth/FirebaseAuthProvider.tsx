"use client"
import { signInWithCustomToken } from 'firebase/auth';
import { useSession } from 'next-auth/react';
import React, { useEffect } from 'react'
import {auth} from "@/firebase/clientApp"
import { Session } from 'next-auth'
async function syncFirebaseAuth(session:Session){
    if(session&& session.firebaseToken){
        try{
            await signInWithCustomToken(auth,session.firebaseToken);
        }catch(error) {
            console.error("Error signing in with custom token:",error);
        }
    }else{
        auth.signOut()
    }
}
export default function FirebaseAuthProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const {data: session}=useSession();
   
    useEffect(()=>{
if(!session) return;
syncFirebaseAuth(session);
    },[session])
  return<> {children}</>
}
