async function loadModule() {
    try {
        let module = await import('../../../dylanas/js/layout.js');

        module.displayHeader();
        module.displayFooter();
    } catch {
        document.querySelector('site-header').innerHTML = '<h1>DylaNAS</h1>';
        document.querySelector('site-footer').innerHTML = '<p>© 2026 Dylan MESNAGE</p>';
    }
}

loadModule();