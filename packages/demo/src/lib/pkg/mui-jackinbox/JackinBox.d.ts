import React from 'react';
import { BoxProps } from '@material-ui/core';
export declare type Props = {
    children?: React.ReactNode;
    animate?: boolean;
    name: string;
    hideUntilAnimate?: boolean;
    noDisplayUntilAnimate?: boolean;
    speed?: 'slower' | 'slow' | 'fast' | 'faster';
    delay?: boolean | 1 | 2 | 3 | 4 | 5;
    repeat?: boolean | 1 | 2 | 3;
    infinite?: boolean;
    version?: string;
    delayBy?: string;
    speedBy?: string;
    repeatBy?: number;
    onAnimateEnd?: (e?: React.AnimationEvent<HTMLElement>) => void;
} & Partial<BoxProps>;
export default function JackinBox({ children, className: classNameProp, animate, name, version, hideUntilAnimate, noDisplayUntilAnimate, delayBy, speedBy, repeatBy, speed, infinite, delay: delayProp, repeat: repeatProp, onAnimateEnd, ...rest }: Props): JSX.Element;
