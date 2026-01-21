import { ThemeProvider } from '@/app/providers/theme/ThemeProvider';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n/i18n';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider, type StateSchema } from '@/app/providers/Store';
import type { DeepPartial } from '@/shared/helpers/types/deepPartial';
import type { ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducer } from '@/features/AuthByUserName';
import { profileReducer } from '@/entities/Profile';
import { articleDetailsReducer } from '@/entities/Article';

type RouterDecoratorProps = {
    theme?: 'normal' | 'dark' | 'black';
    state?: DeepPartial<StateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
};

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
};

export const RouterDecorator = ({
    theme = 'normal',
    state,
    asyncReducers,
}: RouterDecoratorProps = {}) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (Story: any) => (
        <BrowserRouter>
            <StoreProvider
                initialState={state as StateSchema}
                asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
            >
                <I18nextProvider i18n={i18n}>
                    <ThemeProvider>
                        <div className={`app ${theme}`}>
                            <Story />
                        </div>
                    </ThemeProvider>
                </I18nextProvider>
            </StoreProvider>
        </BrowserRouter>
    );
};
