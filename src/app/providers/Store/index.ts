import { StoreProvider } from './ui/StoreProvider';
import { createReduxStore } from './config/store';
import type { StateSchema } from './config/StateShema';
import type { ReduxStoreWitnManager } from './config/StateShema';

export { StoreProvider, createReduxStore };
export type { StateSchema, ReduxStoreWitnManager };
