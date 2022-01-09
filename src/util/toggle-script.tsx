import React, {ReactElement} from 'react';

const ThemeScript = (): ReactElement => (
    <script
        dangerouslySetInnerHTML={{
            __html: `
                (function () {
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

                    systemPreferences.addListener((event) =>
                        window.__setTheme(event.matches ? 'dark' : 'light')
                    );

                    setTheme(preferredTheme || (systemPreferences.matches ? 'dark' : 'light'));
                })();
            `,
        }}
    />
);

export default ThemeScript;
