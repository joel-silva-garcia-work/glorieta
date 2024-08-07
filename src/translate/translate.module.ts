import { Module } from '@nestjs/common';
import { TranslationService } from './translate.service';

@Module({
  providers: [TranslationService],
  exports: [TranslationService],
})
export class TranslateModule {}
