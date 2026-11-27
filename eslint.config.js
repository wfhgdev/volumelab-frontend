import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

function restrictLayers(files, groups, message) {
  return {
    files,
    rules: {
      'no-restricted-imports': ['error', { patterns: [{ group: groups, message }] }],
    },
  }
}

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
    },
  },
  restrictLayers(
    ['src/components/atoms/**/*.{ts,tsx}'],
    ['**/molecules/**', '**/organisms/**', '**/templates/**', '**/pages/**', '**/hooks/**', '**/services/**'],
    'Un atom no puede importar molecules, organisms, templates, pages, hooks ni services.',
  ),
  restrictLayers(
    ['src/components/molecules/**/*.{ts,tsx}'],
    ['**/organisms/**', '**/templates/**', '**/pages/**', '**/hooks/**', '**/services/**'],
    'Una molecule solo puede importar atoms.',
  ),
  restrictLayers(
    ['src/components/organisms/**/*.{ts,tsx}'],
    ['**/templates/**', '**/pages/**', '**/services/**'],
    'Un organism solo puede importar molecules y atoms; los datos llegan por props.',
  ),
  restrictLayers(
    ['src/components/templates/**/*.{ts,tsx}'],
    ['**/pages/**', '**/services/**'],
    'Un template no puede importar pages ni services.',
  ),
])
