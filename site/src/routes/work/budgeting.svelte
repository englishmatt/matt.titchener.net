<svelte:head>
    <title>Budgeting &#183; Matt Titchener</title>
    <meta name="description" content="Matt Titchener&rsquo;s case study for a speculative user interface design for a personal finance and budgeting application for the web and desktop." />
</svelte:head>

<script>
    import Image from "../../components/Image.svelte";
    import Carousel from "../../components/Carousel.svelte";
    import CaseStudy from "../../components/CaseStudy.svelte";
    import Figure from "../../components/Figure.svelte";
</script>

<style>
    .logo {
        --mask-image: url("../budgeting-logo.svg");
    }

    p {
        margin-top: 0;
    }
</style>

<CaseStudy>
    <section>
        <Carousel id="final" scrollOffset="30vh" height="50vw">
            <Image alt="" src="../../budgeting/overview.png" width="1460" height="830" />
            <div>
                <Image alt="" src="../../budgeting/balance-over-time.2x.png" width="960" height="325" />
                <Image alt="" src="../../budgeting/transaction-histogram.2x.png" width="960" height="237" />
            </div>
            <Image alt="" src="../../budgeting/onboarding.png" width="1460" height="840" />
            <Image alt="" src="../../budgeting/income.png" width="1460" height="830" />
        </Carousel>
        <h1>
            <span>Case Study</span>
            <span class="logo">Budgeting</span>
        </h1>
        <p class="lede">
            Speculative user interface design for a personal finance and budgeting application for the web and desktop.
        </p>
        <h2>Opportunity</h2>
        <p>
            I set myself the challenge to design a personal finance and budgeting tool for use on the web and desktop.
            Given my work experience in the finance industry I had an ‘ok’ feel for what a product like this might look like:
            A <strong>simple-as-possible-but-no-simpler</strong> solution that would help individuals and families alike
            identify, track, and stick to a financial budget.
        </p>
        <h2>Process</h2>
        <p>
            I started by considering how best to walk a new user through building a budget from scratch. This involved
            forming a clear <strong>mental model</strong> for the user: a budget was determined to be <em>a set of
            recurring transactions, both income and expense, over a fixed period of time</em>. All other features would
            successfully hang off this central concept.
        </p>
        <h3>Visualizations</h3>
        <Figure>
            <Image src="../../budgeting/budgeting-sketch.jpg" alt="" align="left" />
            <p slot="caption">
                I worked out some quick sketches to think through how best to <strong>visualize</strong> account balances
                and transactions. There was a good opportunity to communicate accurately and efficiently with <strong>data visualisation</strong> which I wanted to explore.
            </p>
        </Figure>
        <h3>Grey Boxing</h3>
        <p>
            I already had a solid <strong>product vision</strong>, so felt to skip much of the lower-fidelity work; I
            started <strong>gray boxing</strong> in <strong>Adobe&nbsp;XD</strong>:
        </p>
        <Carousel height="30rem">
            <Image alt="" src="../../budgeting/wireframes/bank-accounts.png" width="1460" height="840" />
            <Image alt="" src="../../budgeting/wireframes/savings.png" width="1460" height="840" />
            <Image alt="" src="../../budgeting/wireframes/savings-goals.png" width="1460" height="947" />
            <Image alt="" src="../../budgeting/wireframes/spending.png" width="1460" height="947" />
            <Image alt="" src="../../budgeting/wireframes/transactions-for-account.png" width="1460" height="947" />
            <Image alt="" src="../../budgeting/wireframes/transactions-for-all-accounts.png" width="1460" height="947" />
            <Image alt="" src="../../budgeting/wireframes/welcome.png" width="1460" height="840" />
            <Image alt="" src="../../budgeting/wireframes/budget.png" width="1460" height="947" />
            <Image alt="" src="../../budgeting/wireframes/budget-empty.png" width="1460" height="840" />
        </Carousel>
        <aside>
            <h3>A Word on Grey Boxing</h3>
            <p>
                I have found the use of grey boxing&mdash;<strong>mid-fidelity</strong> layouts, sans colours, images,
                and textures&mdash;more informative and useful than practically any other technique I know. It is useful
                to quickly get a handle on a user workflow. When I'm short on time or need a more concrete answer as to
                whether something “works” I turn to grey boxing. <abbr title="Your Mileage May Vary">YMMV</abbr> of
                course, but I highly recommend giving it a shot if you want to get started quickly.
            </p>
        </aside>
        <h2>Pattern Library</h2>
        <Image alt="" src="../../budgeting/pattern-library.png" width="1460" height="1190" />
    </section>
    <section>
        <h2>Outcome</h2>
        <p>
            Budgeting was a challenge to myself on how best to create clarity in a complex domain: generating concise,
            internally consistent <strong>mental models</strong> for budgeting; <strong>condensing information</strong>
            in clear-to-understand visuals, including <strong>sparklines</strong>, <strong>interactive charts</strong>,
            and the meaningful <strong>use of colour</strong>.
        </p>
    </section>
</CaseStudy>