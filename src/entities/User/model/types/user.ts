export interface User {
    id: string;
    username: string;
    avatar?: string;
    role?: Role;
}

export interface UserShema {
    authData?: User;
    _inited: boolean;
}

enum Role {
    'USER' = 'USER',
    'ADMIN' = 'ADMIN',
}
