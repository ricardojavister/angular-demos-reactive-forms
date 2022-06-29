import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Record } from 'src/app/model/record';

@Component({
  selector: 'app-create-fruits',
  templateUrl: './create-fruits.component.html',
  styleUrls: ['./create-fruits.component.scss'],
})
export class CreateFruitsComponent implements OnInit {
  title!: string;
  form!: FormGroup;
  fruit!: Record;

  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
      price: new FormControl(0, [Validators.required]),
    });
  }

  onSubmit(): void {
    console.log(this.form);
  }
}
