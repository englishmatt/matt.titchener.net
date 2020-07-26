<script>
    import Nav from './Nav.svelte';

    export let segment;
</script>

<header>
    <p>Site header</p>
    <Nav {segment}/>
</header>