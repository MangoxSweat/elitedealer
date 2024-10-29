import js from '@eslint/js';
import svelte from 'eslint-plugin-svelte';
import prettier from 'eslint-config-prettier';
import globals from 'globals';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
	js.configs.recommended,
	// Configure svelte
	{
		...svelte.configs['flat/recommended'],
		files: ['**/*.svelte', '**/*.js'] // Target svelte and js files only
	},
	// Apply Prettier for consistent formatting
	prettier,
	svelte.configs['flat/prettier'],
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			}
		},
		rules: {
			// You can disable specific TypeScript-based rules here if needed
			// For example, turn off TypeScript-specific errors that are showing up
			'@typescript-eslint/no-unused-vars': 'off',
			'no-undef': 'off' // Adjust based on the errors you're seeing
		}
	},
	{
		ignores: ['build/', '.svelte-kit/', 'dist/']
	}
];
