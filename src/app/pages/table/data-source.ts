import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { Product } from "../../models/product.models";
import { BehaviorSubject, Observable } from "rxjs";

export class DataSourceProduct extends DataSource<Product> {

  data = new BehaviorSubject<Product[]>([])
  originalData: Product[] = []

  override connect(collectionViewer: CollectionViewer): Observable<Product[]> {
    return this.data;
  }

  init(products: Product[]) {
    this.originalData = products;
    this.data.next(products);
  }

  override disconnect(collectionViewer: CollectionViewer) {
  }

  getTotal() {
    const products = this.data.getValue();
    return products
      .map(item => item.price)
      .reduce((price, total) => price + total, 0);
  }

  update(id: Product['id'], changes: Partial<Product>) {
    const products = this.data.getValue();
    const productIndex = products.findIndex(item => item.id === id);
    if (productIndex !== -1) {
      products[productIndex] = {
        ...products[productIndex],
        ...changes
      };

      this.data.next(products);
    }

  }

  find(query: string) {

    const newProducts = this.originalData.filter(item => item.title.toLowerCase().includes(query.toLowerCase()));
    this.data.next(newProducts);
  }

}
