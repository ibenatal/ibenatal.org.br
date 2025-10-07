// ESLint flat config for Next.js + TypeScript + Prettier
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import unicorn from 'eslint-plugin-unicorn';
import pluginUnused from 'eslint-plugin-unused-imports';
import tseslint from 'typescript-eslint';

const compat = new FlatCompat({ baseDirectory: import.meta.dirname });

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: [
      '.next/**',
      'node_modules/**',
      'dist/**',
      'out/**',
      'eslint.config.mjs',
      'next-env.d.ts',
      'tailwind.config.js',
      'postcss.config.mjs',
      'pnpm-lock.yaml',
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  // Next.js recommended + typescript rules (via compat), per docs
  ...compat.config({ extends: ['plugin:@next/next/recommended'] }),
  // Unicorn recommended rules
  {
    plugins: { unicorn },
    rules: {
      ...unicorn.configs.recommended.rules,
      // Relax highly opinionated rules for this codebase
      'unicorn/filename-case': 'off',
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/no-null': 'off',
      'unicorn/prefer-global-this': 'off',
      'unicorn/no-array-sort': 'off',
      'unicorn/no-array-callback-reference': 'off',
      'unicorn/no-await-expression-member': 'off',
      'unicorn/prefer-at': 'off',
      'unicorn/prefer-number-properties': 'off',
      'unicorn/catch-error-name': 'off',
      'unicorn/no-negated-condition': 'off',
    },
  },
  {
    plugins: {
      'unused-imports': pluginUnused,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'warn',
      'unused-imports/no-unused-vars': [
        'warn',
        { vars: 'all', args: 'after-used', argsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/require-await': 'off',
      '@typescript-eslint/triple-slash-reference': 'off',
    },
  },
  prettier,
];
