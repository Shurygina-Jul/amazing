import { createStore } from "effector";
import { Session } from "store/shared/api";

// When store `$session` is updated, store `$isLogged` will be updated too
// They are in sync. Derived store are depends on data from original.
export const $session = createStore<Session | null>(null);
export const $isLogged = $session.map((session) => session !== null);
