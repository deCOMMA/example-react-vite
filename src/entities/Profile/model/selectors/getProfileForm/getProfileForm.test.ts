import type { StateSchema } from "@/app/providers/Store";
import type { DeepPartial } from "@/shared/helpers/types/deepPartial";
import { expect } from "storybook/test";
import { describe, test } from "vitest";
import { getProfileForm } from "./getProfileForm";
import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";
import AvatarImg from '@/shared/ui/Avatar/storybook.jpg'


describe('getProfileForm', () => {
    test('should retutn form', () => {
        const form = {
            username: 'decomma',
            age: 23,
            country: Country.Russia,
            avatar: AvatarImg,
            city: 'Voronezh',
            currency: Currency.RUB,
            firstname: 'Имя',
            lastname: 'Фамилия',
        }
        const state: DeepPartial<StateSchema> = {
            profile: {
                form: form
            }
        }
        expect(getProfileForm(state as StateSchema)).toEqual(form)
    })
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
            }
        }
        expect(getProfileForm(state as StateSchema)).toEqual(undefined)
    })
})