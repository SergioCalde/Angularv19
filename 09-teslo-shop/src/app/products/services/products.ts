import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Gender, Product, ProductsResponse } from '@products/interfaces/product-response.interface';
import { delay, Observable, of, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { User } from '@auth/interfaces/user.interface';

const baseUrl = environment.baseUrl;

interface Options {
    limit?: number;
    offset?: number;
    gender?: string;
}

const emptyProduct: Product = {
    id: 'new',
    title: '',
    price: 0,
    description: '',
    slug: '',
    stock: 0,
    sizes: [],
    gender: Gender.Men,
    tags: [],
    images: [],
    user: {} as User
};

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

    getProductById(id: string): Observable<Product> {

        if( id === 'new' ) {
            return of(emptyProduct);
        }

        if ( this.productCache.has(id) ) {
            return of(this.productCache.get(id)!);
        }

        return this.http.get<Product>(`${baseUrl}/products/${id}`)
            .pipe(
                // tap( (resp) => console.log(resp)),
                tap( (product) => {
                    this.productCache.set(id, product);
                })
            );
    }

    updateProduct(id: string, productLike: Partial<Product>): Observable<Product> {
        return this.http.patch<Product>(`${ baseUrl }/products/${ id }`, productLike)
            .pipe(
                tap(( product ) => this.updateProductCache( product ))
            )
    }

    createProduct(productLike: Partial<Product>): Observable<Product> {
        return this.http.post<Product>(`${ baseUrl }/products`, productLike)
            .pipe(tap(( product ) => this.updateProductCache( product, true )));
    }

    updateProductCache(product: Product, isNew = false){
        const productId = product.id;

        this.productCache.set(productId, product);

        if( isNew ) return;

        this.productsCache.forEach( productResponse => {
            productResponse.products = productResponse.products.map( (currentProduct) => {
                return currentProduct.id === productId ? product : currentProduct;
            })
        });
    }

    
}