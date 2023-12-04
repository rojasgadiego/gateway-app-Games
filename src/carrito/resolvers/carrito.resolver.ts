import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CarritoService } from '../services/carrito.service';
import { CreateCarritoInput } from '../dto/create-carrito.input';
import { CreateCarritoResponseDto } from '../dto/create-carrito.response';

@Resolver()
export class CarritoResolver {
  constructor(private readonly carritoService: CarritoService) {}

  @Mutation(() => CreateCarritoResponseDto)
  createCarrito(
    @Args('createCarritoInput') createCarritoInput: CreateCarritoInput,
  ) {
    return this.carritoService.createCarrito(createCarritoInput);
  }
}
