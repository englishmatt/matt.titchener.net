<script>
    let loading = true;

    function loaded(img) {
        img.onload = img.onerror = () => loading = false;
    }

    export let width = null;
    export let height = null;
    export let fadeInDuration = "300ms";
    export let alt;
    export let align = null;   // The `img` element supports this out-of-the-box in most browsers, but it's deprecated in HTML5
</script>

<style>
    img {
        --loading-opacity: rgba(0, 0, 0, 0.2);
        --broken-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzEiIGhlaWdodD0iNTgiIHZpZXdCb3g9IjAgMCA3MSA1OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0LjY2OTggMjIuOTQ4OUMxNy4yMTY2IDIyLjk0ODkgMTkuMjgxMiAyMC44OTEgMTkuMjgxMiAxOC4zNTI0QzE5LjI4MTIgMTUuODEzOCAxNy4yMTY2IDEzLjc1NTkgMTQuNjY5OCAxMy43NTU5QzEyLjEyMyAxMy43NTU5IDEwLjA1ODQgMTUuODEzOCAxMC4wNTg0IDE4LjM1MjRDMTAuMDU4NCAyMC44OTEgMTIuMTIzIDIyLjk0ODkgMTQuNjY5OCAyMi45NDg5WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00Ny4zMDU4IDIuNDg4NzZMNDAuODM0MyAwTDM5LjA1NTEgNC41OTY0OEgwVjUzLjczMTJIMjAuMDM2MkwxOS4zNDcyIDU1LjUxMTJMMjUuODE4OCA1OEw0Ny4zMDU4IDIuNDg4NzZaTTIxLjcyMzQgNDkuMzcyNUwyMy4zOTUyIDQ1LjA1MzRIOS4wMjQwOFY0My4xMTE4QzkuODU3NDEgMzkuNzkzNSAxMi43NDkxIDI5LjY3OSAxNS4xMDY0IDI5LjY3OUMxOS4zNiAyOS42NzkgMjAuNjMyMSAzOS4zNDc0IDI0Ljg4NTggMzkuMzQ3NEMyNS4xMjM1IDM5LjM0NzQgMjUuMzY0MyAzOS4zNDQ2IDI1LjYwNzQgMzkuMzM4NEwzNy4zNjc5IDguOTU1Mkg0LjM3MjlWNDkuMzcyNUgyMS43MjM0WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTQ3LjQyODMgMTguMzUyNEwzNy4wOTMgNDUuMDUzNEg2MS42NTc5QzYwLjk3NjYgNDMuNjM1IDYwLjExMTUgNDEuMjgwNyA1OS4xMDQ4IDM4LjU0MTFDNTYuMDk5OCAzMC4zNjMzIDUxLjgzMzMgMTguNzUyMiA0Ny40MjgzIDE4LjM1MjRaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNNjYuNjI3MSA0OS4zNzI1SDM1LjQyMTJMMzMuNzM0IDUzLjczMTJINzFWNC41OTY0OEg1Mi43NTI5TDUxLjA2NTcgOC45NTUySDY2LjYyNzFWNDkuMzcyNVoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=);
        --border-radius: 4px;
        border-radius: var(--border-radius);
        display: block;
        filter: none;
        float: var(--align);
        font-size: 0;
        height: auto;
        line-height: 0;
        max-width: 100%;
        overflow: hidden;
        position: relative;
        transition: filter var(--fade-in-duration);
    }

    img::after {
        --mask-image: var(--broken-image);
        --mask-repeat: no-repeat;
        --mask-position: center;
        content: "";
        display: block;
        padding-top: calc((var(--height) / var(--width)) * 100%);
        width: 100%;
        min-width: 10rem;
        background-color: rgba(255, 255, 255, 0.2);
        -webkit-mask-image: var(--mask-image);
        -webkit-mask-repeat: var(--mask-repeat);
        -webkit-mask-position: var(--mask-position);
        mask-image: var(--mask-image);
        mask-repeat: var(--mask-repeat);
        mask-position: var(--mask-position);
    }

    img.loading {
        background: linear-gradient(var(--loading-opacity), var(--loading-opacity));
        filter: brightness(0) opacity(0.2);
    }

    :global(.no-js) img.loading {
        background: none;
        filter: none;
    }
</style>

<img class:loading
    use:loaded
    {alt}
    {...$$restProps}
    style="
        --width: {width ? width : 'initial'};
        --height: {height ? height : 'initial'};
        --fade-in-duration: {fadeInDuration};
        --align: {align};"
    {width}
    {height}
/>