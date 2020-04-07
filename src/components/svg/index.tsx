import React, { ReactElement, FC } from 'react';
import Close from './icons/close.svg';
import Github from './icons/github.svg';
import Gmail from './icons/gmail.svg';
import Linkedin from './icons/linkedin.svg';
import Logo from './icons/logo.svg';
import Menu from './icons/menu.svg';
import Moon from './icons/moon.svg';
import Plus from './icons/plus.svg';
import Stackoverflow from './icons/stackoverflow.svg';
import Sun from './icons/sun.svg';

const icons: { [index: string]: FC } = {
    Close,
    Github,
    Gmail,
    Linkedin,
    Logo,
    Menu,
    Moon,
    Plus,
    Stackoverflow,
    Sun,
};

interface SVGProps {
    className?: string;
    onClick?: () => void;
}

interface Props extends SVGProps {
    icon: string;
}

const SVG = ({ icon, onClick }: Props): ReactElement => {
    const SVGIcon: FC<SVGProps> = icons[icon.charAt(0).toUpperCase() + icon.slice(1)];

    return <SVGIcon className={icon} onClick={onClick} />;
};

export default SVG;
