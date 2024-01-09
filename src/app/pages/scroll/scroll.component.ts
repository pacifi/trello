import { Component, inject } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport } from "@angular/cdk/scrolling";

interface Product {
  id: string,
  title: string;
  price: number
  images: string[]
}

@Component({
  selector: 'app-scroll',
  standalone: true,
  imports: [
    NavbarComponent, HttpClientModule, CdkVirtualScrollViewport, CdkFixedSizeVirtualScroll, CdkVirtualForOf
  ],
  templateUrl: './scroll.component.html'
})
export class ScrollComponent {

  private http: HttpClient = inject(HttpClient);
  products: Product[] = [];

  ngOnInit(): void {
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe(data => {
        this.products = data;
      })
  }

  protected readonly onabort = onabort;
}
