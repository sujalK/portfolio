/* CV choice modal (web / PDF) + panel open/close */

function setupCvPanel() {
    const panel = document.querySelector('.cv-panel');
    const choiceModal = document.querySelector('.cv-choice-modal');
    const choiceTriggers = Array.from(document.querySelectorAll('.cv-choice-open'));
    const choiceClose = choiceModal ? choiceModal.querySelector('.cv-choice-close') : null;
    const choiceOverlay = choiceModal ? choiceModal.querySelector('.modal-overlay') : null;
    const webOption = choiceModal ? choiceModal.querySelector('.cv-choice-web') : null;
    const pdfOption = choiceModal ? choiceModal.querySelector('.cv-choice-pdf') : null;
    const exitLink = document.querySelector('.cv-panel-exit');
    const content = panel ? panel.querySelector('.cv-panel-content') : null;
    const CV_WEB_HASH = 'cv-web';
    let syncingHash = false;

    if (!panel || !content) {
        return;
    }

    function getHashName() {
        return (window.location.hash || '').replace(/^#/, '').toLowerCase();
    }

    function setCvWebHash() {
        if (getHashName() === CV_WEB_HASH) {
            return;
        }

        syncingHash = true;
        if (window.history && window.history.replaceState) {
            window.history.replaceState(null, '', '#' + CV_WEB_HASH);
        } else {
            window.location.hash = CV_WEB_HASH;
        }
        syncingHash = false;
    }

    function clearCvWebHash() {
        if (getHashName() !== CV_WEB_HASH) {
            return;
        }

        syncingHash = true;
        if (window.history && window.history.replaceState) {
            window.history.replaceState(null, '', window.location.pathname + window.location.search);
        } else {
            window.location.hash = '';
        }
        syncingHash = false;
    }

    function closeMobileNav() {
        const mobileNavbar = document.querySelector('.mobile-navbar');
        const hamburgerMenu = document.querySelector('.hamburger-menu');
        if (mobileNavbar) {
            mobileNavbar.classList.remove('show');
        }
        if (hamburgerMenu) {
            hamburgerMenu.classList.remove('active');
        }
    }

    function openChoiceModal(event) {
        if (event) {
            event.preventDefault();
        }

        if (!choiceModal) {
            openPanel();
            return;
        }

        choiceModal.classList.add('show');
        choiceModal.setAttribute('aria-hidden', 'false');
        choiceModal.inert = false;
        document.body.style.overflow = 'hidden';
        closeMobileNav();
    }

    function closeChoiceModal() {
        if (!choiceModal) {
            return;
        }

        choiceModal.classList.remove('show');
        choiceModal.setAttribute('aria-hidden', 'true');
        choiceModal.inert = true;

        if (!panel.classList.contains('show')) {
            document.body.style.overflow = '';
        }
    }

    function openPanel(event) {
        if (event) {
            event.preventDefault();
        }

        closeChoiceModal();
        panel.classList.add('show');
        panel.setAttribute('aria-hidden', 'false');
        panel.inert = false;
        document.body.classList.add('cv-panel-open-body');
        document.body.style.overflow = 'hidden';
        panel.scrollTop = 0;
        closeMobileNav();
        setCvWebHash();
    }

    function closePanel(event) {
        if (event) {
            event.preventDefault();
        }

        panel.classList.remove('show');
        panel.setAttribute('aria-hidden', 'true');
        panel.inert = true;
        document.body.classList.remove('cv-panel-open-body');
        document.body.style.overflow = '';
        clearCvWebHash();
    }

    function openPanelFromHash() {
        if (getHashName() === CV_WEB_HASH) {
            openPanel();
        }
    }

    function exportPdf() {
        if (!pdfOption) {
            return;
        }

        const link = document.createElement('a');
        link.href = './files/Sujal-Khatiwada-CV.pdf';
        link.download = 'Sujal-Khatiwada-CV.pdf';
        link.rel = 'noopener';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        closeChoiceModal();
        document.body.style.overflow = '';
    }

    choiceTriggers.forEach(function(trigger) {
        trigger.addEventListener('click', openChoiceModal);
    });

    if (choiceClose) {
        choiceClose.addEventListener('click', closeChoiceModal);
    }

    if (choiceOverlay) {
        choiceOverlay.addEventListener('click', closeChoiceModal);
    }

    if (webOption) {
        webOption.addEventListener('click', openPanel);
    }

    if (pdfOption) {
        pdfOption.addEventListener('click', exportPdf);
    }

    if (exitLink) {
        exitLink.addEventListener('click', closePanel);
    }

    window.addEventListener('hashchange', function() {
        if (syncingHash) {
            return;
        }

        if (getHashName() === CV_WEB_HASH) {
            openPanel();
            return;
        }

        if (panel.classList.contains('show')) {
            closePanel();
        }
    });

    document.addEventListener('keydown', function(event) {
        if (event.key !== 'Escape') {
            return;
        }

        if (panel.classList.contains('show')) {
            closePanel();
            return;
        }

        if (choiceModal && choiceModal.classList.contains('show')) {
            closeChoiceModal();
        }
    });

    openPanelFromHash();
}

document.addEventListener('DOMContentLoaded', setupCvPanel);
