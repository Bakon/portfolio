/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useState } from 'react';
import createPersistedState from 'use-persisted-state';

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};

const mockElement = {
    classList: {
        add: noop,
        remove: noop,
    },
};

const preferDarkQuery = '(prefers-color-scheme: dark)';

const initialize = (storageKey, storageProvider, glbl = global) => {
    const usePersistedDarkModeState = storageKey
        ? createPersistedState(storageKey, storageProvider)
        : useState;

    const mql = glbl.matchMedia ? glbl.matchMedia(preferDarkQuery) : {};

    const mediaQueryEventTarget = {
        addEventListener: (_, handler) => mql.addListener && mql.addListener(handler),
        removeEventListener: (_, handler) =>
            mql.removeListener && mql.removeListener(handler),
    };

    const isColorSchemeQuerySupported = mql.media === preferDarkQuery;

    const getInitialValue = (usersInitialState) =>
        isColorSchemeQuerySupported ? mql.matches : usersInitialState;

    // Mock element if SSR else real body element.
    const defaultElement = (glbl.document && glbl.document.body) || mockElement;

    const getDefaultOnChange = (
        element = defaultElement,
        classNameDark = 'dark',
        classNameLight = 'light'
    ) => (val) => {
        element.classList.add(val ? classNameDark : classNameLight);
        element.classList.remove(val ? classNameLight : classNameDark);
    };

    return {
        usePersistedDarkModeState,
        getDefaultOnChange,
        mediaQueryEventTarget,
        getInitialValue,
    };
};

export default initialize;
