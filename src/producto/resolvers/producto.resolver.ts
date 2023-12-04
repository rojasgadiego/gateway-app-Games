import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductoService } from '../services/producto.service';
import { ProductosResponseDto } from '../dtos/productos-response';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { Post, UseGuards } from '@nestjs/common';
import { SeedProductResponse } from '../dtos/seedProducts.response';
import { SeedIngredienteResponse } from '../dtos/seedIngrediente.response';

@Resolver()
export class ProductoResolver {
  constructor(private readonly productoService: ProductoService) {}

  // @UseGuards(AuthGuard)
  @Query(() => ProductosResponseDto)
  getProductos() {
    return this.productoService.getProductos();
  }

  @Mutation(() => SeedProductResponse)
  seedProduct() {
    return this.productoService.seedProductos();
  }

  @Mutation(() => SeedIngredienteResponse)
  seedIngredientes() {
    return this.productoService.seedIngredientes();
  }
}
