import type { StateSchema } from "@/app/providers/Store";
import type { DeepPartial } from "@/shared/helpers/types/deepPartial";
import { expect } from "storybook/test";
import { describe, test } from "vitest";
import { getProfileError } from "./getProfileErros";


describe('getProfileError', () => {
    test('should retutn error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: 'error'
            }
        }
        expect(getProfileError(state as StateSchema)).toEqual('error')
    })
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
            }
        }
        expect(getProfileError(state as StateSchema)).toEqual("")
    })
})