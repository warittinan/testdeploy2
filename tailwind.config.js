/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      cursor: {
        xb: 'url(/src/assets/pt/x/xblack.png) 32 32 , default',
        xr: 'url(/src/assets/pt/x/xred.png) 32 32, default',
        xy: 'url(/src/assets/pt/x/xyellow.png) 32 32, default',
        xg: 'url(/src/assets/pt/x/xgreen.png) 32 32, default',
        xbu: 'url(/src/assets/pt/x/xblue.png) 32 32, default',
        ob:"url(/src/assets/pt/o/oblack.png)32 32, default",
        or:"url(/src/assets/pt/o/ored.png)32 32, default",
        oy:"url(/src/assets/pt/o/oyellow.png)32 32, default",
        og:"url(/src/assets/pt/o/ogreen.png)32 32, default",
        obu:"url(/src/assets/pt/o/oblue.png)32 32, default",
        pb:"url(/src/assets/pt/p/pblack.png)32 32, default",
        pr:"url(/src/assets/pt/p/pred.png)32 32, default",
        py:"url(/src/assets/pt/p/pyellow.png)32 32, default",
        pg:"url(/src/assets/pt/p/pgreen.png)32 32, default",
        pbu:"url(/src/assets/pt/p/pblue.png)32 32, default",
        tb:"url(/src/assets/pt/t/Tblack.png)32 32, default",
        tr:"url(/src/assets/pt/t/Tred.png)32 32, default",
        ty:"url(/src/assets/pt/t/Tyellow.png)32 32, default",
        tg:"url(/src/assets/pt/t/Tgreen.png)32 32, default",
        tbu:"url(/src/assets/pt/t/Tblue.png)32 32, default",
      },
      backgroundImage: {
        'bg-aimlab':"url('/src/assets/bg/logo-1.png')",
      },
      screens: {
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }

        'laptop': '1386px',
        // => @media (min-width: 1024px) { ... }

        'desktop': '1387px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  safelist: ['cursor-pb',
    'cursor-pr',
    'cursor-py',
    'cursor-pg',
    'cursor-pbu',
    'cursor-xb',
    'cursor-xr',
    'cursor-xy',
    'cursor-xg',
    'cursor-xbu',
    'cursor-ob',
    'cursor-or',
    'cursor-oy',
    'cursor-og',
    'cursor-obu',
    'cursor-tb',
    'cursor-tr',
    'cursor-ty',
    'cursor-tg',
    'cursor-tbu'
  ],
  
  plugins: [require('daisyui')],
}
