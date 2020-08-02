<script>
	export let active;
</script>

<style>
	nav {
		padding-left: var(--navigation-horizontal-padding);
	}

	ul {
		display: flex;
		list-style: none;
		/* TODO: Introduce similar character width fallback typeface */
		font-family: 'Montserrat', sans-serif;
		padding: 0;
	}

	a {
		display: block;
		padding: 0 var(--navigation-horizontal-padding);
		box-sizing: border-box;
	}

	a:link,
	a:visited,
	a:hover {
		text-decoration: none;
		color: var(--default-copy-color);
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
		font-weight: 600;
	}

	a[aria-current="page"] span {
		border-bottom: 4px solid var(--primary-accent-color);
		font-weight: 700;
	}
</style>

<!-- Represents the top-level navigation -->
<nav>
	<ul>
		<li><a aria-current="{active === undefined || active === 'portfolio' ? 'page' : undefined}" href="."><span>Portfolio</span></a></li>
		<li><a aria-current="{active === 'about' ? 'page' : undefined}" href="about"><span>About</span></a></li>
	</ul>
</nav>
