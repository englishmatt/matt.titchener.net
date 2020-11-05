<svelte:head>
    <title>Projext X &#183; Matt Titchener</title>
    <meta name="description" content="Matt Titchener&rsquo;s case study for a custom contact relationship manager with functional requirements documentation." />
</svelte:head>

<script>
    import Image from "../../components/Image.svelte";
    import Carousel from "../../components/Carousel.svelte";
    import Article from "../../components/Article.svelte";
    import Figure from "../../components/Figure.svelte";
</script>

<style>
    .name {
        display: block;
        font-family: "Permanent Marker";
        font-weight: 400;
        text-transform: capitalize;
        font-size: 4rem;
    }
</style>

<Article>
    <h1>
        <span>Case Study</span>
        <span class="name">Project X</span>
    </h1>
    <p class="lede">
        Content Relationship Manager, with outreach and call-scheduling for teams of remote volunteers distributed
        throughout the United States.
    </p>
    <h2>Opportunity</h2>
    <p>
        My employer was interested in contacting a dynamic, fast-growing list of contacts throughout the United States,
        either through in-person visits, phone, or email using an small army of volunteers, also distributed throughout
        the country. Such an endeavor called for (close to) real-time coordination, tracking, and communication to
        identify who head been contacted and their status. A classic case for a <strong>Contact Relationship Management</strong>
        (CRM) solution; I helped my employer determine the most cost-effective approach, and we set out designing a
        <strong>bespoke web application</strong>.
    </p>
    <h2>Process</h2>
    <h3>Wireframes</h3>
    <p>
        I spent time <strong>interviewing stakeholders and volunteers</strong> to understand the problem-space, and over
        the course of a few weeks, put together a document that captured my recommendations for <strong>UI design</strong>,
        <strong>user workflows</strong>, and other <strong>functional and non-functional requirements</strong>.
    </p>
    <Carousel id="workflows" scrollOffset="30vh" height="50vw">
        <Image src="../../project-x/customer-list.png" alt="User journey" width="2439" height="1309" />
        <Image src="../../project-x/customer-record.png" alt="User workflow" width="2439" height="1309" />
        <Image src="../../project-x/customer-contact-history.png" alt="Customer life cycle" width="2439" height="1309" />
        <Image src="../../project-x/customer-record-errors-messages.png" alt="Customer life cycle" width="2439" height="1309" />
        <Image src="../../project-x/customer-record-quick-edit.png" alt="Customer life cycle" width="2439" height="1309" />
        <Image src="../../project-x/customer-record-first-contact.png" alt="Customer life cycle" width="2439" height="1309" />
    </Carousel>
    <h2>User Journeys &amp; Workflows</h2>
    <p>
        Alongside more standard wireframes, I included <strong>flow control</strong> to accurately capture user
        workflows as they were intended. Such an approach becomes particularly useful when <strong>handing off</strong>
        to an engineering team, and provides a reference for stakeholders and project managers throughout the project.
        Additional <strong>infographics</strong> were used to crystalise various aspects of the product:
    </p>
    <Carousel id="workflows" scrollOffset="30vh" height="30rem">
        <Image src="../../project-x/user-journey.png" alt="User journey" width="2439" height="1309" />
        <Image src="../../project-x/user-workflow.png" alt="User workflow" width="2439" height="1309" />
        <Image src="../../project-x/customer-life-cycle.png" alt="Customer life cycle" width="2439" height="1309" />
    </Carousel>
    <h2>Style Guidelines</h2>
    <Figure>
        <Image alt="Style guidelines" src="../../project-x/style-guidelines.png" align="left" />
        <p slot="caption">
            I provided semantics for messaging and notifications throughout the application. These are useful when
            handing off to a visual designer.
        </p>
    </Figure>
    <h2>Outcome</h2>
    <p>
        The wireframes and documentation I delivered provided a comprehensive foundation for the development of a
        Contact Relationship Management (CRM) solution, and clarified to me the value of clear, precise, functional
        documentation. I was particularly happy with the format used to outline workflows and the business logic
        required. While this project definitely took a strong waterfall approach, these techniques and deliverables
        transfer to other methodologies well, are something I have continued to practice to this day.
    </p>
</Article>
