export const multiply = (unit: string, factor: number): string =>
    parseFloat(unit) * factor + unit.toString().replace(/^\d*\.?\d*/, '');

export const theme: {[key: string]: string} = {
    background: 'var(--bg)',
    header: 'var(--header)',
    text: 'var(--text)',
    link: 'var(--link)',
    seperator: 'var(--seperator)',
};

export const colors: {[key: string]: string} = {
    // black
    black: '#181717',
    dark: '#282c34',
    text: '#3f4954',
    // white
    white: '#f5f5f5',
    snow: '#fafafa',
    // gray
    gray: '#888888',
    lightGray: '#e4e4e4',
    darkGray: '#3e3e3e',
    // blues
    blue: '#1085d1',
    lightBlue: '#00bfff',
    spaceBlue: '#033352',
    // greens
    green: '#5aac44',
    reaGreen: '#159499',
};

const baseSpacing = '0.3125rem';
export const spacing: {[key: string]: string} = {
    small: baseSpacing, // 5px
    regular: multiply(baseSpacing, 2), // 0.625rem - 10px
    regularMedium: multiply(baseSpacing, 3), // 0.9375rem - 15px
    medium: multiply(baseSpacing, 4), // 1.25rem - 20px
    mediumLarge: multiply(baseSpacing, 6), // 1.875rem - 30px
    mediumExtraLarge: multiply(baseSpacing, 7), // 2.2rem - 35px
    large: multiply(baseSpacing, 8), // 2.5rem - 40px
    extraLarge: multiply(baseSpacing, 10), // 3.1rem - 50px
    header: multiply(baseSpacing, 14), //  90px
    container: '880px', // 55rem
};

const screenSizes: {[key: string]: number} = {
    mobileS: 380,
    mobileM: 440,
    mobileL: 540,
    tabletS: 600,
    tabletM: 800,
    tabletL: 875,
};

export const device = Object.keys(screenSizes).reduce((acc: {}, cur: string): {
    [key: string]: string;
} => {
    acc[cur] = `@media (max-width: ${screenSizes[cur]}px)`;

    return acc;
}, {});
