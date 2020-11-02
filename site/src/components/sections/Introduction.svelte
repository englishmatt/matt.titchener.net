<style>
    .lede {
        --unitless-max-font-size: 4.4;  /* rem */
        --unitless-min-font-size: 2.6;  /* rem */
        box-sizing: border-box;
        font-family: 'Catamaran';
        font-size: calc(var(--unitless-min-font-size) * 1rem);
        font-weight: 400;
        height: 0;
        line-height: 1.2;
        margin: 0;
        max-width: 88rem;
    }

    /* TODO: Convert to min(max()) when more support is available */
    @media (min-width: 50rem) {
        .lede {
            --font-delta: calc(var(--max-font-size) - var(--min-font-size));
            font-size: calc((var(--unitless-min-font-size) * 1rem) +
                ((var(--unitless-max-font-size) - var(--unitless-min-font-size)) *
                ((100vw - 50rem) / 25)));   /* 75rem - 50rem = 25 (unitless) */
        }
    }

    @media (min-width: 75rem) {
        .lede {
            font-size: calc(var(--unitless-max-font-size) * 1rem);
        }
    }
</style>

<p id="introduction" class="lede">
    <slot></slot>
</p>