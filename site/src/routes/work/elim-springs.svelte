<svelte:head>
    <title>Elim Springs &#183; Matt Titchener</title>
    <meta name="description" content="Matt Titchener&rsquo;s case study for Elim Spring&rsquo; site redesign." />
</svelte:head>

<script>
    import Image from "../../components/Image.svelte";
    import MobileImage from "../../components/MobileImage.svelte";
    import Carousel from "../../components/Carousel.svelte";
    import Article from "../../components/Article.svelte";
    import Figure from "../../components/Figure.svelte";
</script>

<style>
    .logo {
        --mask-image: url("../elimsprings-logo.svg");
    }

    p {
        margin-top: 0;
    }
</style>

<Article>
    <section>
        <Carousel id="final" scrollOffset="30vh" height="50vw">
            <Image alt="" src="../../elim-springs/front-page.png" width="1440" height="1024" />
            <MobileImage alt="" src="../../elim-springs/front-page-mobile.png" width="411" height="823" />
            <Image alt="" src="../../elim-springs/about.png" width="1440" height="1024" />
            <MobileImage alt="" src="../../elim-springs/about-mobile.png" width="1440" height="1024" />
            <Image alt="" src="../../elim-springs/events.png" width="1440" height="1024" />
            <MobileImage alt="" src="../../elim-springs/navigation-open-mobile.png" width="411" height="823" />
            <Image alt="" src="../../elim-springs/location-a.png" width="1440" height="1024" />
            <Image alt="" src="../../elim-springs/donations.png" width="1440" height="1024" />
        </Carousel>
        <h1>
            <span>Case Study</span>
            <span class="logo">Elim Springs</span>
        </h1>
        <p class="lede">
            Marketing and e-commerce experience for event management and venue agency based in Düsseldorf, Germany.
        </p>
        <h2>Opportunity</h2>
        <p>
            Elim Springs, a small non-profit event management and venue agency based in Düsseldoft, Germany, were in
            need of a corporate web presence, brand, and online donation solution. In late-2019, I worked alongside
            Elim Springs&rsquo; stakeholders to design and develop an appealing experience, that would simplify donations,
            provide clear event information, and a simple means to keep content up-to-date and relevant to their
            customers.
        </p>
        <h2>Process</h2>
        <p>
            Given the promotional nature of the project, a strong <strong>visual design</strong> was paramount, and
            was my initial focus. After a number of iterations we came to a compelling look-and-feel that reflected the
            values of the organization: approachable, traditional, and trustworthy.
        </p>
        <Carousel id="process" scrollOffset="30vh" height="20rem">
            <Image alt="" src="../../elim-springs/iteration-1.png" width="1440" height="1024" />
            <Image alt="" src="../../elim-springs/iteration-2.png" width="1440" height="1024" />
            <Image alt="" src="../../elim-springs/iteration-3.png" width="1440" height="1024" />
            <Image alt="" src="../../elim-springs/iteration-4.png" width="1440" height="1024" />
            <Image alt="" src="../../elim-springs/iteration-5.png" width="1440" height="1024" />
            <Image alt="" src="../../elim-springs/iteration-6.png" width="1440" height="1024" />
            <Image alt="" src="../../elim-springs/front-page.png" width="1440" height="1024" />
        </Carousel>
        <p>
            With the advent of modern single page application (SPA) frameworks that can provide progressive enhancement,
            performance, and accessibility, and even improve UX for content-heavy sites, it gave us the opportunity to
            explore several different navigation paradigms previously not within reach. This also allowed us to provide
            a particularly dynamic checkout experience for donations.
        </p>
        <p>
            Through experimentation, I settled on a left-side navigation that transitioned selected content in to view.
            This keeps the user continually <strong>orientated</strong> and <strong>discoverability</strong> high. Best
            of all, with server-side rendering (SSR) and static site generation (SSG) at the core of this solution, it
            is usable even when JavaScript and styling are disabled, or otherwise unavailable.
        </p>
        <aside>
            <h3>A Word on SPAs</h3>
            <p>
                Typically, the use of a <abbr title="Single Page Application">SPA</abbr> framework for a content-heavy
                site is not recommended and has been (rightly) derided by many as detrimental to the web; it can often
                place developer experience (DX) over UX. Although I was initially skeptical of SPA solutions in general,
                with the advent of more inclusive approaches, such a Next.js and Sapper, I realised one can have the
                best of both worlds: small page sizes, interactivity, and page transitions, all while mainitaining
                <strong>accessibility</strong> and <strong>progressive enhancement</strong>. Perfect!
            </p>
        </aside>
        <h2>Project Highlights</h2>
        <Figure>
            <Image alt="Elim Springs' style guide" src="../../elim-springs/typography.png" align="left" width="494" height="588" />
            <h3>Style Guide</h3>
            <p slot="caption">
                In recent years <strong>Figma</strong> has become an industry standard for good reason. Its use in this
                project further emphasised its utility to me. Not only did it allow me to easily share the Elim Springs
                prototype, but its feature set also made creating and reusing styles and components straighforward. The
                result was a style guide without even trying!
            </p>
        </Figure>
        <Figure>
            <Image alt="Elim Springs' style guide" src="../../elim-springs/buttons.png" align="left" width="478" heightg="714" />
            <h3>Pattern Library</h3>
            <p slot="caption">
                In similar fashion to creating a style guide, Figma's shared components let me create an extensible
                <strong>pattern library</strong>. Sweeping changes could be made across the prototype by simply editing
                the master component.
            </p>
            <p slot="caption">
                Components here were purposely based on a Material design look-and-feel as, fortunately, it fit the
                brief, and would reduce the engineering effort and timeline.
            </p>
        </Figure>
        <h2>Brand</h2>
        <p>
            Elim Springs was small enough to have not yet fully established a brand identity. I used this opportunity to
            pull together a series of lockups to work for all occasions, including a standalone logo, and vertically and
            horizontally constrained lockups. Care was also given to light and dark backgrounds, and a monochrome
            variant.
        </p>
        <Figure>
            <Image alt="Elim Springs' style guide" src="../../elim-springs/logo-typeface.png" align="left" width="876" height="463" />
            <p slot="caption">
                I explored different typefaces for the logo, leaning heavily on <strong>serifed</strong> styles. The
                goal was to balance a traditional look with a softer feel, while keeping it simple and understated.
            </p>
        </Figure>
        <Image alt="Elim Springs' style guide" src="../../elim-springs/brand.png" width="974" height="771" />
    </section>
    <section>
        <h2>Outcome</h2>
        <p>
            The above above prototype was delivered to the client and work has started on engineering. Unfortunately,
            progress has stalled with the global pandemic in 2020, but we hope to continue in the near future.
        </p>
        <p>
            This project helped me become more familiar with Figma, including the use of <strong>shared libaries</strong> for
            components and <strong>AutoLayout</strong>. It was also encouraging to discover that in recent months SPAs
            may have finally come of age&mdash;delivering a best-of-all-worlds solution for accessibility, user
            experience and developer experience!
        </p>
    </section>
</Article>