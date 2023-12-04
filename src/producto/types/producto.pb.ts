import { Observable } from 'rxjs';

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

export interface Ingrediente {
  id: number;
  name: string;
  description: string;
  price: number;
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
  ingredientes: Ingrediente[];
}

export interface productosResponse {
  status: number;
  error: string[];
  data: Producto[] | undefined;
}

export interface Empty {}

export interface ProductosServiceClient {
  getProductos(Empty): Observable<productosResponse>;
}

export const PRODUCTOS_SERVICE_NAME = 'ProductoService';

export const PRODUCTOS_PACKAGE_NAME = 'productos';
