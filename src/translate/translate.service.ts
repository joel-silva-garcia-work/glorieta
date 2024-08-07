// translation.service.ts

import { Injectable } from '@nestjs/common';
import { translationMessages } from './translation-messages';

@Injectable()
export class TranslationService {
  translate(key: string, lang: 'en' | 'es'): string {
    const message = translationMessages[key];
    if (!message) {
      return `Translation not found for key: ${key}`;
    }
    return message[lang];
  }
}
