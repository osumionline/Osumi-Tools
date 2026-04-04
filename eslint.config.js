import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig(
	{
		ignores: ['lib/**', 'docs/**', 'node_modules/**']
	},
	eslint.configs.recommended,
	tseslint.configs.recommended,
	{
		files: ['src/**/*.ts', '**/__tests__/**/*.ts', 'vitest.config.ts'],
		rules: {
			'no-console': 'off'
		}
	}
);