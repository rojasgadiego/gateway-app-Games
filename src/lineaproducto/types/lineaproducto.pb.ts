import { Observable } from 'rxjs';

export const LINEAPRODUCTO_SERVICE_NAME = 'LineaproductoService';

export const LINEAPRODUCTO_PACKAGE_NAME = 'lineaproducto';

export interface LineaproductoServiceClient {
  createLineaproducto(
    request: createLineaproductoRequest,
  ): Observable<createLineaproductoResponse>;
  getProductosByIdCarrito(
    GetProductosRequest,
  ): Observable<GetProductosResponse>;
  vaciarCarrito(vaciarCarritoRequest): Observable<vaciarCarritoResponse>;
  getLineaProductoByIdCarrito(
    GetLineaProductosRequest,
  ): Observable<GetLineaProductosResponse>;
}

export interface createLineaproductoRequest {
  idcarrito: number;
  idProducto: number;
  cant: number;
  subprice: number;
}

export interface Lineaproducto {
  id: number;
  idcarrito: number;
  idProducto: number;
  cant: number;
  subprice: number;
}

export interface createLineaproductoResponse {
  status: number;
  error: string[];
  lineaproducto: Lineaproducto;
}

//find producto by Id
export interface GetProductosRequest {
  id: number;
}

export interface Ingrediente {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  state: string;
}

export interface Producto {
  id: number;
  name: string;
  description: string;
  price: number;
  rank: number;
  stock: number;
  state: string;
  image: string;
  ingredients: Ingrediente;
}

export interface GetProductosResponse {
  status: number;
  error: string[];
  productos: Producto[];
}

export interface vaciarCarritoRequest {
  id: number;
}

export interface vaciarCarritoResponse {
  status: number;
  error: string[];
  deleted: boolean;
}

//find producto by Id
export interface GetLineaProductosRequest {
  id: number;
}

export interface GetLineaProductosResponse {
  status: number;
  error: string[];
  lp: lineaproductoi[];
}

export class lineaproductoi {
  id: number;
  cant: number;
  subprice: number;
  idcarrito: number;
  producto: Producto;
}
