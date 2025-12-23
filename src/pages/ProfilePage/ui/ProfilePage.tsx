import { profileReducer } from "@/entities/Profile";
import { DynamicModuleFolder, type ReducerList } from "@/shared/helpers/components/DynamicModuleFolder/DynamicModuleFolder";

type ProfilePageProps = {
    children?: React.ReactNode;
}

const initialReducers: ReducerList = {
    profile: profileReducer
};

const ProfilePage = ({
    children,
}: ProfilePageProps) => {


    return (
        <DynamicModuleFolder reducers={initialReducers} removeAfterUnmount={true}>
            <div>
                PROFILE PAGE
                {children}
            </div>
        </DynamicModuleFolder>
    )
}

export default ProfilePage