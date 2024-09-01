/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            height: {
                'real-screen': 'calc(var(--vh) * 100)',
            },
            colors: {
                'WRTE-Blue-900': '#0047AD',
                'WRTE-Blue-800': '#0065CC',
                'WRTE-Blue-700': '#0076DE',
                'WRTE-Blue-600': '#0089F1',
                'WRTE-Blue-500': '#0097FF',
                'WRTE-Blue-400': '#0C5CF1',
                'WRTE-Blue-300': '#1C6BFF',
                'WRTE-Blue-200': '#81CBFF',
                'WRTE-Blue-100': '#B4DEFE',
                'WRTE-Blue-50': '#E0F2Fe',
                'WRTE-Light-Gray-900': '#101010',
                'WRTE-Light-Gray-800': '#242A32',
                'WRTE-Light-Gray-750': '#353A3F',
                'WRTE-Light-Gray-700': '#45505E',
                'WRTE-Light-Gray-600': '#556375',
                'WRTE-Light-Gray-500': '#798697',
                'WRTE-Light-Gray-400': '#A4A8AD',
                'WRTE-Light-Gray-300': '#B0B7C1',
                'WRTE-Light-Gray-250': '#E2E4E8',
                'WRTE-Light-Gray-200': '#CFD4DA',
                'WRTE-Light-Gray-100': '#ECEDF0',
                'WRTE-Light-Gray-50': '#F8F9FA',
                'WRTE-Black': '#000000',
                'WRTE-WHITE': '#FFFFFF',
                'black-1': '#0000001a',
                'black-2': '#00000033',
                'black-3': '#0000004d',
            },
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
                apple: ['Apple-SDG', 'sans-serif'],
                line: ['LINESeedKR', 'sans-serif'],
            },
            boxShadow: {
                banner: '0rem .25rem 2.125rem #EDE9F5',
                'shadow-2': '.1875rem .25rem 1.25rem 0rem #D2C7E7',
                'shadow-3': '.25rem .25rem 1.1875rem 0rem #68519533',
            },
        },
    },
    plugins: [
        ({ addUtilities }) => {
            addUtilities({
                '.absolute-center': {
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                },
            });
        },
    ],
};
