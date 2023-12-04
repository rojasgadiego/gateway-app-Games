import { Test, TestingModule } from '@nestjs/testing';
import { LineaproductoResolver } from './lineaproducto.resolver';
import { LineaproductoService } from '../services/lineaproducto.service';

describe('LineaproductoResolver', () => {
  let resolver: LineaproductoResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LineaproductoResolver, LineaproductoService],
    }).compile();

    resolver = module.get<LineaproductoResolver>(LineaproductoResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
