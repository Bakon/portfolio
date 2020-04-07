import { useEffect, useCallback, useMemo } from 'react';
import useEventListener from './event-listener';

import initialize from './initialize';

const useDarkMode = (
    initialValue = false,
    {
        element,
        classNameDark,
        classNameLight,
        onChange,
        storageKey = 'dark-mode',
        storageProvider,
        global,
    } = {}
) => {
    const {
        usePersistedDarkModeState,
        getDefaultOnChange,
        getInitialValue,
        mediaQueryEventTarget,
    } = useMemo(() => initialize(storageKey, storageProvider, global), [
        storageKey,
        storageProvider,
        global,
    ]);

    const [state, setState] = usePersistedDarkModeState(getInitialValue(initialValue));

    const stateChangeCallback = useMemo(
        () => onChange || getDefaultOnChange(element, classNameDark, classNameLight),
        [onChange, element, classNameDark, classNameLight, getDefaultOnChange]
    );

    // Call the onChange handler
    useEffect(() => {
        stateChangeCallback(state);
    }, [stateChangeCallback, state]);

    // Listen for media changes and set state.
    useEventListener('change', ({ matches }) => setState(matches), mediaQueryEventTarget);

    return {
        value: state,
        toggle: useCallback(() => setState((current) => !current), [setState]),
    };
};

export default useDarkMode;
