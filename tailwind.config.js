// eslint-disable-next-line no-unused-vars
const tailwindcss = require('tailwindcss')
const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
    purge: [
        './app/**/*.slim',
        './config/initializers/simple_form.rb',
        './app/**/*.html',
        './app/**/*.html.erb',
        './app/**/*.js',
    ],
    darkMode: false,
    theme: {
        fontSize: {
            heading: ['2.5rem'],
            xs: '0.625rem',   //10px
            sm: '.875rem',    //14px
            base: '1rem',     //16px
            lg: '1.125rem',   //18px
            'xl': '1.25rem',  //20px
            '2xl': '1.5rem',  //24px
            '3xl': '1.875rem',//30px
            '4xl': '2.25rem', //36px
            '6xl': '3.75rem', //60px
        },
        extend: {
            width: {
                512: '32rem',
                544: '34rem',
                '5/7': '71.4285714%',
            },
            fontFamily: {
                sans: ['Graphik', 'sans-serif'],
                serif: ['Merriweather', 'serif'],
                display: ['Syne', 'sans-serif'],
                body: ['Assistant', ...defaultTheme.fontFamily.sans],
            },
            fontWeight: {
                'weight-100': 100,
                'weight-200': 200,
                'weight-300': 300,
                'weight-400': 400,
                'weight-500': 500,
                'weight-600': 600,
                'weight-700': 700,
                'weight-800': 800,
                'weight-900': 900,
            },
            screens: {
                xs: '375px',
            },
            colors: {
                gray: {
                    100: '#F6F8F9',
                    200: '#F1F2F5',
                    300: '#E2E5EA',
                    400: '#D3D8DF',
                    500: '#A7B0BF',
                    600: '#8995AA',
                    700: '#6C7B94',
                    800: '#566277',
                    900: '#414A59',
                    1000: '#2B313C',
                },
                guide: '#FAFF00',
                primary: '#135BE8',
                secondary: '#00B1F7',
                brand: '#00E3B7',
                error: '#FF0000',
                'error-message': '#FF0000',
                'large-section': '#F0FAFF',
                'small-section': '#E8F8FE',
                active: '#B2E8FD',
                other: '#66D0FA',
                lightblue: '#EFFAFE',
            },
            keyframes: {
                bordered: {
                    '0%': { border: '6px white', borderLeft: '6px solid white' },
                    '25%': { border: '6px white', borderTop: '6px solid white' },
                    '50%': { border: '6px white', borderRight: '6px solid white' },
                    '75%': { border: '6px white', borderBottom: '6px solid white' },
                    '100%':{ border: '6px white', borderLeft: '6px solid white' },
                },
            },
            animation: {
                spin: 'spin 3s linear infinite',
                bordered: 'bordered 2s linear infinite',
            },
        },
    },
    variants: {
        extend: {
            opacity: ['disabled'],
            borderWidth: ['focus', 'disabled'],
            borderColor: ['disabled'],
            outline:['focus'],
            textColor: ['disabled'],
            display: ['group-hover'],
            backgroundColor: ['disabled'],
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        plugin(({ addBase, theme }) => {
            addBase({
                a: {
                    textDecoration: 'none',
                    fontWeight: '400',
                    '&:hover': {
                        color: '#135BE8',
                    },
                },
                label: {
                    fontSize: theme('fontSize.sm'),
                },
                h1: { fontSize: theme('fontSize.2xl'), fontWeight: '700' },
                h2: { fontSize: theme('fontSize.2xl'), fontWeight: '400' },
                h3: { fontSize: theme('fontSize.lg'), fontWeight: '700' },
                h4: { fontSize: theme('fontSize.lg'), fontWeight: '400' },
                h5: { fontSize: theme('fontSize.sm'), fontWeight: '700' },
            })
        }),
        plugin(({ addUtilities }) => {
            const customUtilities = {
                '.border-gradient':{
                    border: '4px solid transparent',
                    'border-image-source': 'linear-gradient(127.57deg, #135BE8 2.61%, #00E3B7 97.39%)',
                    'border-image-slice': '1',
                },
                'input:checked + div':{
                    'border-color': '#135BE8',
                },
                'input:checked + div svg':{
                    opacity: '1',
                },
            }
            addUtilities(customUtilities)
        }),
    ],
}
