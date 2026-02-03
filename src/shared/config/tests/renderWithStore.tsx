// shared/config/tests/renderWithStore.tsx
import { StoreProvider, type StateSchema } from '@/app/providers/Store';
import type { DeepPartial } from '@/shared/helpers/types/deepPartial';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

type RenderWithStoreOptions = {
    initialState?: DeepPartial<StateSchema>;
    route?: string;
};

export function renderWithStore(
    component: React.ReactElement,
    options: RenderWithStoreOptions = {}
) {
    const { initialState, route = '/' } = options;

    return render(
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider initialState={initialState as StateSchema}>{component}</StoreProvider>
        </MemoryRouter>
    );
}
