import { StoreProvider } from './ui/StoreProvider';
import { createReduxStore } from './config/store';
import type { StateSchema } from './config/StateShema';
import type { ReduxStoreWitnManager } from './config/StateShema';
import type { AppDispatch } from './config/store';
import type { ThunkExtraArg } from './config/StateShema';
import type { ThunkConfig } from './config/StateShema';

export { StoreProvider, createReduxStore };
export type { StateSchema, ReduxStoreWitnManager, AppDispatch, ThunkExtraArg, ThunkConfig };
