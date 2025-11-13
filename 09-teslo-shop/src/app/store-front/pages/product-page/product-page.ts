import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '@products/services/products';
import { of } from 'rxjs';
import { ProductCarousel } from "@products/components/product-carousel/product-carousel";

@Component({
  selector: 'app-product-page',
  imports: [ProductCarousel],
  templateUrl: './product-page.html',
})
export class ProductPage { 

  activatedRoute = inject(ActivatedRoute);
  private productsService = inject(ProductsService);
  productIdSlug = this.activatedRoute.snapshot.params["idSlug"];


  
  productsResource = rxResource({
      params: () => ({ idSlug: this.productIdSlug}),
      stream: ({ params }) => {
        // if (!params.idSlug) return of(null);

        return this.productsService.getProductByIdSlug(params.idSlug);
      },
  });



}
