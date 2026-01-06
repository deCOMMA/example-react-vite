import cls from './ProfileCard.module.css'
import { Text } from "@/shared/ui/Text/Text";
import { useTranslation } from "react-i18next";
import { Input } from "@/shared/ui/Input/Input";
import type { Profile } from '../../model/types/profile';
import { Loader } from '@/shared/ui/Loader/Loader';
import clsx from 'clsx';

type ProfileCardProps = {
    className?: string;
    data?: Profile | null;
    isLoading?: boolean | null;
    error?: string;
    onChangeLastname?: (value: string) => void;
    onChangeFirstname?: (value: string) => void;
    onChangeCity?: (value: string) => void;
    onChangeAge?: (value: string) => void;
    onChangeUsername?: (value: string) => void;
    onChangeAvatar?: (value: string) => void;
    readOnly?: boolean;
}

export const ProfileCard = ({
    className,
    data,
    isLoading,
    error,
    onChangeLastname,
    onChangeFirstname,
    onChangeAge,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
    readOnly,
}: ProfileCardProps) => {

    const { t } = useTranslation();

    if (isLoading) {
        return (
            <div className={clsx(cls.ProfileCard, cls.loading)}>
                <Loader />
            </div>
        )
    }

    if (error) {
        return (
            <div className={clsx(cls.ProfileCard, cls.error)}>
                <Text
                    align='center'
                    thema='error'
                    title={t('Ошибка при загрузке профиля')}
                    text={t('Попробуйте обновить страницу')}
                />
            </div>
        )
    }

    return (
        <div className={clsx(className, cls.ProfileCard)}>
            <div className={cls.data}>
                {
                    data?.avatar && <img src={data?.avatar}></img>
                }
                <Input
                    value={data?.firstname}
                    placeholder={t('Ваше имя')}
                    className={cls.input}
                    onChange={onChangeFirstname}
                    readOnly={readOnly} />
                <Input
                    value={data?.lastname}
                    placeholder={t('Ваша фамилия')}
                    className={cls.input}
                    onChange={onChangeLastname}
                    readOnly={readOnly} />
                <Input
                    value={data?.city}
                    placeholder={t('Город')}
                    className={cls.input}
                    onChange={onChangeCity}
                    readOnly={readOnly} />
                <Input
                    value={data?.age}
                    placeholder={t('Ваш возраст')}
                    className={cls.input}
                    onChange={onChangeAge}
                    readOnly={readOnly} />
                <Input
                    value={data?.username}
                    placeholder={t('Введите имя пользователя')}
                    className={cls.input}
                    readOnly={readOnly}
                    onChange={onChangeUsername} />
                <Input
                    value={data?.avatar}
                    placeholder={t('Введите ссылку на аватар')}
                    className={cls.input}
                    readOnly={readOnly}
                    onChange={onChangeAvatar} />
            </div>
        </div>
    )
}