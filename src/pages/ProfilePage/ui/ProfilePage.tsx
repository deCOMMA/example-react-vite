import { useAppDispatch } from '@/app/providers/Store/config/hooks';
import {
    fetchProfileData,
    getProfileReadOnly,
    getProfileValidateErrors,
    profileActions,
    ProfileCard,
    profileReducer,
    validateProfileError,
} from '@/entities/Profile';
import { getProfileError } from '@/entities/Profile';
import { getProfileLoader } from '@/entities/Profile';
import {
    DynamicModuleFolder,
    type ReducerList,
} from '@/shared/helpers/components/DynamicModuleFolder/DynamicModuleFolder';
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import { getProfileForm } from '@/entities/Profile/model/selectors/getProfileForm/getProfileForm';
import { Text } from '@/shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Page } from '@/shared/ui/Page/Page';
import type { ProfileUpdate, ProfileValue } from '@/entities/Profile';

type ProfilePageProps = {
    children?: React.ReactNode;
};

const initialReducers: ReducerList = {
    profile: profileReducer,
};

const ProfilePage = ({ children }: ProfilePageProps) => {
    const dispatch = useAppDispatch();
    const formData = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileLoader);
    const error = useSelector(getProfileError);
    const readOnly = useSelector(getProfileReadOnly);
    const validateErrors = useSelector(getProfileValidateErrors);
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();

    const validateErrorsTranslates = {
        [validateProfileError.SERVER_ERROR]: t('Серверная ошибка при сохранении'),
        [validateProfileError.INCORECT_AGE]: t('Неккоректный возраст'),
        [validateProfileError.INCORECT_COUNTRY]: t('Неккоректный регион'),
        [validateProfileError.INCORECT_USER_DATA]: t('Имя и фамилия обязательны'),
        [validateProfileError.NO_DATA]: t('Данные не указаны'),
    };

    useEffect(() => {
        dispatch(fetchProfileData(id));
    }, [dispatch, id]);

    const onChangeProfile = useCallback((name: keyof ProfileUpdate, value: ProfileValue) => {
        let normalizedValue = value;
        if (name === 'age') {
            const regNum = /^\d*$/;
            if (regNum.test(String(value))) {
                normalizedValue = value === '' ? undefined : Number(value);
            } else {
                return;
            }
        }
        dispatch(profileActions.updateProfile({ [name]: normalizedValue }))
    }, [dispatch])

    return (
        <DynamicModuleFolder reducers={initialReducers} removeAfterUnmount={true}>
            <Page>

                <section>
                    <ProfilePageHeader />
                    {validateErrors?.length &&
                        validateErrors.map(error => (
                            <Text
                                text={validateErrorsTranslates[error]}
                                title='Ошибка валидации'
                                thema='error'
                                key={error}
                            />
                        ))}
                    <ProfileCard
                        onChangeProfile={onChangeProfile}
                        data={formData}
                        error={error}
                        isLoading={isLoading}
                        readOnly={readOnly}
                    />
                    {children}
                </section>
            </Page>
        </DynamicModuleFolder>
    );
};

export default ProfilePage;
