<script>
	import Section from "../components/Section.svelte";

	export let status;
	export let error;

	const dev = process.env.NODE_ENV === 'development';
</script>

<style>
	h1 {
		font-size: 2.8em;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}
</style>

<svelte:head>
	<title>{status}</title>
</svelte:head>

<Section>
	<h1>{status}</h1>

	<p>{error.message}</p>

	{#if dev && error.stack}
		<pre>{error.stack}</pre>
	{/if}
</Section>
