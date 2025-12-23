import type { Country } from "@/shared/const/common";

export interface Profile {
    firstname: string,
    lastname: string,
    age: number,
    currency: string,
    country: Country,
    username: string,
    avatar: string,
}

export interface ProfileShema {
    data?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
}