<style>
    :root {
        --margin-top: 20vh;
    }

    p {
        margin-top: 0;
    }

    .primary {
        --margin-top: 20vh;
        border-right: 2px solid var(--primary-accent);
        box-sizing: border-box;
        max-width: calc(var(--max-primary-content-width) - var(--content-left-margin));
        padding-right: var(--primary-content-right-margin);
        width: calc(var(--primary-content-width) - var(--content-left-margin));
        min-height: calc(100vh - var(--margin-top) - var(--site-header-height));
    }

    .lede {
        font-size: calc(2.2vw - 0.22rem);   /* Magic */
        font-weight: 600;
        line-height: 146.2%;
        margin-top: var(--margin-top);
    }

    @media(min-width: 1600px) {
        .lede {
            font-size: 2rem;
        }
    }
</style>

<div class="primary">
    <p class="lede">I’m Matt, a UX designer and software engineer from the UK. Assessibility and universal design are central to my work, be it engineering or design.</p>
</div>