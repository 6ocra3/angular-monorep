import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'ui-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrl: './auth-form.component.scss',
})
export class UiAuthFormComponent {

    login: string = ""
    password: string = ""

    isSending = false;

    submit(){
        this.isSending = true
        setTimeout( () =>{
          this.isSending = false
          console.log(this.login, this.password)
        }, 2000 )

    }

}
