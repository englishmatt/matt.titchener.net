<style>
    .lede {
        --unitless-max-font-size: 4.4;  /* rem */
        --unitless-min-font-size: 1.9;  /* rem */
        --font-size-delta: calc(var(--unitless-max-font-size) - var(--unitless-min-font-size));
        box-sizing: border-box;
        font-family: 'Catamaran', 'Inter V', sans-serif;
        font-size: calc(var(--unitless-min-font-size) * 1rem);
        font-weight: 400;
        height: 0;
        line-height: 1.2;
        margin: 0;
        max-width: 88rem;
        white-space: nowrap;
    }

    /* TODO: Convert to min(max()) when more support is available */
    @media (min-width: 20rem)  {
        .lede {
            font-size: calc((var(--unitless-min-font-size) * 1rem) +
                (var(--font-size-delta) * var(--lede-sizing)));
        }
    }

    @media (min-width: 60rem) {
        .lede {
            font-size: calc(var(--unitless-max-font-size) * 1rem);
        }
    }
</style>

<p id="introduction" class="lede">
    <slot></slot>
</p>