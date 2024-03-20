import { Component, Input, Output } from '@angular/core';
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
    @Output() submitEvent = new EventEmitter<{login: string, password: string}>(); // Создание EventEmitter

    submit(){
        this.isSending = true
        this.submitEvent.emit({login: this.login, password: this.password});
        setTimeout( () =>{
          this.isSending = false
          console.log(this.login, this.password)
        }, 2000 )

    }

}
