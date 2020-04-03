declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.svg' {
    const value: React.FC<React.SVGAttributes<SVGElement>>;
    export default value;
}
