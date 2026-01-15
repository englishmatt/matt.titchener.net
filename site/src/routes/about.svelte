<svelte:head>
    <title>About &#183; Matt Titchener</title>
    <meta name="description" content="Matt Titchener&rsquo;s 'About' page including contact information." />
</svelte:head>

<script>
    import Article from '../components/Article.svelte';

    const fontWeight = "500";
</script>

<style>
    ol {
        padding: 0;
    }

    footer {
        margin-top: 5rem;
    }

    footer ol {
        font-size: 0.9rem;
    }

    h1 {
        color: inherit;
        font-family: inherit;
        font-size: 2.5rem;
        margin-bottom: 0;
        text-transform: inherit;
    }
</style>

<Article fontweight={fontWeight}>
    <h1>Hello.</h1>
    <p>
        I am a <strong>design technologist</strong><sup>1</sup> living in sunny Winchester, California. I have been
        designing, developing, and thinking hard about digital products for over 15 years. I spend much of my
        time building <strong>web products</strong> with a focus on <strong>accessibility</strong> and <strong>user
        experience design</strong>.
    </p>
    <p>
        Over the years, I have pursued my interest in both <strong>digital design</strong> and <strong>software engineering</strong>,
        and have found each liberally compliments the other: Software engineering through <a href="https://en.m.wikipedia.org/wiki/Domain-driven_design" target="_blank" rel="noopener noreferrer">Domain-Driven
        Design</a> (and other best practices) very often informs the <abbr title="User Experience Design">UXD</abbr> through its hyper-clarification of business
        needs; digital design employing <a href="https://en.m.wikipedia.org/wiki/User-centered_design" target="_blank" rel="noopener noreferrer">User-Centered Design</a>
        routinely reminds us we&rsquo;re building things for <em>people</em> which does, in turn, influence software design&hellip;
    </p>
    <p>
        I am motived by the principles above, and believe that:
    </p>
    <ul>
        <li>Good design is <em>useful</em>;</li>
        <li>Attractive things work better<sup>2</sup>;</li>
        <li>You should always bet on the Web.</li>
    </ul>
    <p>
        Like many, I thrive with <strong>autonomy</strong>, <strong>mastery</strong>, and <strong>purpose</strong><sup>3</sup>.
    </p>
    <footer style="font-weight: {fontWeight}">
        <ol>
            <li id="#footnote-1">Also known as <i>UX technologist</i> or <i>design engineer</i>, depending on who you ask.</li>
            <li id="#footnote-2">From Don Norman&rsquo;s book <a href="https://www.amazon.com/dp/0465051367" target="_blank" rel="noopener noreferrer"><i>Emotional Design: Why We Love (or Hate) Everyday Things</i></a></li>
            <li id="#footnote-3">From Dan Pink&rsquo;s book <a href="https://en.wikipedia.org/wiki/Drive:_The_Surprising_Truth_About_What_Motivates_Us" target="_blank" rel="noopener noreferrer"><i>Drive: The Surprising Truth About What Motivates Us</i></a></li>
        </ol>
    </footer>
</Article>
