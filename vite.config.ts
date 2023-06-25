import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

export default defineConfig({
  root: "src",
  publicDir: "public",
  build: {
    copyPublicDir: true,
    rollupOptions: {
      input: [
        'src/index.ts',
        'src/data/recoveryCodes.ts',
        'src/data/webAuthnAuthenticate.ts',
        'src/data/webAuthnRegister.ts',
      ],
      output: {
        assetFileNames: '[name][extname]',
        dir: 'theme/keywind/login/resources/dist',
        entryFileNames: '[name].js',
      },
    },
  },
});
