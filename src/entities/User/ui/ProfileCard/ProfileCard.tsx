import cls from './ProfileCard.module.css';
import { Text } from '@/shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Input } from '@/shared/ui/Input/Input';
import type { Profile, ProfileUpdate, ProfileValue } from '../../model/types/profile';
import { Loader } from '@/shared/ui/Loader/Loader';
import clsx from 'clsx';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { CurrencySelect } from '@/entities/Currency';
import { CountrySelect } from '@/entities/Country';

type ProfileCardProps = {
    className?: string;
    data?: Profile | null;
    isLoading?: boolean | null;
    error?: string;
    onChangeProfile?: (name: keyof ProfileUpdate, value: ProfileValue) => void;
    readOnly?: boolean;
};

export const ProfileCard = ({
    className,
    data,
    isLoading,
    error,
    readOnly,
    onChangeProfile,
}: ProfileCardProps) => {
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <div className={clsx(cls.ProfileCard, cls.loading)}>
                <Loader />
            </div>
        );
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
        );
    }

    const onChangeHandler = (name: keyof ProfileUpdate) => (value: ProfileValue) => {
        onChangeProfile?.(name, value);
    };

    return (
        <div className={clsx(className, cls.ProfileCard, readOnly && cls.editing)}>
            <div className={cls.data}>
                {data?.avatar && (
                    <div className={cls.avatarWrapper}>
                        <Avatar src={data.avatar} size={200} alt={t('Аватар профиля')} />
                    </div>
                )}
                <Input
                    value={data?.firstname}
                    placeholder={t('Ваше имя')}
                    className={cls.input}
                    onChange={onChangeHandler('firstname')}
                    readOnly={readOnly}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('Ваша фамилия')}
                    className={cls.input}
                    onChange={onChangeHandler('lastname')}
                    readOnly={readOnly}
                />
                <Input
                    value={data?.city}
                    placeholder={t('Город')}
                    className={cls.input}
                    onChange={onChangeHandler('city')}
                    readOnly={readOnly}
                />
                <Input
                    value={data?.age}
                    placeholder={t('Ваш возраст')}
                    className={cls.input}
                    onChange={onChangeHandler('age')}
                    readOnly={readOnly}
                />
                <Input
                    value={data?.username}
                    placeholder={t('Введите имя пользователя')}
                    className={cls.input}
                    readOnly={readOnly}
                    onChange={onChangeHandler('username')}
                />
                <Input
                    value={data?.avatar}
                    placeholder={t('Введите ссылку на аватар')}
                    className={cls.input}
                    readOnly={readOnly}
                    onChange={onChangeHandler('avatar')}
                />
                <CurrencySelect
                    className={cls.input}
                    onChange={onChangeHandler('currency')}
                    value={data?.currency}
                    readOnly={readOnly}
                />
                <CountrySelect
                    className={cls.input}
                    onChange={onChangeHandler('country')}
                    value={data?.country}
                    readonly={readOnly}
                />
            </div>
        </div>
    );
};
