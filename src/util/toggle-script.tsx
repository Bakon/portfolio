import React, {ReactElement} from 'react';

// a common issue with dark mode is that on initial render, the screen is white.
// we inject this script before that initial render so that won't happen.
export const ThemeScript = (): ReactElement => (
    <script
        dangerouslySetInnerHTML={{
            __html: `
                (function() {
                    window.__onThemeChange = () => {};
                    let preferredTheme;

                    function setTheme(newTheme) {
                        window.__theme = newTheme;
                        preferredTheme = newTheme;
                        document.body.className = newTheme;
                        window.__onThemeChange(newTheme);
                    }

                    try {
                        preferredTheme = localStorage.getItem('theme');
                    } catch (error) {}

                    window.__setTheme = (newTheme) => {
                        setTheme(newTheme);

                        try {
                            localStorage.setItem('theme', newTheme);
                        } catch (error) {
                            console.warn({error});
                        }
                    };

                    const systemPreferences = window.matchMedia('(prefers-color-scheme: dark)');

                    systemPreferences.addListener((event) => {
                        return window.__setTheme(event.matches ? 'dark' : 'light');
                    })

                    setTheme(preferredTheme || (systemPreferences.matches ? 'dark' : 'light'));
                })();
            `,
        }}
    />
);
