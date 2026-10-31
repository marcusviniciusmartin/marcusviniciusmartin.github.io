// Rode a partir da pasta do projeto:
//   npx tailwindcss@3.4.16 -c _build/tailwind.config.js -i _build/in.css -o assets/css/tailwind.css --minify
module.exports = {
  content: ['./index.html'],
  theme: { extend: { fontFamily: {
    display: ['Fraunces', 'Georgia', 'serif'], sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
    mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'], pixel: ['"Press Start 2P"', 'monospace'], term: ['VT323', 'monospace'],
  } } },
};
