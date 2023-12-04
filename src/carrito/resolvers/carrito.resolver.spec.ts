import { Test, TestingModule } from '@nestjs/testing';
import { CarritoResolver } from './carrito.resolver';
import { CarritoService } from '../services/carrito.service';

describe('CarritoResolver', () => {
  let resolver: CarritoResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarritoResolver, CarritoService],
    }).compile();

    resolver = module.get<CarritoResolver>(CarritoResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
