import { Observable } from 'rxjs';

export const CARRITO_SERVICE_NAME = 'CarritoService';

export const CARRITO_PACKAGE_NAME = 'carrito';

export interface CarritoServiceClient {
  createCarrito(
    request: createCarritoRequest,
  ): Observable<createCarritoResponse>;
  findOne(request: findCarritoRequest): Observable<findCarritoResponse>;
  updateCarrito(
    request: UpdateCarritoRequest,
  ): Observable<UpdateCarritoResponse>;
}

export interface createCarritoRequest {
  idUser: number;
}

export interface Carrito {
  id: number;
  createAt: string;
  idUser: number;
  state: string;
}

export interface createCarritoResponse {
  status: number;
  error: string[];
  carrito: Carrito;
}

export interface findCarritoRequest {
  idUser: number;
}

export interface findCarritoResponse {
  status: number;
  error: string[];
  carrito: Carrito;
}

export interface UpdateCarritoRequest {
  id: number;
  state: string;
}

export interface UpdateCarritoResponse {
  status: number;
  error: string[];
  update: boolean;
}
