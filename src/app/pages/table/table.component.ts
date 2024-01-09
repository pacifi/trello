import { Component, inject } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Product } from "../../models/product.models";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { CdkTableModule } from "@angular/cdk/table";
import { NgClass } from "@angular/common";
import { DataSourceProduct } from "./data-source";
import { BtnComponent } from "../../components/btn/btn.component";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { debounceTime } from "rxjs";

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [HttpClientModule, NavbarComponent, CdkTableModule, NgClass, BtnComponent, ReactiveFormsModule],
  templateUrl: './table.component.html'
})
export class TableComponent {
  private http: HttpClient = inject(HttpClient);
  input = new FormControl('', {nonNullable: true})
  products = new DataSourceProduct();
  total = 0;
  columns: string[] = [
    'N.', 'Name', 'Price', 'Cover', 'Actions'
  ]

  ngOnInit(): void {
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe(data => {
        this.products.init(data);
        this.total = this.products.getTotal();
      });
    this.input.valueChanges
      .pipe(
        debounceTime(500)
      )
      .subscribe(value => {
        this.products.find(value);
      });
  }

  update(product: Product) {
    this.products.update(product.id, {price: 20});
  }


}
