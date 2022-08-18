import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 username: string =""
 password: string =""
 cpassword: string =""

  constructor(private router: Router,
    public afAuth: AngularFireAuth) {}


  async register(){
    const {username,password,cpassword}= this
    if(password !=cpassword){
       return console.log("contraseña distinta")
     }
     try{
      const res = await this.afAuth.createUserWithEmailAndPassword(username + '@gmail.com',password);
      console.log(res)

     }catch(error){
      console.dir(error)
         
     }
  } 
  



}
