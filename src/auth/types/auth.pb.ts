import { Observable } from 'rxjs';

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

export interface RegisterResponse {
  status: number;
  error: string[];
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  status: number;
  error: string[];
  token: string;
  idUser: number;
}

export interface ValidateRequest {
  token: string;
}

export interface ValidateResponse {
  status: number;
  error: string[];
  userId: number;
}

export interface findUserRequest {
  id: number;
}

export interface User {
  id: number;
  nombre: string;
  email: string;
}

export interface findUserResponse {
  status: number;
  error: string[];
  user: User;
}

// message findUserResponse {
//   int32 status = 1;
//   repeated string error = 2;
//   User user = 3;
// }

export interface AuthServiceClient {
  register(request: RegisterRequest): Observable<RegisterResponse>;

  login(request: LoginRequest): Observable<LoginResponse>;

  validate(request: ValidateRequest): Observable<ValidateResponse>;

  findUserById(request: findUserRequest): Observable<findUserResponse>;

  // rpc findUserById (findUserRequest) returns (findUserResponse) {}
}

export const AUTH_SERVICE_NAME = 'AuthService';

export const AUTH_PACKAGE_NAME = 'auth';
