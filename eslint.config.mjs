import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import prettier from "eslint-plugin-prettier";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

// uncomment when import will support flat config -> https://github.com/import-js/eslint-plugin-import/pull/2873

export default [{
    ignores: [
        "**/build",
        "**/node_modules",
        "**/coverage",
        "src/graphql/**/generated.tsx",
        "**/.prettierrc",
        "**/.eslintrc",
        "**/lint-staged.config.js",
        "**/craco.config.js",
    ],
}, ...fixupConfigRules(compat.extends(
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/stylistic",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:react-hooks/recommended",
    // "plugin:import/recommended",
    // "plugin:import/typescript",
    "plugin:prettier/recommended",
    "prettier",
)), {
    plugins: {
        prettier: fixupPluginRules(prettier),
        "@typescript-eslint": fixupPluginRules(typescriptEslint),
    },

    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.node,
            ...globals.jest,
        },

        parser: tsParser,
        ecmaVersion: 5,
        sourceType: "commonjs",

        parserOptions: {
            project: ["./tsconfig.json"],
        },
    },

    settings: {
        react: {
            version: "detect",
        },

        // "import/resolver": {
        //     typescript: {},
        // },
    },

    rules: {
        "@typescript-eslint/ban-ts-comment": "warn",
        "@typescript-eslint/ban-types": "warn",

        "@typescript-eslint/no-empty-function": ["warn", {
            allow: ["arrowFunctions"],
        }],

        "@typescript-eslint/no-unused-vars": ["warn", {
            ignoreRestSiblings: true,
        }],

        "@typescript-eslint/no-var-requires": "warn",
        "@typescript-eslint/consistent-type-definitions": 0,
        "@typescript-eslint/consistent-indexed-object-style": 0,
        "arrow-body-style": "warn",
        camelcase: 0,
        "jsx-quotes": 0,
        "no-console": "warn",
        "no-debugger": "error",

        "no-irregular-whitespace": ["warn", {
            skipTemplates: true,
        }],

        "no-mixed-operators": 0,
        "no-nested-ternary": 0,
        "no-plusplus": "warn",
        "no-shadow": 0,
        "no-sparse-arrays": "warn",
        "no-underscore-dangle": 0,
        "no-unexpected-multiline": "warn",
        "no-unused-vars": 0,
        "prefer-spread": "warn",

        "prettier/prettier": ["error", {
            endOfLine: "auto",
        }],

        "react-hooks/exhaustive-deps": "error",
        "react-hooks/rules-of-hooks": "error",
        // "import/extensions": 0,

        // "import/no-duplicates": ["error", {
        //     considerQueryString: true,
        // }],

        // "import/namespace": ["error", {
        //     allowComputed: true,
        // }],

        // "import/order": ["error", {
        //     "newlines-between": "always",
        //     groups: ["builtin", "external", "internal", "parent", "sibling", "index"],

        //     pathGroups: [{
        //         pattern: "react",
        //         group: "external",
        //         position: "before",
        //     }, {
        //         pattern: "@op-tiger/**",
        //         group: "internal",
        //         position: "after",
        //     }, {
        //         pattern: "@/**",
        //         group: "internal",
        //         position: "after",
        //     }],

        //     pathGroupsExcludedImportTypes: ["builtin"],

        //     alphabetize: {
        //         order: "asc",
        //         caseInsensitive: true,
        //     },
        // }],
    },
}];