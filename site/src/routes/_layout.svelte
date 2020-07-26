<script>
	import Header from '../components/page/Header.svelte';
	import Footer from '../components/page/Footer.svelte';

	export let segment = 'portfolio';
</script>

<Header {segment}/>

<svelte:head>
	<title>{segment} &#183; Matt Titchener</title>
</svelte:head>

<main>
	<slot></slot>
</main>

<Footer />