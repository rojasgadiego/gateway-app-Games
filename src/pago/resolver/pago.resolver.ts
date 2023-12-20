import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { PagoService } from '../service/pago.service';
import { CreatePagoResponseDto } from '../dto/create-pago.response';
import { CreatePagoInput } from '../dto/create-pago.input';
import { ValidateTransaccionResponseDto } from '../dto/validate-pago.response';
import { ValidateTransaccionInput } from '../dto/validate-pago.input';

@Resolver()
export class PagoResolver {
  constructor(private readonly pagoService: PagoService) {}

  @Mutation(() => CreatePagoResponseDto)
  createPago(@Args('createPagoInput') createPagoInput: CreatePagoInput) {
    return this.pagoService.createPago(createPagoInput);
  }

  @Mutation(() => ValidateTransaccionResponseDto)
  validateTransaccion(
    @Args('validateTransaccionInput')
    validateTransaccionInput: ValidateTransaccionInput,
  ) {
    return this.pagoService.validateTransaccion(validateTransaccionInput);
  }
}
