<svelte:head>
    <title>About &#183; Matt Titchener</title>
    <meta name="description" content="Matt Titchener&rsquo;s 'About' page including contact information." />
</svelte:head>

<script>
    import Article from '../components/Article.svelte';
    import pdfIcon from '../../static/pdf-icon.svg';

    const fontWeight = "500";
    const resumeIcon = `url("data:image/svg+xml,${encodeURIComponent(pdfIcon)}")`;
</script>

<style>
    .contact-links,
    .icon-marker-list {
        --icon-width: 2rem;
        --icon-spacing: 0.5rem;
    }

    dl {
        margin: 2rem 0 0;
    }

    dt {
        float: left;
    }

    .icon-marker-list li::before,
    dt {
        --icon-mask-repeat: no-repeat;
        --icon-mask-position: 0 50%;
        --icon-mask-size: auto 100%;
        width: var(--icon-width);
        background-color: var(--default-copy-color);
        text-indent: -1000%;
        -webkit-mask-repeat: var(--icon-mask-repeat);
        -webkit-mask-position: var(--icon-mask-position);
        -webkit-mask-size: var(--icon-mask-size);
        -webkit-mask-image: var(--icon-mask-image);
        mask-repeat: var(--icon-mask-repeat);
        mask-position: var(--icon-mask-position);
        mask-size: var(--icon-mask-size);
        mask-image: var(--icon-mask-image);
        margin-right: var(--icon-spacing);
        height: var(--icon-width);
    }

    .icon-marker-list li,
    dd {
        clear: right;
        margin-bottom: 1rem;
    }

    .twitter {
        /* TODO: Place Twitter logo in static resource and import. */
        --icon-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' data-name='Layer 1' viewBox='0 0 24 24'%3E%3Cpath d='M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z'/%3E%3C/svg%3E");
    }

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

    .icon-marker-list {
        padding-left: 0;
    }

    .icon-marker-list .resume::before {
        content: "";
        display: inline-block;
        left: 0;
        position: static;
        vertical-align: bottom;
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
