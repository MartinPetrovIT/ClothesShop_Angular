import { Component, Output, EventEmitter, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-dress-create',
  templateUrl: './dress-create.component.html',
  styleUrls: ['./dress-create.component.scss']
})
export class DressCreateComponent implements OnInit {
  constructor(
  )
  {

  }
  tiles = [
   {
    text:"dsada"
    ,color:'red',
    rows:2
    ,cols : 2
   },
   {
    text:"dsada"
    ,color:'red',
    rows:2
    ,cols : 2
   },
   {
    text:"dsada" ,
    color:'red',
    rows:2
    ,cols : 2
   },
  ];

  ngOnInit(): void {
    console.log('vafsafasfa')
  }
  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
    repassword: new FormControl(''),
    
  });

  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
    }
  }
// @Input() error: string | null;

  @Output() submitEM = new EventEmitter();
}