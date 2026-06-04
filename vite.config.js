import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// Env vars the contact form needs to function. Missing any of these means
// emails won't send, so we warn loudly at build/dev start.
const REQUIRED_ENV = [
  'VITE_EMAILJS_SERVICE_ID',
  'VITE_EMAILJS_TEMPLATE_ID',
  'VITE_EMAILJS_PUBLIC_KEY',
];
// Optional: features degrade gracefully if unset (counter is just skipped).
const OPTIONAL_ENV = ['VITE_COUNTER_URL'];

// Build-time guard that surfaces missing env vars instead of silently
// shipping a broken contact form.
function envGuard(env) {
  return {
    name: 'env-guard',
    buildStart() {
      const missingRequired = REQUIRED_ENV.filter((k) => !env[k]);
      const missingOptional = OPTIONAL_ENV.filter((k) => !env[k]);

      if (missingRequired.length) {
        this.warn(
          `\n  ⚠  Missing required env var(s): ${missingRequired.join(', ')}\n` +
            `     The contact form will NOT send emails.\n` +
            `     Copy .env.example to .env and fill in the values.\n`
        );
      }
      if (missingOptional.length) {
        this.warn(
          `\n  ℹ  Optional env var(s) not set: ${missingOptional.join(', ')}\n` +
            `     This feature is skipped (e.g. the submission counter).\n`
        );
      }
    },
  };
}

// Custom domain (hiteshchoudhary.com.au) serves from root, so base is '/'.
export default defineConfig(({ mode }) => {
  // Third arg '' loads all env vars (not just the VITE_ prefixed ones).
  const env = loadEnv(mode, process.cwd(), '');

  return {
    base: '/',
    plugins: [react(), envGuard(env)],
    build: {
      outDir: 'dist',
      rollupOptions: {
        output: {
          // Split heavy/stable libs into their own cacheable chunks.
          manualChunks: {
            react: ['react', 'react-dom'],
            gsap: ['gsap', '@gsap/react'],
          },
        },
      },
    },
  };
});
