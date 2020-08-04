<style>
    p {
        margin-top: 0;
    }

    .lede {
        font-size: 2rem;
        font-weight: 600;
        line-height: var(--line-height);
        max-width: calc(var(--max-main-content-width) - var(--content-left-margin));
    }

    @media(min-width: 1600px) {
        .lede {
            font-size: 2rem;
        }
    }
</style>

<p class="lede"><slot></slot></p>