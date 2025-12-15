import { StoreProvider, type StateSchema } from '@/app/providers/Store';
import type { DeepPartial } from '@/shared/helpers/types/deepPartial';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

type renderWithStoreProps = {
    initialState?: DeepPartial<StateSchema>;
};

export function renderWithStore(component: React.ReactNode, props: renderWithStoreProps = {}) {
    const { initialState } = props;

    return render(
        <StoreProvider initialState={initialState as StateSchema}>
            <MemoryRouter initialEntries={['/']}>{component}</MemoryRouter>
        </StoreProvider>
    );
}
