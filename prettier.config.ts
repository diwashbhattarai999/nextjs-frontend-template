module.exports = {
  // Enforces the omission of parentheses in arrow functions when they have a single parameter
  arrowParens: "avoid", // Example: (x) => x -> x => x

  // Places the closing bracket of JSX elements in a new line
  bracketSameLine: false, // Example:
  // <Button
  //   color="blue"
  // >
  // </Button>

  // Controls spacing inside object literals
  bracketSpacing: true, // Example: {foo: "bar"} -> { foo: "bar" }

  // Defines how whitespace inside HTML should be handled
  htmlWhitespaceSensitivity: "css", // Follows CSS rules for whitespace in HTML

  // Avoids adding a special pragma at the top of formatted files
  insertPragma: false, // No pragma comments like /** @format */

  // Uses single quotes instead of double quotes in JSX
  jsxSingleQuote: true, // Example: <div className='app' />

  // Adds the Tailwind CSS plugin to Prettier for sorting Tailwind classes
  plugins: ["prettier-plugin-tailwindcss"], // Automatically orders classes

  // Sets the maximum line length
  printWidth: 80, // Example: Breaks lines longer than 80 characters

  // Wraps markdown text at the specified width
  proseWrap: "always", // Ensures consistent wrapping in markdown files

  // Defines when quotes are added to object properties
  quoteProps: "as-needed", // Example: {foo: "bar"} -> {"foo": "bar"} only if needed

  // Prevents adding pragma comments to files
  requirePragma: false, // Example: No comments like /** @format */ required

  // Enforces semicolons at the end of statements
  semi: true, // Example: console.log("Hello") -> console.log("Hello");

  // Prefers single quotes in JavaScript
  singleQuote: true, // Example: "Hello" -> 'Hello'

  // Sets the number of spaces per indentation level
  tabWidth: 2, // Example: Indents code with 2 spaces

  // Adds trailing commas wherever possible
  trailingComma: "es5", // Example: {a: 1, b: 2,} -> {a: 1, b: 2}

  // Avoids using tabs for indentation
  useTabs: false, // Example: Indents with spaces instead of tabs

  // Ensures line endings are consistent across platforms
  endOfLine: "lf", // Line endings are Unix-style (LF) instead of Windows-style (CRLF)

  // Determines formatting for embedded languages (e.g., HTML inside JavaScript)
  embeddedLanguageFormatting: "auto", // Automatically formats embedded code

  // Preserves whitespace in Tailwind classes
  tailwindPreserveWhitespace: true, // Example: Preserves intentional spaces in classes

  // Points to the Tailwind configuration file for Prettier
  tailwindConfig: "./tailwind.config.ts", // Uses the specified Tailwind config for sorting
};
