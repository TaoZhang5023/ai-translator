export enum Tone {
  Professional = 'professional',
  Casual = 'casual',
  Academic = 'academic',
  Formal = 'formal'
}

export interface TranslateBody {
  inputLanguage: string;
  outputLanguage: string;
  inputCode: string;
  tone: Tone;
}

export interface TranslateResponse {
  code: string;
}
