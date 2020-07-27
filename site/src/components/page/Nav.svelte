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
		display: block;
		padding: 0 1rem;
		box-sizing: border-box;
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

	a span {
		display: block;
		padding: 1rem 0;
		box-sizing: border-box;
		border-bottom: 4px solid transparent;
	}

	a[aria-current="page"] span {
		border-bottom: 4px solid var(--primary-accent);
		font-weight: 700;
	}
</style>

<nav>
	<ul>
		<li><a aria-current="{active === undefined || active === 'portfolio' ? 'page' : undefined}" href="."><span>Portfolio</span></a></li>
		<li><a aria-current="{active === 'about' ? 'page' : undefined}" href="about"><span>About</span></a></li>
	</ul>
</nav>
