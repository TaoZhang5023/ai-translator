import { TranslateBody } from '@/types/types';
import { OpenAIStream } from '@/utils';

export const config = {
  runtime: 'edge',
};

const handler = async (req: Request): Promise<Response> => {
  try {
    const { inputLanguage, outputLanguage, inputCode, tone } =
      (await req.json()) as TranslateBody;
    const apiKey = process.env.GPT_KEY || 'your_default_api_key';
    const stream = await OpenAIStream(
      inputLanguage,
      outputLanguage,
      inputCode,
      tone,
      apiKey,
    );

    return new Response(stream);
  } catch (error) {
    console.error(error);
    return new Response('Error', { status: 500 });
  }
};

export default handler;
