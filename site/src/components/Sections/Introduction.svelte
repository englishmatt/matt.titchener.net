<style>
    p {
        margin-top: 0;
    }

    .primary {
        --border-width: 2px;
        --bus-stop-air-gap: 3px;
        --bus-stop-radius: 1rem;
        --margin-top: 20vh;
        --line-height: 1.462;
        --lede-font-size: calc(2.2vw - 0.22rem);       /* Magic */
        border-right: var(--border-width) solid var(--primary-accent);
        box-sizing: border-box;
        margin-top: var(--margin-top);
        max-width: calc(var(--max-primary-content-width) - var(--content-left-margin));
        min-height: calc(100vh - var(--margin-top) - var(--site-header-height));
        padding-right: var(--primary-content-right-margin);
        position: relative;
        width: calc(var(--primary-content-width) - var(--content-left-margin));
    }

    /* TODO: Consider using SVG for circle for more consistent rendering across browsers */
    .primary::after {
        border-radius: 50%;
        border: 3px solid var(--primary-accent);
        box-sizing: border-box;
        content: "";
        height: var(--bus-stop-radius);
        position: absolute;
        right: 0;
        top: 0;
        transform: translate(calc(50% + (var(--border-width) / 2)), calc(-100% - var(--bus-stop-air-gap)));
        width: var(--bus-stop-radius);
    }

    .primary > :global(*) {
        position: relative;
        top: calc(((var(--bus-stop-radius) + var(--bus-stop-air-gap)) * -1) - ((var(--lede-font-size) * var(--line-height)) / 4));
    }

    .lede {
        font-size: var(--lede-font-size);
        font-weight: 600;
        line-height: var(--line-height);
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