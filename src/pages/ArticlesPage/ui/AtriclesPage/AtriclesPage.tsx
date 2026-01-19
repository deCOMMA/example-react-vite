import clsx from "clsx"
import cls from './ArticlesPage.module.css'
import { useTranslation } from "react-i18next";
import { memo } from "react";

type AtriclesPageProps = {
    className?: string;
}

const AtriclesPage = ({
    className,
}: AtriclesPageProps) => {

    const { t } = useTranslation('article')

    const classNames = clsx(
        cls.AtriclesPage,
        className
    );

    return (
        <div className={classNames}>
            {t('ARTICLE PAGE')}
        </div>
    )
}

export default memo(AtriclesPage);