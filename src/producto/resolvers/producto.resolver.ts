import { Query, Resolver } from '@nestjs/graphql';
import { ProductoService } from '../services/producto.service';
import { ProductosResponseDto } from '../dtos/productos-response';

@Resolver()
export class ProductoResolver {
  constructor(private readonly productoService: ProductoService) {}

  @Query(() => ProductosResponseDto)
  getProductos() {
    return this.productoService.getProductos();
  }
}
