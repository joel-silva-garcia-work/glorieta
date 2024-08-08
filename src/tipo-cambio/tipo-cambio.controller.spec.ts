import { Test, TestingModule } from '@nestjs/testing';
import { TipoCambioController } from './tipo-cambio.controller';
import { TipoCambioService } from './tipo-cambio.service';

describe('TipoCambioController', () => {
  let controller: TipoCambioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoCambioController],
      providers: [TipoCambioService],
    }).compile();

    controller = module.get<TipoCambioController>(TipoCambioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
