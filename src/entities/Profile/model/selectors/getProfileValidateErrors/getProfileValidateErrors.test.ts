import type { StateSchema } from "@/app/providers/Store";
import type { DeepPartial } from "@/shared/helpers/types/deepPartial";
import { expect } from "storybook/test";
import { describe, test } from "vitest";
import { getProfileValidateErrors } from "./getProfileValidateErrors";
import { validateProfileError } from "../../types/profile";



describe('getProfileValidateErrors', () => {
    test('should retutn readonly', () => {
        const validateErrors: validateProfileError[] = [validateProfileError.INCORECT_AGE, validateProfileError.NO_DATA]
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: validateErrors
            }
        }
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(validateErrors)
    })
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = { profile: {} }
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined)
    })
})