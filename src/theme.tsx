//src/theme.tsx

import {
    createTheme,
    rem,
    type MantineColorsTuple,
} from '@mantine/core';

// ==========================================
// CONFIGURACIÓN DE TEMA Y COLORES
// ==========================================

export const violetColors: MantineColorsTuple = [
    '#f5f3ff',
    '#ede9fe',
    '#ddd6fe',
    '#c4b5fd',
    '#a78bfa',
    '#8b5cf6',
    '#7c3aed', // Primary
    '#6d28d9',
    '#5b21b6',
    '#4c1d95',
];

export const customTheme = createTheme({
    primaryColor: 'violet',
    primaryShade: 6,
    colors: {
        violet: violetColors,
        dark: [
            '#fafafa',
            '#f4f4f5',
            '#e4e4e7',
            '#d4d4d8',
            '#a1a1aa',
            '#71717a',
            '#52525b',
            '#3f3f46',
            '#27272a',
            '#09090b', // Background
        ],
    },
    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
    headings: {
        fontFamily: 'Space Grotesk, Inter, sans-serif',
        fontWeight: '700',
        sizes: {
            h1: { fontSize: rem(72), lineHeight: '1.1' },
            h2: { fontSize: rem(48), lineHeight: '1.2' },
            h3: { fontSize: rem(24), lineHeight: '1.3' },
        },
    },
    components: {
        Button: {
            defaultProps: {
                size: 'md',
                radius: 'xl',
            },
            styles: {
                root: {
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                },
            },
        },
        Card: {
            defaultProps: {
                radius: 'xl',
                p: 'xl',
            },
        },
    },
});

// ==========================================
// ANIMACIONES KEYFRAMES
// ==========================================

export const float = `
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(2deg); }
`;

export const pulse = `
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.9; transform: scale(1.02); }
`;

export const slideUp = `
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const marquee = `
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

export const gradientShift = `
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;


