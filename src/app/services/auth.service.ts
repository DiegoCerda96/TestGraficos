import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Observable<firebase.User>;
  credential: Observable<firebase.UserInfo>;
  authState: any = null;

  constructor(private afAuth: AngularFireAuth, ) {
    this.user = afAuth.authState;
  }

  signup(email: string, password: string): any {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        // this.SendVerificationMail();
      })
      .catch((error) => {
        // console.log('Error: ' + error)
      })

  }

  SendVerificationMail() {
    return this.afAuth.auth.currentUser.sendEmailVerification()
      .then(() => {
        // this.router.navigate(['verify-email-address']);
      })
  }

  login(email: string, password: string): Promise<any> {
    if (email === 'zetta.controlacceso@gmail.com' ) {
      this.afAuth.auth.setPersistence('session')
      return this.afAuth.auth.signInWithEmailAndPassword(email, password);
    } else {
      return this.afAuth.auth.signInWithEmailAndPassword('email@email.com', 'passwordFalse' );
    }
  }

  forgot(email: string): any {
    return this.afAuth.auth.sendPasswordResetEmail(email);
  }

  logout() {
    return this.afAuth.auth.signOut();
  }

  tokens() {
    return this.afAuth.auth.currentUser.getIdToken();
  }


}
