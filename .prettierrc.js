module.exports = {
  singleQuote: true,
  semi: true,
  useTabs: false,
  tabWidth: 2,
  trailingComma: 'all',
  printWidth: 100,
  importOrder: [
    '^(react|next|redux|msw).*',
    '^((?!(/|^@config$)).)*$', // target: 외부 라이브러리 (문자열에 "/"" 가 포함되지 않을때, 예외처리: @config 도 포함되지 않을때)
    '^((?!(/|^@image$)).)*$', // target: 외부 라이브러리 (문자열에 "/"" 가 포함되지 않을때, 예외처리: @config 도 포함되지 않을때)
    '^@(core|api|config|hooks|styles|utils|contexts|components|models|ui).*',
    '^@(.*)$',
    '^@.*',
    '^[.].*/.*', //  target: 상대 경로 ( "." 로 시작하고 "/"" 가 포함되어 있을 때)
    '.*',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: ['@trivago/prettier-plugin-sort-imports'],
};
