import { Injectable } from '@angular/core';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: AngularFireAuth) { }

  public uid: string = ""

  AuthLogin(){
    return this.auth.signInWithPopup(
      new GoogleAuthProvider()
    ).then(
      result => {
        console.log("Sikeresen beléptél!");
        if(result.user?.uid)this.uid = result.user?.uid
      }
    ).catch(
      error => {
        console.log("Hiba történt: " + error);
      }
    )
  }
}
