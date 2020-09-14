<script>
    import Image from "../../components/Image.svelte";
    import Carousel from "../../components/Carousel.svelte";
</script>

<style>
    .logo {
        --mask-image: url("../osher-logo.svg");
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

    h3 {
        margin-bottom: 1rem;
    }

    p {
        margin-top: 0;
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
    li:before {
        --dimension: 0.5rem;
        content: "";
        width: var(--dimension);
        height: var(--dimension);
        background-color: var(--primary-accent-color);
        position: absolute;
        top: calc(50% - (var(--dimension) / 2));
        left: -1rem;
    }

    .affiliates :global(p::before) {
        content: "\25C4";
        display: inline-block;
        padding-right: 0.5rem;
        font-size: 0.7rem;
        color: var(--primary-accent-color);
        vertical-align: 18.8%;
    }

    .affiliates :global(img) {
        margin-right: var(--caption-gutter);
        width: 45%;
    }
</style>

<article>
    <Carousel id="final" scrollOffset="30vh" height="50vw">
        <Image src="../../osher/front-page.png" alt="Osher front page" width="1400" height="2514" />
        <Image src="../../osher/membership.png" alt="Osher membership" width="1400" height="1835" />
        <Image src="../../osher/course-browse.png" alt="Osher front page" width="1400" height="1458" />
        <Image src="../../osher/course-page.png" alt="Osher front page" width="1400" height="1513" />
    </Carousel>
    <h1>
        <span>Case Study</span>
        <span class="logo">Osher Lifelong Learning Institute <span class="subheading">at Colorado State University</span></span>
    </h1>
    <p class="lede">
        Over the course of the 2017-2018 academic year the team at the Division of Continuing Education at CSU,
        researched, designed, and delivered a new OLLI course registration platform and web presence for their students.
        We were a small team; I performed UX research, UI design and development.
    </p>
    <p>
        The <i>Osher Lifelong Learning Institute</i> (OLLI) at <i>Colorado State University</i> (CSU) provides
        intellectual nourishment to seniors and retirees throughout northern Colorado. Through feedback from students
        and OLLI administrators, a business case was presented to overhaul the customer experience, both in form and
        function. In concert with OLLI stakeholders, my team and I set about reimagining what a new OLLI registration
        experience might look like.
    </p>
    <p>
        In addition to the above following non-functional requirements had to be met:
    </p>
    <ul>
        <li>WCAG AA compliance</li>
        <li>Alignment with CSU style guide and colour palette</li>
    </ul>
    <h2>Research &amp; Requirements</h2>
    <p>
        Through a series of interviews with OLLI stakeholders and administrative staff we were able to document their
        existing business processes and customer experience. My team and I had already been exposed to their systems and
        personnel for a number of years, so this became a time to refine our understanding and generate formal
        documentation. I used <i>Business Process Model Notation</i> (BPMN). <strong>User journies</strong> were
        inferred from interviews and business processes:
    </p>
    <Carousel id="bpmn" scrollOffset="30vh" height="20rem">
        <Image src="../../osher/instructor-recruitment-bpmn.png" alt="Instructor recruitment BPMN" width="2439" height="1309" />
        <Image src="../../osher/registration-bpmn.png" alt="Student registration BPMN" width="2083" height="1483" />
        <Image src="../../osher/checkout-bpmn.png" alt="Checkout BPMN" width="1731" height="870" />
        <Image src="../../osher/payment-bpmn.png" alt="Payment BPMN" width="2013" height="1326" />
    </Carousel>
    <h2>Design Process</h2>
    <p>
        <strong>User stories</strong> were generated from their processes could be automated or refined using
        technology. We then set about putting together a workable prototype. Below is the iterative wireframes I put
        together in Adobe XD.
    </p>
    <Carousel id="wireframes" scrollOffset="30vh" height="20rem">
        <Image src="../../osher/wireframe-1.png" alt="Wireframe version 1" width="1300" height="1300" />
        <Image src="../../osher/wireframe-2.png" alt="Wireframe version 2" width="1300" height="1835" />
        <Image src="../../osher/wireframe-3.png" alt="Wireframe version 3" width="1300" height="1934" />
        <Image src="../../osher/wireframe-4.png" alt="Wireframe version 4" width="1300" height="1934" />
        <Image src="../../osher/wireframe-5.png" alt="Wireframe version 5" width="1300" height="1934" />
        <Image src="../../osher/wireframe-6.png" alt="Wireframe version 6" width="1300" height="1934" />
        <Image src="../../osher/wireframe-7.png" alt="Wireframe version 7" width="1300" height="1934" />
        <Image src="../../osher/front-page.png" alt="Final high-fidelity mockup" width="1400" height="2514" />
    </Carousel>
    <h2>Feature Highlights</h2>
    <h3>Course Discovery</h3>
    <p>
        During it became clear that course were often too hard to find. Students were required to paginated through a
        fixed list of courses, and other meta-data. We employed the use of <strong>faceted search</strong> to solve this
        issue headon. Dimensions for the search, available on the left-hand side were determined by:
    </p>
    <ul>
        <li>The <strong>data points</strong> we had available to us from the underlying systems, and;</li>
        <li><strong>Feedback</strong> from students, OLLI stakeholders and administrators.</li>
    </ul>
    <h3>Use of Colour</h3>
    <p>
        Est laborum aliqua officia eiusmod veniam eiusmod amet anim id sit cupidatat aliqua ad est. Aliquip ullamco
        pariatur proident incididunt irure fugiat ea cupidatat. Aute do in ea Lorem pariatur aliqua nisi eiusmod sit.
        Nulla quis veniam eu exercitation anim. Sint velit deserunt sit voluptate culpa.
    </p>
    <figure class="affiliates">
        <Image src="../../osher/professional-development-front-page-cropped.png" alt="Professional Development front page" width="1400" height="700" align="left" />
        <figcaption>
            <p>
                As the OLLI course registration was to be part of a series of affiliated sites, it was important that the design
                language be extensible, and scale to various new challenges.
            </p>
        </figcaption>
    </figure>
    <h3>Page Headers &amp; Alerting</h3>
    <p>
        Anim qui minim officia consequat sit duis minim enim commodo culpa exercitation occaecat veniam. Adipisicing
        amet pariatur labore eiusmod. Sint dolor quis ut ullamco ex pariatur culpa irure pariatur anim qui velit. Magna
        labore officia do proident ad veniam id ea consequat sunt aliqua nisi esse aliquip. Consectetur quis sunt labore
        nisi non mollit anim ex laborum duis laboris aute consectetur ipsum. Cillum proident enim commodo anim
        reprehenderit proident in cupidatat aute elit.
    </p>
    <h2>Results</h2>
    <p>
        The first iteration of the site launched in the autumn of 2018 and received positive feedback from students and
        OLLI staff alike. As with many projects, the next set of iterations are still to come.
    </p>
</article>