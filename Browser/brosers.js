// This script is meant to run in a browser. If executed in Node (or
// another non-DOM environment) we avoid touching `document` so it
// doesn't throw ReferenceError.
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
        const select = document.getElementById('select');
        const squares = [
            document.getElementById('div'),
            document.getElementById('div2'),
            document.getElementById('div3'),
        ];

        function applyBlend(mode) {
            squares.forEach(sq => {
                if (sq) sq.style.backgroundBlendMode = mode;
            });
        }

        if (!select) {
            console.warn('No #select element found. Aborting blend setup.');
            return;
        }

        const getMode = () => select.value || (select.options[select.selectedIndex] && select.options[select.selectedIndex].text || '').trim();

        select.addEventListener('change', () => {
            applyBlend(getMode());
        });

        // Initialize on load
        applyBlend(getMode());

        // Helpful debug logs (browser only)
        console.log('squares:', squares);
        console.log('document.URL:', document.URL);
        console.log('document.title:', document.title);
        console.log('document:', document.all[4]);
        document.all[4].textContent = 'Hello World';
        console.log(document.getElementById('div'));
        var div = document.getElementById('div');
        console.log('div:', div);
    });
} else {
    // Running in Node or non-browser environment: provide a harmless export
    // so requiring this file doesn't crash other scripts.
    module.exports = { isBrowser: false };
}
