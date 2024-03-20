import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'auth-page',
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.scss',
})
export class AuthPageComponent {

    constructor(private authService: AuthService,
        private router: Router){

    }

    async authSubmit(login: string, password: string){
        console.log(1)
        setTimeout(() => {
            if(login == "admin" && password=="admin"){
                this.authService.login()
                this.router.navigate(["/"])
            }
        }, 1500)
    }

}
