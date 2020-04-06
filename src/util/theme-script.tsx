import React, { ReactElement } from 'react';

// The script must be injected BEFORE the rendering of the pages.
// If the user / system prefers a dark theme, the background color must be set beforehand.

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

                    var systemPreferences = window.matchMedia('(prefers-color-scheme: dark)');

                    systemPreferences.addListener(function(event) {
                        window.__setPreferredTheme(event.matches ? 'dark' : 'light');
                    });

                    setTheme(preferredTheme || (systemPreferences.matches ? 'dark' : 'light'));
                })();
            `,
        }}
    />
);

export default ThemeScript;
