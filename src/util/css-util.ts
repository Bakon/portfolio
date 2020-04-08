export function multiply(unit: string, factor: number): string {
    return parseFloat(unit) * factor + unit.toString().replace(/^\d*\.?\d*/, '');
}

export const theme: { [key: string]: string } = {
    background: 'var(--bg)',
    header: 'var(--header)',
    text: 'var(--text)',
    link: 'var(--link)',
};

export const colors: { [key: string]: string } = {
    snow: '#fafafa',
    white: 'rgb(240,240,240)',
    black: '#181717',
    lightBlue: '#00bfff',
    dark: '#282c34',
    blue: '#1085d1',
    spaceBlue: '#033352',
    green: '#5aac44',
};

const baseSpacing = '0.3125rem';
export const spacing: { [key: string]: string } = {
    small: baseSpacing, // 5px
    regular: multiply(baseSpacing, 2), // 0.625rem - 10px
    regularMedium: multiply(baseSpacing, 3), // 0.9375rem - 15px
    medium: multiply(baseSpacing, 4), // 1.25rem - 20px
    mediumLarge: multiply(baseSpacing, 6), // 1.875rem - 30px
    mediumExtraLarge: multiply(baseSpacing, 7),
    large: multiply(baseSpacing, 8), // 2.5rem - 40px
    extraLarge: multiply(baseSpacing, 10), // 3.1rem - 50px
    header: multiply(baseSpacing, 30), // 9.3rem
    container: '880px', // 55rem
};

const sizes: { [key: string]: string } = {
    mobileS: '370px',
    mobileM: '440px',
    mobileL: '540px',
    tablet: '800px',
};

export const media: { [key: string]: string } = {
    mobileS: `@media (max-width: ${sizes.mobileS})`,
    mobileM: `@media (max-width: ${sizes.mobileM})`,
    mobileL: `@media (max-width: ${sizes.mobileL})`,
    tablet: `@media (max-width: ${sizes.tablet})`,
};
