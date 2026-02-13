import type { Currency } from '@/entities/Currency';
import type { Country } from '@/entities/Country';

export interface Profile {
    id?: string;
    firstname?: string;
    lastname?: string;
    age?: number;
    currency?: Currency;
    country?: Country;
    username?: string;
    avatar?: string;
    city?: string;
}

export type ProfileUpdate = Partial<Omit<Profile, 'id'>>;

export type ProfileValue = string | number | Currency | Country | undefined;

export interface ProfileShema {
    data?: Profile;
    form?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
    validateErrors?: validateProfileError[];
}

export enum validateProfileError {
    INCORECT_USER_DATA = 'INCORECT_USER_DATA',
    INCORECT_AGE = 'INCORECT_AGE',
    INCORECT_COUNTRY = 'INCORECT_COUNTRY',
    NO_DATA = 'NO_DATA',
    SERVER_ERROR = 'SERVER_ERROR',
}
