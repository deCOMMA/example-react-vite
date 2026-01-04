import clsx from "clsx"
import cls from './ProfileCard.module.css'
import { useSelector } from "react-redux";
import { getProfileData } from "../../model/selectors/getProfileData/getProfileData";
import { getProfileError } from "../../model/selectors/getProfileError/getProfileErros";
import { getProfileLoader } from "../../model/selectors/getProfileLoader/getProfileLoader";
import { Text } from "@/shared/ui/Text/Text";
import { useTranslation } from "react-i18next";
import { Button } from "@/shared/ui/Button/Button";
import { Loader } from "@/shared/ui/Loader/Loader";
import { Input } from "@/shared/ui/Input/Input";

type ProfileCardProps = {
    className?: string;
    children?: React.ReactNode;
}

export const ProfileCard = ({
    className,
    children,
    ...otherProps
}: ProfileCardProps) => {

    const classNames = clsx(
        cls.ProfileCard,
        className
    );

    const { t } = useTranslation();
    const data = useSelector(getProfileData);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileLoader);

    return (
        <div
            className={classNames}
            {...otherProps}>
            <div className={cls.header}>
                <Text title={t('Профиль')}></Text>
                {
                    isLoading ?
                        <Loader></Loader>
                        :
                        <div>
                            <Button theme="clear">
                                {t('Редактирвоать')}
                            </Button>
                            <Input value="" placeholder={t('Ваша имя')} className={cls.input} />
                            <Input value="" placeholder={t('Ваша фамилия')} className={cls.input} />
                            <Input value="" placeholder={t('Ваша nickname')} className={cls.input} />
                        </div>
                }
                {error}
            </div>
        </div>
    )
}