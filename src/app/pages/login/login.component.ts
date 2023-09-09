
import { AuthService } from '../../services/auth/auth.service';
import { Validators } from '@angular/forms';
import { from } from 'rxjs';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormControl  , FormGroup} from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private Auth_service: AuthService , private _Router : Router) {}




  login_form: FormGroup = new FormGroup({

    email : new FormControl(null ,[Validators.required ]),

    password: new FormControl(null ,[Validators.required ]),

  })



  handelLogin(login_form:FormGroup){

    if(login_form.valid){
      this.Auth_service.login(login_form.value).subscribe({
        next: (response) =>
        {
          localStorage.setItem( 'userToken' ,  response.token);
          this.Auth_service.decodeUserData();

            this._Router.navigate(['/about'])

        },
        error: (err) => console.log(err)
      });
    }


      // console.log(AddCategoryForm.value);

    }

}
