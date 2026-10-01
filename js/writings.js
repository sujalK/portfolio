/* LinkedIn writings data + renderer
   Add a new post object to linkedInPosts — the featured card,
   right-hand list (max LIST_LIMIT), and expandable cards are built automatically. */

const linkedInPosts = [
    {
        title: 'Creating a PHP SDK: API Request to Friendly Developer Response',
        meta: 'PHP · SDK · Sep 2026',
        url: 'https://www.linkedin.com/pulse/creating-php-sdk-api-request-friendly-developer-sujal-khatiwada-szihc/',
        image: './images/blog/php-sdk-article.svg',
        imageAlt: 'PHP SDK flow from ApiClient search call to structured ApiData objects',
        badge: 'Article',
        isArticle: true
    },
    {
        title: 'How modern libraries and frameworks use the Builder Pattern under the hood',
        meta: 'Design patterns · LinkedIn post',
        url: 'https://www.linkedin.com/posts/sujal-k-0b3b04126_ever-wondered-how-modern-libraries-or-frameworks-activity-7344085766219681793-n4Au?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB8hv4cBsjMQg7RY5VwddYAHhd6MHawxW-U',
        image: './images/blog/builder-pattern.svg',
        imageAlt: 'Builder pattern with fluent chained methods and a factory in PHP',
        badge: 'LinkedIn',
        isVideo: true
    },
    {
        title: 'PHP 8.4 — Feature that lets us parse HTML 5 code in PHP through HTML 5-compliant parser',
        meta: 'PHP · LinkedIn post',
        url: 'https://www.linkedin.com/posts/sujal-k-0b3b04126_php-softwaredevelopment-softwareengineering-activity-7266228902442754048-NprS?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB8hv4cBsjMQg7RY5VwddYAHhd6MHawxW-U',
        image: './images/blog/html5-parser.svg',
        imageAlt: 'PHP 8.4 HTML 5 parser LinkedIn post',
        badge: 'LinkedIn'
    },
    {
        title: 'Decorator Pattern in a Symfony project: extending behavior without changing the core',
        meta: 'Symfony · Design patterns · LinkedIn post',
        url: 'https://www.linkedin.com/feed/update/urn:li:activity:7334437775456260096/',
        image: './images/blog/symfony-decorator-pattern.svg',
        imageAlt: 'PersistProcessor wrapped by UserStateProcessor using the Decorator Pattern',
        badge: 'LinkedIn',
        isVideo: true
    },
    {
        title: 'Design Principle: IoC (Inversion of Control)',
        meta: 'Symfony · Design principles · LinkedIn post',
        url: 'https://www.linkedin.com/posts/sujal-k-0b3b04126_design-principle-ioc-inversion-of-control-share-7323732189471227905-47VU/',
        image: './images/blog/inversion-of-control.svg',
        imageAlt: 'Inversion of Control with a container injecting UserRepository',
        badge: 'LinkedIn'
    },
    {
        title: 'PHP 8.4 (A recent release) “Asymmetric visibility”',
        meta: 'PHP · LinkedIn post',
        url: 'https://www.linkedin.com/posts/sujal-k-0b3b04126_php-programming-coding-activity-7264871814432985088-vIEc?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB8hv4cBsjMQg7RY5VwddYAHhd6MHawxW-U',
        image: './images/blog/asymmetric-visibility.svg',
        imageAlt: 'PHP 8.4 public private(set) asymmetric visibility code illustration',
        badge: 'LinkedIn'
    },
    {
        title: 'PHP 8.4 Brings an Object-Oriented Approach to BCMath',
        meta: 'PHP · LinkedIn post',
        url: 'https://www.linkedin.com/posts/sujal-k-0b3b04126_php-84-brings-an-object-oriented-approach-activity-7296477614376923136-E8ov?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB8hv4cBsjMQg7RY5VwddYAHhd6MHawxW-U',
        image: './images/blog/bcmath-object-oriented.svg',
        imageAlt: 'PHP 8.4 BcMath\\Number objects used with arithmetic operators',
        badge: 'LinkedIn',
        isVideo: true
    },
    {
        title: 'PHP again, but 8.0; the catch exceptions without using the exception object',
        meta: 'PHP · LinkedIn post',
        url: 'https://www.linkedin.com/posts/sujal-k-0b3b04126_php-again-but-80-in-php-80-and-above-activity-7296805249917337600-zAql?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB8hv4cBsjMQg7RY5VwddYAHhd6MHawxW-U',
        image: './images/blog/php80-catch-exceptions.svg',
        imageAlt: 'PHP 8.0 catch Exception without unused variable illustration',
        badge: 'LinkedIn',
        isVideo: true
    },
    {
        title: 'PHP 8.4 — Another simple but interesting feature is array_find()',
        meta: 'PHP · LinkedIn post',
        url: 'https://www.linkedin.com/posts/sujal-k-0b3b04126_php-softwaredevelopment-softwareengineering-activity-7265886799166619648-FwrY?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB8hv4cBsjMQg7RY5VwddYAHhd6MHawxW-U',
        image: './images/blog/array-find.svg',
        imageAlt: 'PHP 8.4 array_find first matching value code illustration',
        badge: 'LinkedIn'
    },
    {
        title: 'PHP 8.4, “Property Hooks”',
        meta: 'PHP · LinkedIn post',
        url: 'https://www.linkedin.com/posts/sujal-k-0b3b04126_php-softwaredevelopment-softwareengineering-activity-7265546149841764352-ssoI?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB8hv4cBsjMQg7RY5VwddYAHhd6MHawxW-U',
        image: './images/blog/property-hooks.svg',
        imageAlt: 'PHP 8.4 property hooks code illustration',
        badge: 'LinkedIn'
    },
    {
        title: 'PHP Interfaces & my battle',
        meta: 'OOP · LinkedIn post',
        url: 'https://www.linkedin.com/posts/sujal-k-0b3b04126_softwaredevelopment-oop-activity-7278565827698704384-r2Mq?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB8hv4cBsjMQg7RY5VwddYAHhd6MHawxW-U',
        image: './images/blog/interface-battle.svg',
        imageAlt: 'PHP Interfaces and my battle — fighter versus interface contract',
        badge: 'LinkedIn'
    }
];

