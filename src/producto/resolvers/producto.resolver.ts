import { Query, Resolver } from '@nestjs/graphql';
import { ProductoService } from '../services/producto.service';
import { ProductosResponseDto } from '../dtos/productos-response';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { UseGuards } from '@nestjs/common';

@Resolver()
export class ProductoResolver {
  constructor(private readonly productoService: ProductoService) {}

  // @UseGuards(AuthGuard)
  @Query(() => ProductosResponseDto)
  getProductos() {
    return this.productoService.getProductos();
  }
}
