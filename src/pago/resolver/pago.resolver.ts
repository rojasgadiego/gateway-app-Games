import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { PagoService } from '../service/pago.service';
import { CreatePagoResponseDto } from '../dto/create-pago.response';
import { CreatePagoInput } from '../dto/create-pago.input';

@Resolver()
export class PagoResolver {
  constructor(private readonly pagoService: PagoService) {}

  @Mutation(() => CreatePagoResponseDto)
  createPago(@Args('createPagoInput') createPagoInput: CreatePagoInput) {
    return this.pagoService.createPago(createPagoInput);
  }
}
