import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-money',
  templateUrl: './add-money.component.html',
  styleUrls: ['./add-money.component.scss']
})
export class AddMoneyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  money = new FormControl('', [Validators.required, Validators.maxLength(15)]);

}











