import { lazy, type FC } from 'react';
import type { LoginFormProps } from './LoginForm';

export const LoginFormAsync = lazy<FC<LoginFormProps>>(() => new Promise((resolve) => {
    setTimeout(() => resolve(import('./LoginForm')), 1500)
}));
