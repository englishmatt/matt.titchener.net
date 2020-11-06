<script>
	export let active;
</script>

<style>
	nav {
		padding-top: var(--header-top-padding);
		flex: 0 0 var(--aux-content-width);
		margin-right: -1rem;
	}

	ul {
		position: fixed;
		display: inline-flex;
		list-style: none;
		/* TODO: Introduce similar character width fallback typeface */
		font-family: 'Montserrat', sans-serif;
		padding: 0;
		margin-top: 0.6rem;
		transition: margin var(--background-transition-duration);
	}

	a {
		display: block;
		padding: 0 var(--navigation-horizontal-padding);
		box-sizing: border-box;
		transition: font-size var(--background-transition-duration);
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
		padding: 1.2rem 0 0.8rem;
		box-sizing: border-box;
		white-space: nowrap;
		text-align: center;
		transition: border var(--navigation-transition-duration);
	}

	a span,
	:global(.page:not(.introduction) ul:hover) a[aria-current="page"] span {
		border-bottom: 4px solid transparent;
		font-weight: 600;
	}

	ul:hover li a:hover span,
	:global(.page:not(.introduction)) a[aria-current="page"] span,
	:global(.page:not(.introduction) ul:hover) li:hover a[aria-current="page"] span {
		border-bottom: 4px solid var(--primary-accent-color);
		font-weight: 700;
	}

	a::before {
		/* TODO: Test this technique in modern screenreaders to ensure the content is not read twice. */
		content: attr(data-content);
		display: block;
		font-weight: 700;
		height: 0;
		visibility: hidden;
	}

	@media (max-width: 60rem) {

		ul {
			margin-top: 0.84rem;
		}

		a {
			font-size: 1rem;
		}
	}
</style>

<!-- Represents the top-level navigation -->
<nav>
	<ul>
		<li><a aria-current="{active === undefined || active === 'work' ? 'page' : undefined}" data-content="Work" rel="prefetch" href="#osher"><span>Work</span></a></li>
		<li><a aria-current="{active === 'about' ? 'page' : undefined}" data-content="About" rel="prefetch" href="about/"><span>About</span></a></li>
	</ul>
</nav>
