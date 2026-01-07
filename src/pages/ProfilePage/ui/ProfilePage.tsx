import { useAppDispatch } from "@/app/providers/Store/config/hooks";
import { fetchProfileData, getProfileReadOnly, profileActions, ProfileCard, profileReducer } from "@/entities/Profile";
import { getProfileError } from "@/entities/Profile";
import { getProfileLoader } from "@/entities/Profile";
import { DynamicModuleFolder, type ReducerList } from "@/shared/helpers/components/DynamicModuleFolder/DynamicModuleFolder";
import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { ProfilePageHeader } from "./ProfilePageHeader/ProfilePageHeader";
import { getProfileForm } from "@/entities/Profile/model/selectors/getProfileForm/getProfileForm";
import type { Currency } from "@/entities/Currency";
import type { Country } from "@/entities/Country";

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