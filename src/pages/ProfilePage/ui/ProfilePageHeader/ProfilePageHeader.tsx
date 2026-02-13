import clsx from 'clsx';
import cls from './ProfilePageHeader.module.css';
import { useTranslation } from 'react-i18next';
import { Text } from '@/shared/ui/Text/Text';
import { Button } from '@/shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getProfileReadOnly, profileActions, updateProfileData } from '@/entities/Profile';
import { useCallback } from 'react';
import { useAppDispatch } from '@/shared/helpers/hooks/reduxHooks/reduxHppks';
import { getCanEdit } from '@/entities/User/model/selectors/getCanEdit/getCanEdit';

type ProfilePageHeaderProps = {
    className?: string;
};

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
    const readOnly = useSelector(getProfileReadOnly);
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const canEdit = useSelector(getCanEdit);

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadOnly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSaveEdit = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={clsx(className, cls.ProfilePageHeader)}>
            <Text title={t('Профиль')}></Text>
            {canEdit && (
                <>
                    {readOnly ? (
                        <Button theme='outline' className={cls.editBtn} onClick={onEdit}>
                            {t('Редактировать')}
                        </Button>
                    ) : (
                        <>
                            <Button
                                theme='outlineInv'
                                className={cls.editBtn}
                                onClick={onCancelEdit}
                            >
                                {t('Отменить')}
                            </Button>
                            <Button theme='outline' className={cls.save} onClick={onSaveEdit}>
                                {t('Сохранить')}
                            </Button>
                        </>
                    )}
                </>
            )}
        </div>
    );
};
