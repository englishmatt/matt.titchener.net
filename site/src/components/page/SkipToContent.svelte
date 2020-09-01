<script>
    export let contentId = 'main';
</script>

<style>
    div {
        background-color: var(--header-accent-color);
        box-sizing: border-box;
        padding: 0.25rem var(--content-left-margin);
        left: 0;
        top: 0;
        width: 100%;
        position: fixed;
        z-index: 2;
    }

    a {
        --height: 1.2rem;
        clip-path: inset(50%);
        clip: rect(1px, 1px, 1px, 1px);
        font-size: calc(var(--height) - 0.4rem);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        display: block;
        width: 1px;
        transition: height 100ms;
    }

    a:focus {
        height: var(--height);
        width: auto;
        clip-path: none;
        clip: auto; 
        outline: none;
    }

    a:link,
    a:visited,
    a:hover {
        color: #fff;
    }

    a:link,
    a:visited {
        text-decoration: none;
    }
</style>

<div><a class="visually-hidden" href="#{contentId}">Skip to main content (press enter)</a></div>