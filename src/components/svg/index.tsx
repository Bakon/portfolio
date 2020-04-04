import React, {ReactElement, FC} from 'react';
import Close from './icons/close.svg';
import Moon from './icons/moon.svg';
import Plus from './icons/plus.svg';
import Sun from './icons/sun.svg';

const icons: {[index: string]: FC} = {Close, Moon, Plus, Sun};

interface SVGProps {
    className?: string;
    onClick?: () => void;
}

interface Props extends SVGProps {
    icon: string;
}

export default function SVG({icon, onClick}: Props): ReactElement {
    const SVGIcon: FC<SVGProps> = icons[icon.charAt(0).toUpperCase() + icon.slice(1)];

    return <SVGIcon className={icon} onClick={onClick} />;
}
