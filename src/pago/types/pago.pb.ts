import { Observable } from 'rxjs';

export const PAGO_SERVICE_NAME = 'PagoService';

export const PAGO_PACKAGE_NAME = 'pago';

export interface PagoServiceClient {
  createPago(request: createPagoRequest): Observable<createPagoResponse>;
}

export interface createPagoRequest {
  amount: number;
}

export interface createPagoResponse {
  status: number;
  error: string[];
  token: string;
  url: string;
}
