<svelte:head>
    <title>Boxes and Arrows &#183; Matt Titchener</title>
    <meta name="description" content="Matt Titchener&rsquo;s case study for the Boxes and Arrows redesign competition." />
</svelte:head>

<script>
    import Image from "../../components/Image.svelte";
    import Carousel from "../../components/Carousel.svelte";
    import CaseStudy from "../../components/CaseStudy.svelte";
    import Figure from "../../components/Figure.svelte";
</script>

<style>
    .logo {
        --mask-image: url("../boxesandarrows-logo.svg");
        --mask-size: contain;
        --mask-repeat: no-repeat;
        --mask-position: 0 65%;
        background-color: var(--default-copy-color);
        -webkit-mask-image: var(--mask-image);
        -webkit-mask-size: var(--mask-size);
        -webkit-mask-repeat: var(--mask-repeat);
        -webkit-mask-position: var(--mask-position);
        mask-image: var(--mask-image);
        mask-size: var(--mask-size);
        mask-repeat: var(--mask-repeat);
        mask-position: var(--mask-position);
        height: 72px;
        width: 30rem;           /* TODO: Either introduce media query at smaller screen widths
                                   or calc() a smarter width value */
        text-indent: -1000px;   /* TODO: Do more to visually hide text */
        display: block;
        margin-top: 1rem;
    }

    h1 {
        text-transform: uppercase;
        font-weight: 700;
        font-size: 1.2rem;
        letter-spacing: 1px;
        margin-top: 5rem;
        font-family: 'Montserrat', 'Inter', sans-serif;
    }

    h1, h2 {
        color: var(--primary-accent-color);
        clear: both;
    }

    p {
        margin-top: 0;
    }
</style>

<CaseStudy>
    <section>
        <Carousel id="final" scrollOffset="30vh" height="60vw">
            <Image alt="" src="../../boxes-and-arrows/front-page.jpg" width="1440" height="1024" />
            <Image alt="" src="../../boxes-and-arrows/article-page.jpg" width="1440" height="1024" />
            <Image alt="" src="../../boxes-and-arrows/topic-page.jpg" width="1440" height="1024" />
            <Image alt="" src="../../boxes-and-arrows/search-page.jpg" width="1440" height="1024" />
            <Image alt="" src="../../boxes-and-arrows/category-page.jpg" width="1440" height="1024" />
        </Carousel>
        <h1>
            <span>Case Study</span>
            <span class="logo">Boxes and Arrows</span>
        </h1>
        <p class="lede">
            Award-winning site redesign and front-end implementation for the Boxes and Arrows online magazine.
        </p>
        <p>
            In 2004 my friend suggested we enter a design competition for the magazine site <i>Boxes and Arrows</i>.
            Being of dubious nature I took some convincing, but after coming around we started collaborating in earnest.
        </p>
        <p>
            Before the competition I had not heard of Boxes and Arrows. The site had an establish community and a
            library of articles stretching back to 2002, on everything from Information Architecture, Interaction
            Design, to the psychology of colour. We had to take this seriously and put in our best effort!
        </p>
        <h2>Design Iterations</h2>
        <p>
            After putting together an initial design, and just a couple of days before the competition deadline, we
            realized we could do even better. We set to work, this time at double-speed to have our reworked entry
            ready in time. We submitted at the last minute and I didn't think much about it for the next few weeks.
            It was quite the surprise then when Alex let me know we had won!
        </p>
        <Carousel height="30rem" captionHeight="4rem">
            <Figure>
                <Image alt="Boxes and Arrows: screenshot of original design" src="../../boxes-and-arrows/original-design.png" width="1440" height="1024" />
                <p slot="caption">The original <i>Boxes and Arrows</i> site before our redesign.</p>
            </Figure>
            <Figure>
                <Image alt="Boxes and Arrows: screenshot of first design iteration" src="../../boxes-and-arrows/mockup-1.png" width="1440" height="1024" />
                <p slot="caption">Our first iterations focused on improved typography and <abbr title="Information Architecture">IA</abbr>&hellip;</p>
            </Figure>
            <Figure>
                <Image alt="Boxes and Arrows: screenshot of second design iteration" src="../../boxes-and-arrows/mockup-2.png" width="1440" height="1024" />
                <p slot="caption">We continued to tweak the colour palette and layout&hellip;</p>
            </Figure>
            <Figure>
                <Image alt="Boxes and Arrows: screenshot of winning design" src="../../boxes-and-arrows/mockup-3.png" width="1440" height="1024" />
                <p slot="caption">Our final entry was substantially reworked just a few days before the deadline.</p>
            </Figure>
        </Carousel>
        <h2>Analysis</h2>
        <p>
            We made contact with the site's caretakers, Christina Wodtke and Liz Danzico, and set about gathering
            additional information to better inform the <strong>information architecture</strong> and <strong>content management</strong> for the online publication.
            We captured our thoughts in a series of documents, designed to help communicate our ideas and record our approach:
        </p>
        <Carousel height="30rem">
            <Image alt="" src="../../boxes-and-arrows/information-architecture.png" width="1440" height="1024" />
            <Image alt="" src="../../boxes-and-arrows/issue-transitions-1.png" width="1440" height="1024" />
            <Image alt="" src="../../boxes-and-arrows/issue-transitions-2.png" width="1440" height="1024" />
            <Image alt="" src="../../boxes-and-arrows/issue-transitions-3.png" width="1440" height="1024" />
        </Carousel>
        <h2>Style Guide</h2>
        <p>
            We chose to capture the style guide in PDF to best preserve the outlines, colours, and patterns we had
            determined (in 2004 many of the convenient tools we take for granted simply were not available). This was a
            deliverable we could hand off to site editors and caretakers, in an attempt to preserve the look-and-feel we
            had established for the longer term:
        </p>
        <Carousel height="30rem">
            <Image alt="" src="../../boxes-and-arrows/style-guide-1.png" width="1440" height="1024" />
            <Image alt="" src="../../boxes-and-arrows/style-guide-2.png" width="1440" height="1024" />
            <Image alt="" src="../../boxes-and-arrows/style-guide-3.png" width="1440" height="1024" />
        </Carousel>
    </section>
    <section>
        <h2>Outcome</h2>
        <p>
            Our work went live in 2007 and was available for 5 years, eventually retired for a more contemporary
            approach in 2012. Additionally, our final design was featured in the the book <a href="https://www.amazon.com/Becoming-Digital-Designer-Broadcast-Animation/dp/0470048441" target="_blank" rel="noopener noreferrer"><i>Becoming a Digital Designer</i></a> by
            Steven Heller.
        </p>
        <p>
            During this project I learnt how important tangible <strong>design assets</strong> are as a means for
            communication and documentation. Often, as an end-user it&rsquo;s easy to forget the hours spent producing
            unpublished deliverables used to explore, explain, experiment, and document.
        </p>
    </section>
</CaseStudy>