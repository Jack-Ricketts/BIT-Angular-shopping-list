import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from './services/product.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  constructor(private productService:ProductService) { 
    this.productService.load();
  }

  title = 'prekes';
}