const LIST_LIMIT = 4;

function linkedInFormatLabel(post) {
    if (post.isArticle) {
        return 'LinkedIn article';
    }
    if (post.isVideo) {
        return 'Video Post';
    }
    return 'Text Post';
}

function linkedInOpenLabel(post) {
    return post.isArticle ? 'Open LinkedIn article' : 'Open LinkedIn post';
}

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function renderMetaLine(post) {
    const meta = escapeHtml(post.meta);
    const format = linkedInFormatLabel(post);
    return `${meta} <span class="blog-meta-format">· ${format}</span>`;
}

function renderImagePreviewControl(postIndex) {
    return `
        <span class="writing-image-preview"
            role="button"
            tabindex="0"
            data-post-index="${postIndex}"
            aria-label="View image in full screen">
            <i class="fa-solid fa-expand" aria-hidden="true"></i>
            View image
        </span>
    `;
}

function renderFeaturedCard(post, postIndex) {
    return `
        <a href="${escapeHtml(post.url)}"
            class="blog-featured"
            target="_blank"
            rel="noopener">
            <div class="img-container">
                <img src="${escapeHtml(post.image)}" alt="${escapeHtml(post.imageAlt || post.title)}">
                <span class="chip badge-outline">${escapeHtml(post.badge || 'LinkedIn')}</span>
                ${renderImagePreviewControl(postIndex)}
            </div>
            <div class="txt-container">
                <p class="blog-meta">${renderMetaLine(post)}</p>
                <p class="blog-title">${escapeHtml(post.title)}</p>
                <span class="blog-read-more">
                    ${linkedInOpenLabel(post)}
                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </span>
            </div>
        </a>
    `;
}

function renderListItem(post, postIndex) {
    return `
        <a href="${escapeHtml(post.url)}"
            class="blog-item"
            target="_blank"
            rel="noopener">
            <div class="img-container">
                <img src="${escapeHtml(post.image)}" alt="${escapeHtml(post.imageAlt || post.title)}">
                ${renderImagePreviewControl(postIndex)}
            </div>
            <div class="txt-container">
                <p class="blog-meta">${renderMetaLine(post)}</p>
                <p class="blog-title">${escapeHtml(post.title)}</p>
                <span class="blog-read-more blog-read-more-inline">
                    ${linkedInOpenLabel(post)}
                    <i class="fa-solid fa-arrow-right"></i>
                </span>
            </div>
        </a>
    `;
}

function renderMoreCard(post, index) {
    const postIndex = LIST_LIMIT + 1 + index;

    return `
        <a href="${escapeHtml(post.url)}"
            class="writing-card"
            style="--card-index: ${index}"
            target="_blank"
            rel="noopener">
            <div class="img-container">
                <img src="${escapeHtml(post.image)}" alt="${escapeHtml(post.imageAlt || post.title)}">
                <span class="chip badge-outline">${escapeHtml(post.badge || 'LinkedIn')}</span>
                ${renderImagePreviewControl(postIndex)}
            </div>
            <div class="txt-container">
                <p class="blog-meta">${renderMetaLine(post)}</p>
                <p class="blog-title">${escapeHtml(post.title)}</p>
                <span class="blog-read-more blog-read-more-inline">
                    ${linkedInOpenLabel(post)}
                    <i class="fa-solid fa-arrow-right"></i>
                </span>
            </div>
        </a>
    `;
}

