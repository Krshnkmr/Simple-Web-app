import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactusValidationService {

  constructor() { }
  authenticate(firstname,lastname,email)
  {
    console.log('before checking ' + firstname,lastname,email);
    // if you want to check value not equal to null means use this below method
    if((firstname !== '') && (lastname !== '') && (email !== ''))
    {
      console.log('after enter the details '+ firstname,lastname,email);
      sessionStorage.setItem('Username',firstname);
      sessionStorage.setItem('Useremail',email);
      return true;
    }
    return false;
  }
  refresh()
  {
    sessionStorage.removeItem('Username');
    sessionStorage.removeItem('Useremail');
  }

}
