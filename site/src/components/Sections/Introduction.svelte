<style>
    .lede {
        box-sizing: border-box;
        height: 0;
        margin: 0;
        max-width: 88rem;
        font-size: 2.5rem;
        font-weight: 400;
        line-height: var(--line-height);
    }

    .lede .headline {
        font-size: 3rem;
        font-weight: 700;
    }
</style>

<p id="introduction" class="lede">
    <span class="headline"><slot name="headline"></slot></span>
    <span><slot></slot></span>
</p>