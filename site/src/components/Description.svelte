<script>
    export let title = null;
    export let logo = null;
    export let href = null;
</script>

<style>
    h3 {
        font-size: 4rem;
        margin-top: -0.7rem;
        margin-bottom: 1rem;
    }

    h3.logo {
        --mask-size: contain;
        --mask-repeat: no-repeat;
        --mask-position: 0 65%;
        background-color: var(--default-copy-color);
        -webkit-mask-image: var(--logo);
        -webkit-mask-size: var(--mask-size);
        -webkit-mask-repeat: var(--mask-repeat);
        -webkit-mask-position: var(--mask-position);
        mask-image: var(--logo);
        mask-size: var(--mask-size);
        mask-repeat: var(--mask-repeat);
        mask-position: var(--mask-position);
        height: 72px;
        width: 30rem;           /* TODO: Either introduce media query at smaller screen widths
                                   or calc() a smarter width value */
        text-indent: -1000px;   /* TODO: Do more to visually hide text */
    }

    .description-body {
        font-size: 1.2rem;
        font-weight: 500;
        max-width: 29rem;
        opacity: 0.9;
    }

    .description {
        flex: 1;
    }

    .description-body :global(:last-child) {
        margin-bottom: 0;
    }

    .byline {
        font-family: 'Montserrat', 'Inter', sans-serif;
        font-size: 0.9rem;
        font-weight: 500;
        letter-spacing: 0.4px;
        opacity: 0.6;
        text-transform: uppercase;
    }

    .byline :global(ul) {
        padding: 0;
    }

    .byline :global(ul li) {
        display: inline-block;
    }

    .byline :global(ul li:not(:first-of-type):before) {
        content: "\2022";
        margin-right: 0.35rem;
    }

    a {
        display: inline-block;
        padding: 0.5rem 1rem;
        border: 2px solid var(--primary-accent-color);
        border-radius: 4px;
        text-decoration: none;
        color: var(--primary-accent-color);
        transition: border-color var(--background-transition-duration), color var(--background-transition-duration);
        margin-top: 0.6rem;
    }
</style>

<section class="description" style="--logo: url({logo})">
    {#if title}
        <h3 class:logo={!!logo}>{title}</h3>
    {/if}

    <div class="byline">
        <slot name="byline"></slot>
    </div>

    <div class="description-body">
        <slot></slot>
        {#if !!href}
            <a href={href}>Read more</a>
        {/if}
    </div>
</section>
