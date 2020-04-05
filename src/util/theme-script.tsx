import React, { ReactElement } from 'react';

const ThemeScript = (): ReactElement => (
    <script
        dangerouslySetInnerHTML={{
            __html: `
                (function() {
                    window.__onThemeChange = function() {};

                    function setTheme(newTheme) {
                        window.__theme = newTheme;
                        preferredTheme = newTheme;
                        document.body.className = newTheme;
                        window.__onThemeChange(newTheme);
                    }

                    var preferredTheme;

                    try { 
                        preferredTheme = localStorage.getItem('theme');
                    } catch (error) {}
                    
                    window.__setPreferredTheme = function(newTheme) {
                        setTheme(newTheme);

                        try {
                            localStorage.setItem('theme', newTheme);
                        } catch (error) {}
                    }

                    var systemPreference = window.matchMedia('(prefers-color-scheme: dark)');

                    systemPreference.addListener(function(event) {
                        window.__setPreferredTheme(event.matches ? 'dark' : 'light');
                    });

                    setTheme(preferredTheme || (systemPreference.matches ? 'dark' : 'light'));
                })();
            `,
        }}
    />
);

export default ThemeScript;
