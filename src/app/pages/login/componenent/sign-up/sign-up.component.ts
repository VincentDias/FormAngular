import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Model/user';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor() { }

  model: User = new User();

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.model);

  }

}
