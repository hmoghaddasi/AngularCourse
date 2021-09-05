import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../shared/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  list:ProductModel[]=[];
  model:ProductModel=new ProductModel();
  constructor() { }

  ngOnInit() {
  }
  addToList(){
    this.list.push(this.model)
    this.model=new ProductModel();
  }
  saveToDataBase(){
    
  }
}
