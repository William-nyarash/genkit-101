import { googleAI } from '@genkit-ai/google-genai';
import { genkit } from 'genkit';
import 'dotenv/config';

// Initialize Genkit with Google AI
const ai = genkit({
  plugins: [googleAI()],
});

async function basicGeneration() {
  try {
    // Simple text generation
    const response = await ai.generate({
      model:googleAI.model('gemini-2.0-flash'),
      prompt: 'Write a short welcome message for a new team member joining our development team.',
    });

    console.log('Generated message:');
    console.log(response.text);
  } catch (error) {
    console.error('Error generating content:', error);
  }
}

// Run the example
basicGeneration();