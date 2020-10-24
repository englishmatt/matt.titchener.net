<svelte:head>
    <title>Osher &#183; Matt Titchener</title>
    <meta name="description" content="Matt Titchener&rsquo;s case study for the site redesign of the Osher Lifeling Learning Institute at Colorado State University." />
</svelte:head>

<script>
    import Image from "../../components/Image.svelte";
    import MobileImage from "../../components/MobileImage.svelte";
    import Carousel from "../../components/Carousel.svelte";
    import CaseStudy from "../../components/CaseStudy.svelte";
    import Figure from "../../components/Figure.svelte";
</script>

<style>
    .logo {
        --mask-image: url("../osher-logo.svg");
    }

    h3 {
        margin-bottom: 1rem;
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

    /* .affiliates :global(p:first-of-type::before) {
        content: "\25C4";
        display: inline-block;
        padding-right: 0.5rem;
        font-size: 0.7rem;
        color: var(--primary-accent-color);
        vertical-align: 18.8%;
    } */
</style>

<CaseStudy>
    <Carousel id="final" scrollOffset="30vh" height="50vmax">
        <Image src="../../osher/front-page.png" alt="Osher front page (desktop layout)" width="1400" height="2514" />
        <MobileImage src="../../osher/front-page-mobile.png" alt="Osher front page (mobile layout)" width="1400" height="2514" />
        <Image src="../../osher/membership.png" alt="Osher membership" width="1400" height="1835" />
        <Image src="../../osher/course-browse.png" alt="Osher front page" width="1400" height="1458" />
        <Image src="../../osher/course-page.png" alt="Osher front page" width="1400" height="1513" />
    </Carousel>
    <h1>
        <span>Case Study</span>
        <span class="logo">Osher Lifelong Learning Institute <span class="subheading">at Colorado State University</span></span>
    </h1>
    <p class="lede">
        Class registration and student information system for Osher Lifelong Learning Institute at Colorado State
        University.
    </p>
    <h2>Opportunity</h2>
    <p>
        The <i>Osher Lifelong Learning Institute</i> (OLLI) at <i>Colorado State University</i> (CSU) provides
        intellectual nourishment to seniors and retirees throughout northern Colorado. OLLI was interested in expanding
        their reach throughout the community. To do so involved breaking the 1,000 membership threshold to access
        additional funding from the Bernard Osher Foundation. To this end, my project team and I were asked to reimagining what a new
        OLLI registration experience might look like, as part of a broader effort to refresh the Division's online
        presence. This project included the following non-functional requirements, per CSU policy:
    </p>
    <ul>
        <li><abbr title="Web Content Accessibility Guidelines">WCAG</abbr> AA <strong>accessibility</strong> compliance</li>
        <li>Alignment with Colorado State Unversity brand and style guides</li>
    </ul>
    <h2>Process</h2>
    <h3>Research</h3>
    <p>
        Early rounds of <strong>interviews</strong> with stakeholders, <abbr title="Subject Matter Experts">SME</abbr>s,
        and Osher members revealed that the user experience for <strong>course discovery</strong>, <strong>registration</strong>,
        and <strong>checkout</strong> were particularly cumbersome. These interviews helped identify the target
        audience, revealed UX pain points, and let me synthesize a series of <strong>user workflows</strong>
        (delivered as <abbr title="Business Process Model Notation">BPMN</abbr> diagrams, samples shown here):
    </p>
    <Carousel id="bpmn" scrollOffset="30vh" height="20rem">
        <Image src="../../osher/instructor-recruitment-bpmn.png" alt="Instructor recruitment BPMN" width="2439" height="1309" />
        <Image src="../../osher/registration-bpmn.png" alt="Course registration BPMN" width="2439" height="1309" />
        <Image src="../../osher/payment-bpmn.png" alt="Payment process BPMN" width="2013" height="1326" />
    </Carousel>
    <h3>Design</h3>
    <p>
        Off the back of our UX research my team and I generated a set of <strong>user stories</strong> describing key
        features. Workflows and stories came together, initially, as <strong>wireframes</strong> and then later as <strong>gray-boxed</strong>
        designs we could use for <strong>prototyping</strong>. By presenting these as <strong>interactive prototypes</strong>
        to stakeholders and SMEs we were able to continue to refine the experience:
    </p>
    <Carousel id="grayboxes" height="50vmax">
        <Image src="../../osher/grayboxing.png" alt="Grayboxing montage" height="20rem" />
    </Carousel>
    <h2>Feature Highlights</h2>
    <Figure>
        <Image alt="" src="../../osher/course-discovery.png" align="left" width="966" height="809" />
        <h3 slot="caption">Course Discovery</h3>
        <p slot="caption">
            As we discovered it was clear that users often stuggled to find courses; the existing UX did
            not provided any course search or filtering functionality.
        </p>
        <p slot="caption">
            We employed a classic UI pattern: real-time <strong>faceted search</strong>
            to solve this. Facets (dimensions) were determined by a brief analysis of the way members typically
            identified courses of interest; however this solution was constrained by the data points available to us
            by the underlying systems. Sometimes even the best solutions must be a compromise!
        </p>
    </Figure>
    <Figure>
        <Image alt="Professional Development front page" src="../../osher/professional-development-front-page-cropped.png" width="1400" height="700" align="left" />
        <h3 slot="caption">Layouts &amp; Component Library</h3>
        <p slot="caption">
            As the OLLI site was part of a series of affiliated sites, it was important that the design
            language be <strong>extensible</strong>, and <strong>scale</strong> to various new challenges.
        </p>
        <p slot="caption">
            Our approach meant we could reuse components and layouts, swapping out images, copy, and accent colours
            to form a cohesive experience between each offering. The sister-site for the newly envisioned CSU
            Professional Development experience is shown here.
        </p>
    </Figure>
    <Figure>
        <Image src="../../osher/front-page-warning.png" alt="Professional Development front page" width="1400" height="700" align="left" />
        <Image src="../../osher/course-browse-information.png" alt="Professional Development front page" width="1400" height="700" align="left" />
        <h3 slot="caption">Page Headers &amp; Alerting</h3>
        <p slot="caption">
            Our research also highlighted the need for clear, timely messaging to members. In addition to real-time
            notifications through email or SMS for class rescheduling or cancellation, we also decided to render
            messages on the front page to <strong>overcommunicate</strong> this vital information. Our solution
            involved the use of iconography, placement, and colour.
        </p>
    </Figure>
    <h2>Outcome</h2>
    <p>
        The first iteration of the site launched in the Autumn of 2018 and received positive feedback from students and
        OLLI staff. As with many projects, many of the opportunities identified at the start the project will take time
        to gauge, with the next set of iterations still to come.
    </p>
    <p class="closing">
        In addition to the above deliverables, this project helped me become a better UX researcher, specifically. The
        target audience for Osher offered a unique challenge and required <strong>collecting</strong> and <strong>documenting</strong>
        their needs clearly and with <strong>empathy</strong>.
    </p>
</CaseStudy>