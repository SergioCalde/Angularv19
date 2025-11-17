import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product, ProductsResponse } from '@products/interfaces/product-response.interface';
import { delay, Observable, of, tap } from 'rxjs';
import { environment } from '../../../environments/environment';

const baseUrl = environment.baseUrl;

interface Options {
    limit?: number;
    offset?: number;
    gender?: string;
}


@Injectable({providedIn: 'root'})
export class ProductsService {

    private productsCache = new Map<string, ProductsResponse>();
    private productCache = new Map<string, Product>();
    
    private http = inject(HttpClient);

    getProducts(options: Options): Observable<ProductsResponse> {

        const { limit = 9, offset = 0, gender = '' } = options;

        const key = `${limit}-${offset}-${gender}`;

        if ( this.productsCache.has(key) ) {
            return of(this.productsCache.get(key)!);
        }

        return this.http.get<ProductsResponse>(`${baseUrl}/products`, {
            params: {limit, offset, gender}})
            .pipe(tap( (resp) => {
                this.productsCache.set(key, resp);
            }));
            // .pipe(tap(response => console.log(response)));
    }

    getProductByIdSlug(idSlug: string): Observable<Product> {

        if ( this.productCache.has(idSlug) ) {
            return of(this.productCache.get(idSlug)!);
        }

        return this.http.get<Product>(`${baseUrl}/products/${idSlug}`)
            .pipe(
                // tap( (resp) => console.log(resp)),
                tap( (product) => {
                    this.productCache.set(idSlug, product);
                })
            );
    }

    
}