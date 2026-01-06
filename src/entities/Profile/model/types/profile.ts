import type { Country } from "@/shared/const/common";

export interface Profile {
    firstname?: string,
    lastname?: string,
    age?: number,
    currency?: string,
    country?: Country,
    username?: string,
    avatar?: string,
    city?: string,
}

export interface ProfileShema {
    data?: Profile;
    form?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
}