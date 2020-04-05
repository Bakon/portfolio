export function multiply(unit: string, factor: number): string {
    return parseFloat(unit) * factor + unit.toString().replace(/^\d*\.?\d*/, '');
}

export const theme: {[key: string]: string} = {
    background: 'var(--bg)',
    header: 'var(--header)',
    text: 'var(--text)',
    link: 'var(--link)',
};

export const colors: {[key: string]: string} = {
    black: '#001F3F',
    dark: '#282c34',
    white: '#FFF',
    blue: '#4b9acd',
    green: '#5aac44',
};

const baseSpacing = '0.3125rem';
export const spacing: {[key: string]: string} = {
    small: baseSpacing, // 5px
    regular: multiply(baseSpacing, 2), // 0.625rem - 10px
    regularMedium: multiply(baseSpacing, 3), // 0.9375rem - 15px
    medium: multiply(baseSpacing, 4), // 1.25rem - 20px
    mediumLarge: multiply(baseSpacing, 6), // 1.875rem - 30px
    large: multiply(baseSpacing, 8), // 2.5rem - 40px
    header: multiply(baseSpacing, 18), // 6rem - 90px
    container: '880px', // 55rem
};

const sizes: {[key: string]: string} = {
    mobileM: '400px',
    mobileL: '540px',
    tablet: '800px',
};

export const media: {[key: string]: string} = {
    mobileM: `@media (max-width: ${sizes.mobileM})`,
    mobileL: `@media (max-width: ${sizes.mobileL})`,
    tablet: `@media (max-width: ${sizes.tablet})`,
};
