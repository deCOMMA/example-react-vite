import { useAppDispatch } from "@/app/providers/Store/config/hooks";
import { fetchProfileData, getProfileReadOnly, getProfileValidateErrors, profileActions, ProfileCard, profileReducer, validateProfileError } from "@/entities/Profile";
import { getProfileError } from "@/entities/Profile";
import { getProfileLoader } from "@/entities/Profile";
import { DynamicModuleFolder, type ReducerList } from "@/shared/helpers/components/DynamicModuleFolder/DynamicModuleFolder";
import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { ProfilePageHeader } from "./ProfilePageHeader/ProfilePageHeader";
import { getProfileForm } from "@/entities/Profile/model/selectors/getProfileForm/getProfileForm";
import type { Currency } from "@/entities/Currency";
import type { Country } from "@/entities/Country";
import { Text } from "@/shared/ui/Text/Text";
import { useTranslation } from "react-i18next";

type ProfilePageProps = {
    children?: React.ReactNode;
}

const initialReducers: ReducerList = {
    profile: profileReducer
};

const ProfilePage = ({
    children,
}: ProfilePageProps) => {

    const dispatch = useAppDispatch()
    const formData = useSelector(getProfileForm)
    const isLoading = useSelector(getProfileLoader)
    const error = useSelector(getProfileError)
    const readOnly = useSelector(getProfileReadOnly);
    const validateErrors = useSelector(getProfileValidateErrors);
    const { t } = useTranslation();

    const validateErrorsTranslates = {
        [validateProfileError.SERVER_ERROR]: t('Серверная ошибка при сохранении'),
        [validateProfileError.INCORECT_AGE]: t('Неккоректный возраст'),
        [validateProfileError.INCORECT_COUNTRY]: t('Неккоректный регион'),
        [validateProfileError.INCORECT_USER_DATA]: t('Имя и фамилия обязательны'),
        [validateProfileError.NO_DATA]: t('Данные не указаны'),
    }

    useEffect(() => {
        dispatch(fetchProfileData())
    }, [dispatch])

    const onChangeFirstname = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ firstname: value }))
    }, [dispatch])

    const onChangeLastname = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ lastname: value }))
    }, [dispatch])

    const onChangeAge = useCallback((value: string) => {
        const regNum = /^$|^\d+$/;

        if (value === undefined) return;

        if (regNum.test(value)) {
            const age = value === '' ? undefined : Number(value);
            dispatch(profileActions.updateProfile({ age }));
        }
    }, [dispatch])

    const onChangeCity = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ city: value }))
    }, [dispatch])

    const onChangeUsername = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ username: value }))
    }, [dispatch])

    const onChangeAvatar = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ avatar: value }))
    }, [dispatch])

    const onChangeCurrency = useCallback((currency: Currency) => {
        dispatch(profileActions.updateProfile({ currency: currency }))
    }, [dispatch])

    const onChangeCountry = useCallback((country: Country) => {
        dispatch(profileActions.updateProfile({ country: country }))
    }, [dispatch])


    return (
        <DynamicModuleFolder reducers={initialReducers} removeAfterUnmount={true}>
            <div>
                <ProfilePageHeader />
                {validateErrors?.length && validateErrors.map(error => (
                    <Text
                        text={validateErrorsTranslates[error]}
                        title="Ошибка валидации"
                        thema="error"
                        key={error}
                    />
                ))}
                <ProfileCard
                    data={formData}
                    error={error}
                    isLoading={isLoading}
                    readOnly={readOnly}
                    onChangeFirstname={onChangeFirstname}
                    onChangeLastname={onChangeLastname}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeUsername={onChangeUsername}
                    onChangeAvatar={onChangeAvatar}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                />
                {children}
            </div>
        </DynamicModuleFolder>
    )
}

export default ProfilePage