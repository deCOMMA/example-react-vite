import { StoreProvider, type StateSchema } from '@/app/providers/Store';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

type renderWithRouterProps = {
    initialState?: StateSchema;
};

export function renderWithRouter(component: React.ReactNode, props: renderWithRouterProps = {}) {
    const { initialState } = props;

    return render(
        <StoreProvider initialState={initialState}>
            <MemoryRouter initialEntries={['/']}>{component}</MemoryRouter>
        </StoreProvider>
    );
}
