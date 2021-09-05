import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  productId: any;

  constructor(    
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {    
    this.productId = this.route.snapshot.paramMap.get('id');
  }

}
