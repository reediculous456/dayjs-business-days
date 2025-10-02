import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';
import importQuotes from 'eslint-plugin-import-quotes';
import sortKeysCustomOrder from 'eslint-plugin-sort-keys-custom-order';
import globals from 'globals';
import stylistic from '@stylistic/eslint-plugin';

export default defineConfig(
  js.configs.recommended,
  stylistic.configs.recommended,
  {
    ignores: [ `**/dist/`, `**/build/` ],
  },
  {
    files: [ `**/*.{ts,js,tsx,jsx,mjs,mts}` ],
    languageOptions: {
      ecmaVersion: `latest`,
      globals: {
        ...globals.node,
      },
      sourceType: `module`,
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    plugins: {
      '@stylistic': stylistic,
      "import": importPlugin,
      "import-quotes": importQuotes,
      "sort-keys-custom-order": sortKeysCustomOrder,
    },
    rules: {
      "@stylistic/array-bracket-newline": [ 2, `consistent` ],
      "@stylistic/array-bracket-spacing": [ 2, `always`, {
        arraysInArrays: false,
        objectsInArrays: false,
      }],
      "@stylistic/arrow-parens": [ 2, `always` ],
      "@stylistic/arrow-spacing": 2,
      "@stylistic/block-spacing": [ 2, `always` ],
      "@stylistic/brace-style": [ 2, `1tbs` ],
      "@stylistic/comma-dangle": [ 2, `always-multiline` ],
      "@stylistic/comma-spacing": 2,
      "@stylistic/comma-style": 2,
      "@stylistic/computed-property-spacing": 2,
      "@stylistic/dot-location": [ 2, `property` ],
      "@stylistic/eol-last": 2,
      "@stylistic/function-call-spacing": 2,
      "@stylistic/function-paren-newline": [ 2, `consistent` ],
      "@stylistic/indent": [ 2, 2, {
        offsetTernaryExpressions: true,
        SwitchCase: 1,
      }],
      "@stylistic/key-spacing": 2,
      "@stylistic/keyword-spacing": 2,
      "@stylistic/lines-between-class-members": [ 2, `always`, {
        exceptAfterSingleLine: true,
      }],
      "@stylistic/max-len": [ 2, {
        code: 120,
        ignoreTrailingComments: true,
      }],
      "@stylistic/multiline-ternary": 0,
      "@stylistic/new-parens": 2,
      "@stylistic/no-extra-parens": 2,
      "@stylistic/no-floating-decimal": 2,
      "@stylistic/no-multi-spaces": 2,
      "@stylistic/no-multiple-empty-lines": [ 2, {
        max: 1,
        maxBOF: 0,
        maxEOF: 0,
      }],
      "@stylistic/no-trailing-spaces": 2,
      "@stylistic/no-whitespace-before-property": 2,
      "@stylistic/object-curly-newline": [ 2, {
        consistent: true,
        multiline: true,
      }],
      "@stylistic/object-curly-spacing": [ 2, `always` ],
      "@stylistic/operator-linebreak": [ 2, `after` ],
      "@stylistic/quote-props": [ 2, `consistent-as-needed`, {
        numbers: true,
      }],
      "@stylistic/quotes": [ 2, `backtick`, {
        avoidEscape: true,
      }],
      "@stylistic/rest-spread-spacing": 2,
      "@stylistic/semi": [ 2, `always` ],
      "@stylistic/semi-spacing": 2,
      "@stylistic/semi-style": [ 2, `last` ],
      "@stylistic/space-before-blocks": 2,
      "@stylistic/space-before-function-paren": [ 2, {
        anonymous: `never`,
        named: `never`,
      }],
      "@stylistic/space-in-parens": 2,
      "@stylistic/space-infix-ops": 2,
      "@stylistic/space-unary-ops": 2,
      "@stylistic/spaced-comment": 2,
      "@stylistic/switch-colon-spacing": 2,
      "@stylistic/template-curly-spacing": 2,
      "@stylistic/wrap-iife": 2,
      "arrow-body-style": 2,
      "curly": 2,
      "dot-notation": 2,
      "eqeqeq": [ 2, `smart` ],
      "id-blacklist": [
        `error`,
        `any`,
        `Number`,
        `number`,
        `String`,
        `string`,
        `Boolean`,
        `boolean`,
        `function`,
        `Function`,
      ],
      "import-quotes/import-quotes": [ 2, `single` ],
      "import/order": 2,
      "max-classes-per-file": [ 2, 1 ],
      "no-array-constructor": 2,
      "no-caller": 2,
      "no-console": 2,
      "no-div-regex": 2,
      "no-else-return": 2,
      "no-empty-function": [ 2, {
        allow: [ `arrowFunctions` ],
      }],
      "no-eval": 2,
      "no-extra-bind": 2,
      "no-extra-label": 2,
      "no-fallthrough": 0,
      "no-implicit-coercion": [ 2, {
        allow: [ `!!` ],
      }],
      "no-import-assign": 2,
      "no-label-var": 2,
      "no-lonely-if": 2,
      "no-new-func": 2,
      "no-new-wrappers": 2,
      "no-path-concat": 2,
      "no-plusplus": 2,
      "no-shadow": [ 2, {
        hoist: `all`,
      }],
      "no-throw-literal": 2,
      "no-undef-init": 2,
      "no-unneeded-ternary": 2,
      "no-unused-expressions": 2,
      "no-unused-vars": [ 2, {
        varsIgnorePattern: `^_`,
      }],
      "no-useless-computed-key": 2,
      "no-useless-rename": 2,
      "no-useless-return": 2,
      "no-var": 2,
      "object-shorthand": 2,
      "one-var": [ 2, `never` ],
      "operator-assignment": 2,
      "prefer-arrow-callback": 2,
      "prefer-const": 2,
      "prefer-destructuring": 2,
      "prefer-exponentiation-operator": 2,
      "prefer-object-spread": 2,
      "prefer-template": 2,
      "require-await": 2,
      "sort-imports": [ 2, {
        ignoreCase: true,
        ignoreDeclarationSort: true,
      }],
      "sort-keys-custom-order/export-object-keys": [ 2, {
        orderedKeys: [ `id` ],
      }],
      "sort-keys-custom-order/object-keys": [ 2, {
        orderedKeys: [ `id` ],
      }],
      "sort-vars": [ 2, {
        ignoreCase: true,
      }],
    },
  },
  ...tseslint.configs.recommendedTypeChecked.map((config) => ({
    ...config,
    files: [ `**/*.{ts,tsx}` ],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
      },
    },
  })),
  {
    files: [ `**/*.{ts,tsx}` ],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
    },
    rules: {
      "@stylistic/member-delimiter-style": [ 2, {
        singleline: {
          delimiter: `comma`,
        },
      }],
      "@stylistic/type-annotation-spacing": 2,
      "@typescript-eslint/array-type": [ 2, {
        default: `array-simple`,
        readonly: `array-simple`,
      }],
      "@typescript-eslint/camelcase": 0,
      "@typescript-eslint/consistent-type-definitions": 2,
      "@typescript-eslint/explicit-function-return-type": 0,
      "@typescript-eslint/explicit-member-accessibility": [ 2, {
        accessibility: `explicit`,
      }],
      "@typescript-eslint/naming-convention": [ 2, {
        format: [ `PascalCase` ],
        selector: `interface`,
      }],
      "@typescript-eslint/no-empty-function": [ 2, {
        allow: [ `arrowFunctions` ],
      }],
      "@typescript-eslint/no-explicit-any": 0,
      "@typescript-eslint/no-misused-promises": [ 2, {
        checksVoidReturn: false,
      }],
      "@typescript-eslint/no-shadow": 2,
      "@typescript-eslint/no-unused-vars": [ 2, {
        varsIgnorePattern: `^_`,
      }],
      "@typescript-eslint/no-var-requires": 2,
      "@typescript-eslint/prefer-for-of": 2,
      "@typescript-eslint/prefer-function-type": 2,
      "@typescript-eslint/prefer-promise-reject-errors": 0,
      "@typescript-eslint/require-await": 2,
      "@typescript-eslint/triple-slash-reference": 0,
      "@typescript-eslint/unbound-method": 0,
      "@typescript-eslint/unified-signatures": 2,
      "no-empty-function": 0,
      "no-invalid-this": 0,
      "no-shadow": 0,
      "no-unused-vars": 0,
      "no-useless-return": 0,
      "require-await": 0,
      "sort-keys-custom-order/type-keys": [ 2, {
        orderedKeys: [ `id` ],
      }],
    },
  },
  {
    files: [ `**/*.d.ts` ],
    rules: {
      "@stylistic/spaced-comment": 0,
    },
  },
);
