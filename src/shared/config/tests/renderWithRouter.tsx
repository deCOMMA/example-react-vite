import { StoreProvider, type StateSchema } from '@/app/providers/Store';
import type { DeepPartial } from '@/shared/helpers/types/deepPartial';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

type renderWithRouterProps = {
    initialState?: DeepPartial<StateSchema>;
};

export function renderWithRouter(component: React.ReactNode, props: renderWithRouterProps = {}) {
    const { initialState } = props;

    return render(
        <StoreProvider initialState={initialState as StateSchema}>
            <MemoryRouter initialEntries={['/']}>{component}</MemoryRouter>
        </StoreProvider>
    );
}
