import React, {ReactElement, FC} from 'react';
import Close from './icons/close.svg';
import Floorplanner from './icons/floorplanner.svg';
import Codecrashers from './icons/codecrashers.svg';
import Curio from './icons/curio.svg';
import Rea from './icons/rea.svg';
import Github from './icons/github.svg';
import Gmail from './icons/gmail.svg';
import Linkedin from './icons/linkedin.svg';
import Logo from './icons/logo.svg';
import Menu from './icons/menu.svg';
import Moon from './icons/moon.svg';
import Plus from './icons/plus.svg';
import Sun from './icons/sun.svg';

const icons = {
    Close,
    Floorplanner,
    Codecrashers,
    Curio,
    Rea,
    Github,
    Gmail,
    Linkedin,
    Logo,
    Menu,
    Moon,
    Plus,
    Sun,
};

interface SVGProps {
    className?: string;
    onClick?: () => void;
}

interface Props extends SVGProps {
    icon: string;
}

export default function SVG({icon, onClick}: Props): ReactElement {
    const SVGIcon: FC<SVGProps> =
        icons[icon.charAt(0).toUpperCase() + icon.slice(1)];

    return <SVGIcon className={icon} onClick={onClick} />;
}
