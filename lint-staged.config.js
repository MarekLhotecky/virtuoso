import { quote } from 'shell-quote'

const isWin = process.platform === 'win32'

export default {
  '**/*.{js,jsx,ts,tsx}': (filenames) => {
    const escapedFileNames = filenames
      .map((filename) => `"${isWin ? filename : quote([filename])}"`)
      .join(' ')
    return [`prettier --write ${escapedFileNames}`, `eslint --fix ${escapedFileNames}`]
  },
  '**/*.{json,md,mdx,html,yml,yaml}': (filenames) => {
    const escapedFileNames = filenames
      .map((filename) => `"${isWin ? filename : quote([filename])}"`)
      .join(' ')
    return [`prettier --write ${escapedFileNames}`]
  },
}
