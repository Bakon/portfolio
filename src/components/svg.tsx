import React, {ReactElement, FC} from 'react';
import Plus from '../icons/plus.svg';
import Close from '../icons/close.svg';

const icons: {[index: string]: FC} = {
    Plus,
    Close,
};

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
