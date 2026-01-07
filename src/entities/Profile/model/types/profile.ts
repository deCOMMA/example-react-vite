import type { Currency } from "@/entities/Currency";
import type { Country } from "@/entities/Country";

export interface Profile {
    firstname?: string,
    lastname?: string,
    age?: number,
    currency?: Currency,
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