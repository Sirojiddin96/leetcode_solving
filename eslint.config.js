export default [
  {
    files: ['*.js'],
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    plugins: ['@typescript-eslint'],
    rules: {
      'no-console': 'error',
      'no-debugger': 'error',
      'no-alert': 'error',
      'no-undef': 'error',
      'no-unused-vars': 'error',
      'no-var': 'error',
      'no-const-assign': 'error',
      'no-this-before-super': 'error',
      'no-const-assign': 'error',
      'no-constant-condition': 'error',
      'no-dupe-args': 'error',
  }
}
]