<script>
    let statusTitle;
    let statusMessage;
    export let status;

    switch (status) {
        case 404:
            statusTitle = "Something's missing. Sorry.";
            statusMessage = "You may have been sent here in error or this page may have been (re)moved.";
            break;
        default:
            statusTitle = "Page failed successfully."
            statusMessage = "Something went wrong. Can you try again? If you can't get to where you want to go please let me know.";
    }

    const dev = process.env.NODE_ENV === 'development';
    export let error;
</script>

<style>
    div {
        animation-delay: 500ms;
        animation-duration: 1000ms;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-name: show-lede;
        animation-timing-function: cubic-bezier(.02, .02, 0, 1.01);
        max-width: var(--max-main-content-width);
        opacity: 0;
        padding-top: 36vh;
        width: var(--main-content-width);
    }

    h1 {
        font-size: 3em;
        line-height: 1.1;
        font-weight: 700;
        margin: 0;
    }

    .lede {
        font-size: 1.5rem;
        line-height: 1.5;
        opacity: 0.7;
        font-weight: 500;
    }

    small {
        text-transform: uppercase;
        font-weight: 700;
        font-size: 1rem;
    }
</style>

<svelte:head>
    <title>{status}</title>
</svelte:head>

<div>
    <h1>{statusTitle}</h1>
    <p class="lede">{statusMessage}</p>
    <small>{status} {error.message}</small>
</div>

{#if dev && error.stack}
    <pre>{error.stack}</pre>
{/if}
