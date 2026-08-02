/* Site UI: mobile nav, section highlighting, contact/proofs modals, footer year */
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mobileNavbar = document.querySelector('.mobile-navbar');
    const mobileLinks = Array.from(document.querySelectorAll('.mobile-navbar a'));
    const currentYear = document.querySelector('.current-year');
    const modalTriggers = Array.from(document.querySelectorAll('.contact-modal-open'));
    const contactModal = document.querySelector('.contact-modal');
    const proofsTriggers = Array.from(document.querySelectorAll('.proofs-modal-open'));
    const proofsModal = document.querySelector('.proofs-modal');

    if (!hamburgerMenu || !mobileNavbar || !contactModal || !proofsModal) {
        return;
    }

    const modalOverlay = contactModal.querySelector('.modal-overlay');
    const modalClose = contactModal.querySelector('.modal-close');

    // mobile navigation
    hamburgerMenu.addEventListener('click', function() {
        mobileNavbar.classList.toggle('show');
        this.classList.toggle('active');
    });

    mobileLinks.forEach(function(el) {
        el.addEventListener('click', function() {
            mobileNavbar.classList.remove('show');
            hamburgerMenu.classList.remove('active');
        });
    });

    // navigation: highlight the section currently in view
    const sectionNavLinks = Array.from(document.querySelectorAll(
        '.navbar a[href^="#"], .mobile-navbar-container a[href^="#"]'
    )).filter(function(link) {
        const href = link.getAttribute('href');
        return href
            && href.length > 1
            && !link.classList.contains('btn')
            && document.querySelector(href);
    });

    function setActiveNav(sectionId) {
        sectionNavLinks.forEach(function(link) {
            const isMatch = link.getAttribute('href') === '#' + sectionId;
            link.classList.toggle('is-active', isMatch);
        });
    }

    const observedSections = Array.from(new Set(
        sectionNavLinks.map(function(link) {
            return document.querySelector(link.getAttribute('href'));
        })
    )).filter(Boolean);

    if (observedSections.length) {
        const navObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    setActiveNav(entry.target.id);
                }
            });
        }, {
            rootMargin: '-35% 0px -55% 0px',
            threshold: 0
        });

        observedSections.forEach(function(section) {
            navObserver.observe(section);
        });

        sectionNavLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                setActiveNav(link.getAttribute('href').slice(1));
            });
        });
    }

    // contact modal
    function openContactModal(event) {
        event.preventDefault();
        contactModal.classList.add('show');
        document.body.classList.add('modal-open');
    }

    function closeContactModal() {
        contactModal.classList.remove('show');
        document.body.classList.remove('modal-open');
    }

    modalTriggers.forEach(function(el) {
        el.addEventListener('click', openContactModal);
    });

    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeContactModal);
    }

    if (modalClose) {
        modalClose.addEventListener('click', closeContactModal);
    }

    // proofs modal
    function closeProofsModal() {
        proofsModal.classList.remove('show');
        document.body.classList.remove('modal-open');
    }

    proofsTriggers.forEach(function(el) {
        el.addEventListener('click', function() {
            proofsModal.classList.add('show');
            document.body.classList.add('modal-open');
        });
    });

    const proofsOverlay = proofsModal.querySelector('.modal-overlay');
    const proofsClose = proofsModal.querySelector('.modal-close');

    if (proofsOverlay) {
        proofsOverlay.addEventListener('click', closeProofsModal);
    }

    if (proofsClose) {
        proofsClose.addEventListener('click', closeProofsModal);
    }

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeContactModal();
            closeProofsModal();
        }
    });

    // footer: current year
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }
});
