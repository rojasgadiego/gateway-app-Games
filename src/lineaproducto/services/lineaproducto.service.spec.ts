import { Test, TestingModule } from '@nestjs/testing';
import { LineaproductoService } from './lineaproducto.service';

describe('LineaproductoService', () => {
  let service: LineaproductoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LineaproductoService],
    }).compile();

    service = module.get<LineaproductoService>(LineaproductoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
