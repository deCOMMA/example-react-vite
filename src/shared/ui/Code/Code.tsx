import clsx from "clsx"
import cls from './Code.module.css'
import { useCallback, type ReactNode } from "react";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";
import CopyIcon from '@/shared/assets/icons/copy_symvol.svg?react'

type CodeProps = {
    className?: string;
    text: string;
}

export const Code = (props: CodeProps) => {
    const { className, text } = props;
    const classNames = clsx(
        cls.Code,
        className
    );

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [])

    return (
        <pre className={classNames}>
            <Button onClick={onCopy} theme="clear" className={cls.copyBtn}>
                <Icon Svg={CopyIcon} className={cls.copyIcon} />
            </Button>
            <code>
                {text}
            </code>
        </pre>
    )
}