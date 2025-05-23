// .prettierrc.cjs

/**
 * Prettier configuration with an emphasis on accessibility and developer empathy.
 * - Tabs allow each dev to control their indentation experience.
 * - No semicolons for cleaner, modern JavaScript.
 * - Tailwind plugin included for consistent class ordering.
 */

 module.exports = {
  semi: false,
  useTabs: true,
  singleQuote: true,
  printWidth: 100,
  trailingComma: 'none',
  plugins: ['prettier-plugin-tailwindcss'],
};
