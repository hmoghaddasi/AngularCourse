import { Component, Input, OnInit } from '@angular/core';
import { PersonModel } from '../person.model';

@Component({
  selector: 'app-test-input',
  templateUrl: './test-input.component.html',
  styleUrls: ['./test-input.component.css']
})
export class TestInputComponent implements OnInit {
  model: PersonModel=new PersonModel();
  list:PersonModel[]=[];
  @Input() title: string;
  constructor() { }

  ngOnInit() {
  }
  showMessage(){
    alert('Hi ' + this.model.firstName+' '+this.model.lastName)
  }
  addToArray(){
    this.list.push(this.model);
    this.model=new PersonModel();
  }
}
