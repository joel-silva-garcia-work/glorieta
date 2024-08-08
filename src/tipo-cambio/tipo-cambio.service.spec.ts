import { Test, TestingModule } from '@nestjs/testing';
import { TipoCambioService } from './tipo-cambio.service';

describe('TipoCambioService', () => {
  let service: TipoCambioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoCambioService],
    }).compile();

    service = module.get<TipoCambioService>(TipoCambioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
