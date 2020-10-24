<svelte:head>
    <title>About &#183; Matt Titchener</title>
    <meta name="description" content="Matt Titchener&rsquo;s 'About' page including contact information." />
</svelte:head>

<style>
    article {
        font-weight: 500;
    }

    dt {
        --icon-mask-repeat: no-repeat;
        --icon-mask-position: 0 50%;
        --icon-mask-size: auto 100%;
        float: left;
        width: 2rem;
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
    }

    dd {
        clear: right;
        margin-bottom: 0.5rem
    }

    .twitter {
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
        font-size: 2.5rem;
        margin-bottom: 0;
    }

    /* TODO: Consider moving bullet styling to main.css; used in TableOfContents component as well. */
    ul {
        padding-left: 0;
        list-style: none;
    }

    li {
        position: relative;
    }

    /* Not using `::marker` as it's not fully supported yet, and does not provide the
       flexibility we need. */
    ul li:before {
        --dimension: 0.5rem;
        content: "";
        width: var(--dimension);
        height: var(--dimension);
        background-color: var(--primary-accent-color);
        position: absolute;
        top: calc(50% - (var(--dimension) / 2));
        left: -1rem;
    }

    article sup a:link,
    article sup a:visited {
        font-weight: inherit;
        opacity: 0.8;
        color: var(--default-copy-color);
    }
</style>

<article>
    <h1>Hello.</h1>
    <p>
        I am a <strong>design technologist</strong><sup>1</sup> and live in sunny Murrieta, California. I have been
        designing, developing, and thinking hard about digital products for 17 years. I have spent much of my career building
        <strong>web products</strong> with a focus on <strong>accessibility</strong> and <strong>user experience
        design</strong>, even in my engineering roles.
    </p>
    <p>
        I am motived by the principles of <strong>universal design</strong> and believe that:
    </p>
    <ul>
        <li>Good design is <em>useful</em> design;</li>
        <li>Attractive things work better<sup>2</sup>;</li>
        <li>You should always bet on the Web.</li>
    </ul>
    <p>
        Like many, I thrive when working with <strong>autonomy</strong>, <strong>mastery</strong>, and <strong>purpose</strong><sup>3</sup>.
    </p>
    <dl>
        <dt class="twitter">
            Twitter
        </dt>
        <dd>
            <a href="https://twitter.com/englishmatt" target="_blank" rel="noopener noreferrer">@englishmatt</a>
        </dd>
    </dl>
    <footer>
        <ol>
            <li id="#footnote-1">Sometimes called <i>UX technologist</i> or <i>design engineer</i> depending on who you ask.</li>
            <li id="#footnote-2">From Don Norman's book <a href="https://www.amazon.com/dp/0465051367" target="_blank" rel="noopener noreferrer"><i>Emotional Design: Why We Love (or Hate) Everyday Things</i></a></li>
            <li id="#footnote-3">From Dan Pink's book <a href="https://en.wikipedia.org/wiki/Drive:_The_Surprising_Truth_About_What_Motivates_Us" target="_blank" rel="noopener noreferrer"><i>Drive: The Surprising Truth About What Motivates Us</i></a></li>
        </ol>
    </footer>
</article>
