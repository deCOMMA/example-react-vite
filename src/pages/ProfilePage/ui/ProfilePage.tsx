
type ProfilePageProps = {
    children?: React.ReactNode;
}

const ProfilePage = ({
    children,
}: ProfilePageProps) => {


    return (
        <div>
            PROFILE PAGE
            {children}
        </div>
    )
}

export default ProfilePage