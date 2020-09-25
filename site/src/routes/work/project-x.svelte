<script>
    import Image from "../../components/Image.svelte";
    import Carousel from "../../components/Carousel.svelte";
    import CaseStudy from "../../components/CaseStudy.svelte";
</script>

<style>
    .logo {
        display: block;
        font-family: "Permanent Marker";
        font-weight: 400;
        text-transform: capitalize;
        font-size: 4rem;
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

    .style-guidelines :global(p::before) {
        content: "\25C4";
        display: inline-block;
        padding-right: 0.5rem;
        font-size: 0.7rem;
        color: var(--primary-accent-color);
        vertical-align: 18.8%;
    }

    .style-guidelines :global(img) {
        margin-right: var(--caption-gutter);
        width: 45%;
    }
</style>

<CaseStudy>
    <h1>
        <span>Case Study</span>
        <span class="logo">Project X</span>
    </h1>
    <p class="lede">
        Over the course of the 2017-2018 academic year the team at the Division of Continuing Education at CSU,
        researched, designed, and delivered a new OLLI course registration platform and web presence for their students.
        We were a small team; I performed UX research, UI design and development.
    </p>
    <h2>Wireframes</h2>
    <p>
        Through a series of interviews with OLLI stakeholders and administrative staff we were able to document their
        existing business processes and customer experience. My team and I had already been exposed to their systems and
        personnel for a number of years, so this became a time to refine our understanding and generate formal
        documentation. I used <i>Business Process Model Notation</i> (BPMN). <strong>User journies</strong> were
        inferred from interviews and business processes:
    </p>
    <Carousel id="workflows" scrollOffset="30vh" height="60vw">
        <Image src="../../project-x/customer-list.png" alt="User journey" width="2439" height="1309" />
        <Image src="../../project-x/customer-record.png" alt="User workflow" width="2439" height="1309" />
        <Image src="../../project-x/customer-contact-history.png" alt="Customer life cycle" width="2439" height="1309" />
        <Image src="../../project-x/customer-record-errors-messages.png" alt="Customer life cycle" width="2439" height="1309" />
        <Image src="../../project-x/customer-record-quick-edit.png" alt="Customer life cycle" width="2439" height="1309" />
        <Image src="../../project-x/customer-record-first-contact.png" alt="Customer life cycle" width="2439" height="1309" />
    </Carousel>
    <h2>User Journies &amp; Workflows</h2>
    <p>
        Through a series of interviews with OLLI stakeholders and administrative staff we were able to document their
        existing business processes and customer experience. My team and I had already been exposed to their systems and
        personnel for a number of years, so this became a time to refine our understanding and generate formal
        documentation. I used <i>Business Process Model Notation</i> (BPMN). <strong>User journies</strong> were
        inferred from interviews and business processes:
    </p>
    <Carousel id="workflows" scrollOffset="30vh" height="30rem">
        <Image src="../../project-x/user-journey.png" alt="User journey" width="2439" height="1309" />
        <Image src="../../project-x/user-workflow.png" alt="User workflow" width="2439" height="1309" />
        <Image src="../../project-x/customer-life-cycle.png" alt="Customer life cycle" width="2439" height="1309" />
    </Carousel>
    <h2>Style Guidelines</h2>
    <figure class="style-guidelines">
        <Image src="../../project-x/style-guidelines.png" alt="Style guidelines" align="left" />
        <figcaption>
            <p>
                As the OLLI course registration was to be part of a series of affiliated sites, it was important that
                the design language be extensible, and scale to various new challenges.
            </p>
        </figcaption>
    </figure>
    <h2>Results</h2>
    <p>
        Lorem in nostrud velit ipsum Lorem pariatur ex officia velit irure. Et aliquip amet Lorem officia occaecat ad 
        elit mollit. Culpa qui cillum dolor elit. Lorem in nostrud velit ipsum Lorem pariatur ex officia velit irure.
        Et aliquip amet Lorem officia occaecat ad elit mollit. Culpa qui cillum dolor elit.
    </p>
</CaseStudy>
