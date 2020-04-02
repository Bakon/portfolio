export function multiply(unit: string, factor: number): string {
    return parseFloat(unit) * factor + unit.toString().replace(/^\d*\.?\d*/, '');
}

const baseSpacing = '0.5rem';
export const spacing: {[key: string]: string} = {
    small: multiply(baseSpacing, 0.5), // 0.25rem 4px
    regular: baseSpacing, // 0.5rem 8px
    medium: multiply(baseSpacing, 2), // 1rem 16px
    large: multiply(baseSpacing, 3), // 1.5rem 24px
    extraLarge: multiply(baseSpacing, 4), // 2rem 32px
    header: multiply(baseSpacing, 5), // 2.5rem 64px
    headerDoubled: multiply(baseSpacing, 10), // 5rem 128px
};

export const colors: {[key: string]: string} = {
    dark: '#127abd',
    light: '#4b9acd',
    black: '#001F3F',
    white: '#FFF',
    green: '#5aac44',
};