function createWritingPreviewModal() {
    const modal = document.createElement('div');
    modal.className = 'writing-preview-modal';
    modal.inert = true;
    modal.innerHTML = `
        <div class="writing-preview-backdrop" data-preview-close></div>
        <div class="writing-preview-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="writing-preview-title">
            <button class="writing-preview-close"
                type="button"
                data-preview-close
                aria-label="Close full-screen image">
                <i class="fa-solid fa-xmark" aria-hidden="true"></i>
            </button>
            <div class="writing-preview-image-wrap">
                <img class="writing-preview-image" src="" alt="">
            </div>
            <div class="writing-preview-content">
                <p class="writing-preview-kicker">Writing preview</p>
                <h3 class="writing-preview-title" id="writing-preview-title"></h3>
                <p class="writing-preview-meta"></p>
                <a class="writing-preview-read-more" href="" target="_blank" rel="noopener">
                    Open LinkedIn post
                    <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
                </a>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    return modal;
}

function setupWritingPreview() {
    const modal = createWritingPreviewModal();
    const modalImage = modal.querySelector('.writing-preview-image');
    const modalTitle = modal.querySelector('.writing-preview-title');
    const modalMeta = modal.querySelector('.writing-preview-meta');
    const modalLink = modal.querySelector('.writing-preview-read-more');
    const closeButton = modal.querySelector('.writing-preview-close');
    let lastFocusedElement = null;

    function openPreview(postIndex, trigger) {
        const post = linkedInPosts[postIndex];
        if (!post) {
            return;
        }

        lastFocusedElement = trigger;
        modalImage.src = post.image;
        modalImage.alt = post.imageAlt || post.title;
        modalTitle.textContent = post.title;
        modalMeta.textContent = `${post.meta} · ${linkedInFormatLabel(post)}`;
        modalLink.href = post.url;
        modalLink.innerHTML = `${linkedInOpenLabel(post)} <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>`;
        modal.classList.add('is-open');
        modal.inert = false;
        document.body.classList.add('writing-preview-open');
        closeButton.focus();
    }

    function closePreview() {
        if (!modal.classList.contains('is-open')) {
            return;
        }

        modal.classList.remove('is-open');
        modal.inert = true;
        document.body.classList.remove('writing-preview-open');
        modalImage.src = '';

        if (lastFocusedElement) {
            lastFocusedElement.focus();
        }
    }

    document.addEventListener('click', function(event) {
        const trigger = event.target.closest('.writing-image-preview');
        if (!trigger) {
            return;
        }

        event.preventDefault();
        event.stopPropagation();
        openPreview(Number(trigger.dataset.postIndex), trigger);
    });

    document.addEventListener('keydown', function(event) {
        const trigger = event.target.closest('.writing-image-preview');

        if (trigger && (event.key === 'Enter' || event.key === ' ')) {
            event.preventDefault();
            event.stopPropagation();
            openPreview(Number(trigger.dataset.postIndex), trigger);
            return;
        }

        if (event.key === 'Escape') {
            closePreview();
        }
    });

    modal.addEventListener('click', function(event) {
        if (event.target.closest('[data-preview-close]')) {
            closePreview();
        }
    });
}

function renderWritings() {
    const grid = document.getElementById('writings-grid');
    const moreWrap = document.getElementById('writings-more-wrap');

    if (!grid || !linkedInPosts.length) {
        return;
    }

    const [featured, ...rest] = linkedInPosts;
    const listPosts = rest.slice(0, LIST_LIMIT);
    const morePosts = rest.slice(LIST_LIMIT);

    grid.classList.toggle('blog-grid-single', listPosts.length === 0);

    let html = renderFeaturedCard(featured, 0);

    if (listPosts.length) {
        html += '<div class="blog-list">';
        listPosts.forEach(function(post, index) {
            html += renderListItem(post, index + 1);
        });
        html += '</div>';
    }

    grid.innerHTML = html;
    setupWritingPreview();

    if (!moreWrap) {
        return;
    }

    if (!morePosts.length) {
        moreWrap.innerHTML = '';
        moreWrap.hidden = true;
        return;
    }

    moreWrap.hidden = false;
    moreWrap.innerHTML = `
        <button class="writings-more-toggle" type="button" aria-expanded="false">
            <span class="writings-more-label">explore more !!!</span>
            <span class="writings-more-arrow" aria-hidden="true">
                <i class="fa-solid fa-chevron-down"></i>
            </span>
        </button>
        <div class="writings-more-panel" inert>
            <div class="writings-more-grid">
                ${morePosts.map(renderMoreCard).join('')}
            </div>
        </div>
    `;

    const toggle = moreWrap.querySelector('.writings-more-toggle');
    const panel = moreWrap.querySelector('.writings-more-panel');
    const label = moreWrap.querySelector('.writings-more-label');

    toggle.addEventListener('click', function() {
        const isOpen = moreWrap.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', String(isOpen));
        panel.inert = !isOpen;
        label.textContent = isOpen ? 'Show fewer' : 'explore more !!!';
    });
}

document.addEventListener('DOMContentLoaded', renderWritings);
