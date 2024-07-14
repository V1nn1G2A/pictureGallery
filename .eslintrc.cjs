module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  extends: ['airbnb', 'plugin:@typescript-eslint/recommended', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: true,
        trailingComma: 'all',
        printWidth: 120,
        tabWidth: 2,
        useTabs: false, // Отступы в пробелах, а не табуляция
        jsxSingleQuote: true, // Использовать одинарные кавычки в JSX
        jsxBracketSameLine: true, // Закрывающий JSX-тег на той же строке
        arrowParens: 'always', // Добавить круглые скобки к единственному параметру в стрелочных функциях
        endOfLine: 'auto', // Автоматическое определение конца строки
        quoteProps: 'as-needed', // Использовать кавычки в объектных литералах только там, где это необходимо
        bracketSpacing: true, // Пробелы вокруг скобок в объектных литералах
        jsxBracketSameLine: false, // Закрывающий JSX-тег на новой строке
        arrowParens: 'avoid', // Избегать круглых скобок при единственном параметре в стрелочной функции
      },
    ],
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'], // Добавляем 'src/' в список путей поиска
      },
    },
  },
};
