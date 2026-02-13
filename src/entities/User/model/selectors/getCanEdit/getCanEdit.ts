import { getProfileData } from '@/entities/User';
import { getAuthUserData } from '@/entities/User';
import { createSelector } from '@reduxjs/toolkit';

export const getCanEdit = createSelector(
    getAuthUserData,
    getProfileData,
    (authData, profileData) => {
        if (!authData || !profileData) {
            return false;
        }
        const canEdit = authData.id === profileData.id;
        //const isAdmin = authData.role == 'ADMIN';
        return canEdit;
    }
);
