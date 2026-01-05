import clsx from "clsx"
import cls from './ProfileCard.module.css'
import { useSelector } from "react-redux";
import { getProfileData } from "../../model/selectors/getProfileData/getProfileData";
import { getProfileError } from "../../model/selectors/getProfileError/getProfileErros";
import { getProfileLoader } from "../../model/selectors/getProfileLoader/getProfileLoader";
import { Text } from "@/shared/ui/Text/Text";
import { useTranslation } from "react-i18next";
import { Button } from "@/shared/ui/Button/Button";
import { Input } from "@/shared/ui/Input/Input";
import { Loader } from "@/shared/ui/Loader/Loader";

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
    console.log(data)
    return (
        <div
            className={classNames}
            {...otherProps}>
            <div className={cls.header}>
                <Text title={t('Профиль')}></Text>
                {error}
            </div>
            <div>
                <Button theme="clear" className={cls.editBtn}>
                    {t('Редактирвоать')}
                </Button>
                {isLoading
                    ?
                    <Loader></Loader>
                    :
                    <div className={cls.data}>
                        <Input value={data?.firstname} placeholder={t('Ваша имя')} className={cls.input} />
                        <Input value={data?.lastname} placeholder={t('Ваша фамилия')} className={cls.input} />
                        <Input value={data?.username} placeholder={t('Ваша nickname')} className={cls.input} />
                    </div>}
            </div>
        </div>
    )
}