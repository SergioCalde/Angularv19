import { Component, inject, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';

import { PaginationService } from '@shared/services/pagination';
import { ProductsService } from '@products/services/products';

import { Pagination } from "@shared/components/pagination/pagination";
import { ProductTable } from "@products/components/product-table/product-table";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products-admin-page',
  imports: [ProductTable, Pagination, RouterLink],
  templateUrl: './products-admin-page.html',
})
export class ProductsAdminPage { 

  private productsService = inject(ProductsService);

  paginationService = inject(PaginationService);

  productsPerPage = signal(10);

  productsResource = rxResource({
    params: () => ({ 
      page: this.paginationService.currentPage() - 1 ,
      limit: this.productsPerPage()
    }),
    stream: ({ params }) => {
      return this.productsService.getProducts({
        limit: params.limit,
        offset: params.page * params.limit,
      });
    }
  });



}
