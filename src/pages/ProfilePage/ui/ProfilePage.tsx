import { useAppDispatch } from "@/app/providers/Store/config/hooks";
import { fetchProfileData, ProfileCard, profileReducer } from "@/entities/Profile";
import { DynamicModuleFolder, type ReducerList } from "@/shared/helpers/components/DynamicModuleFolder/DynamicModuleFolder";
import { useEffect } from "react";

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

    useEffect(() => {
        dispatch(fetchProfileData())
    }, [dispatch])

    return (
        <DynamicModuleFolder reducers={initialReducers} removeAfterUnmount={true}>
            <div>
                <ProfileCard />
                {children}
            </div>
        </DynamicModuleFolder>
    )
}

export default ProfilePage