import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {

  constructor(private productService:ProductService, private router:Router) { }

  ngOnInit(): void {
  }

  public addNewProduct(name:HTMLInputElement, count:HTMLInputElement){
    if (name.value!=''){
      this.productService.add(name.value,count.valueAsNumber);
      name.value='';
      count.value='';
      this.router.navigate(['/']);

    }
  }
}