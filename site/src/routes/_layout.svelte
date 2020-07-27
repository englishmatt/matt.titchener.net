<script>
	import Header from '../components/page/Header.svelte';
	import Footer from '../components/page/Footer.svelte';

	export let segment = 'portfolio';

	const contentId = 'content';
</script>
<Header active={segment} {contentId}/>

<svelte:head>
	<title>{segment} &#183; Matt Titchener</title>
</svelte:head>

<main id="{contentId}">
	<slot></slot>
</main>

<Footer />