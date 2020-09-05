<script>
    export let width = null;
    export let height = null;
    export let alt;
</script>

<style>
    img {
        --broken-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzEiIGhlaWdodD0iNTgiIHZpZXdCb3g9IjAgMCA3MSA1OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0LjY2OTggMjIuOTQ4OUMxNy4yMTY2IDIyLjk0ODkgMTkuMjgxMiAyMC44OTEgMTkuMjgxMiAxOC4zNTI0QzE5LjI4MTIgMTUuODEzOCAxNy4yMTY2IDEzLjc1NTkgMTQuNjY5OCAxMy43NTU5QzEyLjEyMyAxMy43NTU5IDEwLjA1ODQgMTUuODEzOCAxMC4wNTg0IDE4LjM1MjRDMTAuMDU4NCAyMC44OTEgMTIuMTIzIDIyLjk0ODkgMTQuNjY5OCAyMi45NDg5WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00Ny4zMDU4IDIuNDg4NzZMNDAuODM0MyAwTDM5LjA1NTEgNC41OTY0OEgwVjUzLjczMTJIMjAuMDM2MkwxOS4zNDcyIDU1LjUxMTJMMjUuODE4OCA1OEw0Ny4zMDU4IDIuNDg4NzZaTTIxLjcyMzQgNDkuMzcyNUwyMy4zOTUyIDQ1LjA1MzRIOS4wMjQwOFY0My4xMTE4QzkuODU3NDEgMzkuNzkzNSAxMi43NDkxIDI5LjY3OSAxNS4xMDY0IDI5LjY3OUMxOS4zNiAyOS42NzkgMjAuNjMyMSAzOS4zNDc0IDI0Ljg4NTggMzkuMzQ3NEMyNS4xMjM1IDM5LjM0NzQgMjUuMzY0MyAzOS4zNDQ2IDI1LjYwNzQgMzkuMzM4NEwzNy4zNjc5IDguOTU1Mkg0LjM3MjlWNDkuMzcyNUgyMS43MjM0WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTQ3LjQyODMgMTguMzUyNEwzNy4wOTMgNDUuMDUzNEg2MS42NTc5QzYwLjk3NjYgNDMuNjM1IDYwLjExMTUgNDEuMjgwNyA1OS4xMDQ4IDM4LjU0MTFDNTYuMDk5OCAzMC4zNjMzIDUxLjgzMzMgMTguNzUyMiA0Ny40MjgzIDE4LjM1MjRaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNNjYuNjI3MSA0OS4zNzI1SDM1LjQyMTJMMzMuNzM0IDUzLjczMTJINzFWNC41OTY0OEg1Mi43NTI5TDUxLjA2NTcgOC45NTUySDY2LjYyNzFWNDkuMzcyNVoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=);
        --border-radius: 4px;
        position: relative;
        display: block;
        width: 100%;
        height: auto;
        border-radius: var(--border-radius);
        overflow: hidden;
        background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
    }

    /* Firefox only: hides Firefox broken-image borders. Padding, margin, and inset widths are magic numbers. */
    img:-moz-broken {
        padding: 2px;
        margin-top: -4px;
        margin-right: -4px;
        clip-path: inset(4px 4px 0 0 round var(--border-radius));
        mask-image: linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 1)), var(--broken-image);
        mask-repeat: repeat, no-repeat;
        mask-position: top left, center;
        mask-composite: subtract;
    }

    /* Chrome only: Pseudo elements do not typically work on replace elements (like `img`), however, the below is used to display
       a broken image icon. In this use-case the `img` element is never replaced onload, so the psuedo element is visible
       when the image _fails_ to load. Sneaky. */
    img::after {
        content: "";
        display: block;
        padding-top: calc((var(--height) / var(--width)) * 100%);
        width: 100%;
        min-width: 10rem;
        background-color: rgba(255, 255, 255, 0.2);
        -webkit-mask-image: var(--broken-image);
        -webkit-mask-repeat: no-repeat;
        -webkit-mask-position: center;
    }
</style>

<img {alt} {...$$restProps} style="--width: {width ? width : 'initial'}; --height: {height ? height : 'initial'}" {width} {height} />