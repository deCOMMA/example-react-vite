import { validateProfileError, type Profile } from '../../types/profile';

export const validateProfileData = (profile?: Profile) => {
    if (!profile) {
        return [validateProfileError.NO_DATA];
    }

    const { lastname, firstname, country, age } = profile;
    const errors: validateProfileError[] = [];

    if (!firstname || !lastname) {
        errors.push(validateProfileError.INCORECT_USER_DATA);
    }

    if (!age || !Number.isInteger(age)) {
        errors.push(validateProfileError.INCORECT_AGE);
    }

    if (!country) {
        errors.push(validateProfileError.INCORECT_COUNTRY);
    }

    return errors;
};
