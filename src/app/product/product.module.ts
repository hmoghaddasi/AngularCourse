import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { FormsModule } from '@angular/forms';
import { ProductRoutingModule } from './product-routing.module';



@NgModule({
  declarations: [ProductListComponent, ProductViewComponent],
  imports: [
    CommonModule,
    FormsModule,
    ProductRoutingModule
  ],
  exports:[
    ProductListComponent
  ]
})
export class ProductModule { }
