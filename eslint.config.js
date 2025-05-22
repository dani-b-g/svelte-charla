import js from '@eslint/js';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';

export default [
  js.configs.recommended,
  ...svelte.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node // Assuming this might be useful for Vite/SvelteKit like setup down the line
      }
    }
  },
  {
    files: ['**/*.svelte'],
    languageOptions: {
      parserOptions: {
        // parser: svelteEslintParser, // svelte-eslint-parser is usually set by eslint-plugin-svelte itself
      }
    }
  },
  {
    rules: {
      // Add any custom rule overrides here if needed
      // e.g., 'svelte/rule-name': 'off'
    }
  },
  {
   ignores: ['dist/', 'node_modules/', 'public/build/'] // Ignoring common build/dependency folders
  }
];
