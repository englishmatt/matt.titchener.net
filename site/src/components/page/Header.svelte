<script>
    import Nav from './Nav.svelte';

    export let segment;
</script>

<header>
    <img src="lock-in.svg" alt="Matt Titchener"/>
    <Nav {segment}/>
</header>