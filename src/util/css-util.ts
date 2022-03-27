export function multiply(unit: string, factor: number): string {
    // parseFloating a string removes the non numeric values!
    return parseFloat(unit) * factor + unit.replace(/^\d*\.?\d*/, '');
}

export const theme = {
    background: 'var(--bg)',
    header: 'var(--header)',
    text: 'var(--text)',
    link: 'var(--link)',
    seperator: 'var(--seperator)',
};

export const colors = {
    // black
    black: '#181717',
    dark: '#282c34',
    text: '#3f4954',
    ccBlack: '#141414',
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
    // yellows
    curioYellow: '#FFCC00',
};

const baseSpacing = '0.3125rem';
export const spacing = {
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

// in pixels
const screenSizes = {
    mobileS: 380,
    mobileM: 440,
    mobileL: 540,
    tabletS: 600,
    tabletM: 800,
    tabletL: 875,
};

export const device = Object.keys(screenSizes).reduce((acc, cur) => {
    acc[cur] = `@media (max-width: ${screenSizes[cur]}px)`;

    return acc;
}, {});
