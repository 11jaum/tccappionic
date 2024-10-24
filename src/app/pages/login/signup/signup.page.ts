import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  signupForm: FormGroup;
  isTypePassword: boolean = true;
  isLoading: boolean = false;
  global: any;

  constructor(
    private router : Router,
    private authService : AuthService,
    private alertController : AlertController
  ) { 
    this.initForm();
  }

  ngOnInit() {
  }

  //formulario para cadastro
  initForm() {
    this.signupForm = new FormGroup ({
      username: new FormControl('',
        {validators: [Validators.required]}
      ),
      email : new FormControl('',
      {validators: [Validators.required, Validators.email]}
      ),
      password: new FormControl('',
        {validators: [Validators.required, Validators.minLength(8)]}
      )
    });
    }

    // mudar icone da senha
    onChange() {
      this.isTypePassword = !this.isTypePassword;
    }

    // cadastrar botao
    onSubmit() {
      if(!this.signupForm.valid) return;
      console.log(this.signupForm.value);
      this.register(this.signupForm);
    }

    register(form) {
      //this.global.showLoader();
      this.isLoading = true;
      console.log(form.value);
      this.authService.register(form.value).then((data: any) => {
        console.log(data);
        this.router.navigateByUrl('/home');
        //this.global.hideLoader();
        this.isLoading = false;
        form.reset();
      })
      .catch (e => {
        console.log(e);
        //this.global.hideLoader();
        let msg: string = 'Could not sign you up, please try again.';
        if(e.code == 'auth/email-already-in-use') {
          msg = e.message;
        }
        this.showAlert (msg);
        });
      }

    async showAlert(msg) {
    const alert = await this.alertController.create({
      header: 'Alert',
      // subHeader: 'A Sub Header Is Optional',
      message: msg,
      buttons: ['Ok'],
    });

    await alert.present();
  }

}