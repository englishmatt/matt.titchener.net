<script>
    export let title = null;
    export let logo = null;
</script>

<style>
    h3 {
        font-size: 4rem;
        margin-top: -0.7rem;
        margin-bottom: 1rem;
    }

    h3.logo {
        --mask-size: 60% auto;
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
        /* TODO: Do more to visually hide header */
        text-indent: -1000px;
    }

    .description-body {
        font-weight: 500;
        max-width: 25rem;
    }

    .description {
        align-self: flex-start;
        flex: 1;
    }

    .description-body :global(:last-child) {
        margin-bottom: 0;
    }

    .byline {
        text-transform: uppercase;
        font-size: 0.9rem;
        font-weight: 600;
        opacity: 0.5;;
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

    <slot name="byline"><span class="byline">(2003) IA, UI design, visual design</span></slot>

    <div class="description-body">
        <slot></slot>
        <a href="/boxes-and-arrows">Read more</a>
    </div>
</section>
