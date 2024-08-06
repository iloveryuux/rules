import { type Options, defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    commitlint: 'src/commitlint/index.ts'
  },
  outDir: 'dist',
  format: ['esm', 'cjs'],
  clean: true
} as Options)
