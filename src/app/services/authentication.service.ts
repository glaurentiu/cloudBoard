import { Injectable } from "@angular/core";
import { Auth } from "@angular/fire/auth";
import { signInWithEmailAndPassword, User } from "firebase/auth";
import { from } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  get isLoggedIn(): User | null {
    return this.auth.currentUser;
  }

  constructor(private auth: Auth) {}

  login(username: string, password: string) {
    return from(signInWithEmailAndPassword(this.auth, username, password));
  }

  logout() {
    return from(this.auth.signOut());
  }
}
