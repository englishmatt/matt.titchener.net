<script>
	export let active;
</script>

<style>
	ul {
		display: flex;
		list-style: none;
		/* TODO: Introduce similar character width fallback typeface */
		font-family: 'Montserrat', sans-serif;
	}

	a {
		padding: 1rem;
	}

	a:link,
	a:visited,
	a:hover {
		text-decoration: none;
		color: rgba(0, 0, 0, 0.6);
	}

	a:link,
	a:visited {
		text-transform: uppercase;
	}
</style>

<nav>
	<ul>
		<li><a aria-current="{active === undefined ? 'page' : undefined}" href=".">Portfolio</a></li>
		<li><a aria-current="{active === 'about' ? 'page' : undefined}" href="about">About</a></li>
	</ul>
</nav>
