import { StoreProvider } from './ui/StoreProvider';
import { createReduxStore } from './config/store';
import type { StateSchema } from './config/StateShema';
import type { ReduxStoreWitnManager } from './config/StateShema';
import type { AppDispatch } from './config/store';

export { StoreProvider, createReduxStore };
export type { StateSchema, ReduxStoreWitnManager, AppDispatch };
