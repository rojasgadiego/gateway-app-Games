import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LineaproductoService } from '../services/lineaproducto.service';
import { CreateLineaProductoResponseDto } from '../dto/create-lineaproducto.response';
import { CreateLineaProductoInput } from '../dto/create-lineaproducto';
import { getProductoByIdCarritoInput } from '../dto/getproductoByCarrito';
import { getProductoByIdCarritoResponse } from '../dto/getproductoByCarrito.response';
import { vaciarCarritoResponse } from '../dto/vaciarCarrito.response';
import { vaciarCarritoRequest } from '../dto/vaciarCarrito.input';
import { getLineaProductoByIdCarritoResponse } from '../dto/getLineaProductoByCarrito';
import { deleteLineaProductoResponse } from '../dto/deleteLineaProducto.response';
import { deleteLineaProductoRequest } from '../dto/delete-lineaproducto.input';
import { updateLineaProductoResponse } from '../dto/update-lineaproducto.entity';
import { updateLineaProductoRequest } from '../dto/update-lineaproducto.input';

@Resolver()
export class LineaproductoResolver {
  constructor(private readonly lineaproductoService: LineaproductoService) {}

  @Mutation(() => CreateLineaProductoResponseDto)
  crearLineaProducto(
    @Args('createLineaProductoInput')
    createLineaProductoInput: CreateLineaProductoInput,
  ) {
    return this.lineaproductoService.createLineaProducto(
      createLineaProductoInput,
    );
  }

  @Query(() => getProductoByIdCarritoResponse)
  getProductoByIdCarrito(
    @Args('getProductoByIdCarritoInput')
    getProductoByIdCarrito: getProductoByIdCarritoInput,
  ) {
    return this.lineaproductoService.getProductosByIdCarrito(
      getProductoByIdCarrito,
    );
  }

  @Mutation(() => vaciarCarritoResponse)
  vaciarCarrito(
    @Args('vaciarCarritoInput')
    vaciarCarritoInput: vaciarCarritoRequest,
  ) {
    return this.lineaproductoService.vaciarCarrito(vaciarCarritoInput);
  }

  @Query(() => getLineaProductoByIdCarritoResponse)
  getLineaProductoByIdCarrito(
    @Args('getLineaProductoByIdCarritoInput')
    getProductoByIdCarrito: getProductoByIdCarritoInput,
  ) {
    return this.lineaproductoService.getLineaProductosByIdCarrito(
      getProductoByIdCarrito,
    );
  }

  @Mutation(() => updateLineaProductoResponse)
  updateLineaProducto(
    @Args('updatelineaProductoIdInput')
    updateLineaProducto: updateLineaProductoRequest,
  ) {
    return this.lineaproductoService.updateLineaProducto(updateLineaProducto);
  }

  @Mutation(() => deleteLineaProductoResponse)
  removeLineaProducto(
    @Args('lineaProductoIdInput')
    deleteLineaProducto: deleteLineaProductoRequest,
  ) {
    return this.lineaproductoService.deleteLineaProducto(deleteLineaProducto);
  }
}
