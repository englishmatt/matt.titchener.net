<style>
    section {
        padding-top: var(--site-header-height);
        min-height: 100vh;
        box-sizing: border-box;
    }

    section:first-of-type {
        min-height: calc(100vh - var(--site-header-height));
    }

    section:last-of-type {
        min-height: calc(100vh - var(--site-footer-height));
    }

    p {
        margin-top: 0;
    }

    .lede {
        --minimum-size: 1rem;
        --maximum-size: 3rem;
        font-size: calc(2.2vw - 0.22rem);   /* Magic */
        font-weight: 600;
        width: calc(var(--primary-content-width) - var(--content-left-margin));
        max-width: calc(var(--max-primary-content-width) - var(--content-left-margin));
        line-height: 146.2%;
        margin-top: 20vh;
    }

    @media(min-width: 1600px) {
        .lede {
            font-size: 1.978rem;    /* More magic */
        }
    }
</style>

<section>
    <p class="lede">I’m Matt, a UX designer and software engineer from the UK. Assessibility and universal design are central to my work, be it engineering or design.</p>
</section>
<section>
    <p class="lede">I’m Matt, a UX designer and software engineer from the UK. Assessibility and universal design are central to my work, be it engineering or design.</p>
</section>