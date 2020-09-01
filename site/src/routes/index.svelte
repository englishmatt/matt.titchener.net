<script>
    import Section from '../components/Section.svelte';
    import Introduction from '../components/sections/Introduction.svelte';
    import Entry from '../components/Entry.svelte';
    import Description from '../components/Description.svelte';
    import TableOfContents from '../components/TableOfContents.svelte';

    let currentSection = null;

    function handleIntersect(event) {
        currentSection = event.detail.id;
    }
</script>

<style>
    :global(main > .introduction) {
        --mask-image: linear-gradient(to top, transparent 7rem, black 19rem);
        -webkit-mask-image: var(--mask-image);
        mask-image: var(--mask-image);
    }

    :global(main > .introduction > .introduction-entry) {
        align-self: flex-start;
        animation-delay: 500ms;
        animation-duration: 1000ms;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-name: show-lede;
        animation-timing-function: cubic-bezier(.02, .02, 0, 1.01);
        background-image: linear-gradient(transparent, transparent);    /* Hack to overcome odd rendering bug in Firefox 79.0 */
        opacity: 0;
        position: sticky;
        top: 44%;
        transform: rotate(-4.5deg);
    }

    :global(main .projectx h3) {
        font-family: "Permanent Marker";
        font-weight: 400;
    }

    .work {
        display: flex;
    }

    .work > :global(:nth-child(1)) {
        order: 2;
    }

    .entries {
        flex: 0 0 var(--main-content-width);
        max-width: var(--max-main-content-width);
        order: 1;
    }

    @keyframes show-lede {
        from {
            opacity: 0;
            transform: translateY(0);
        }

        to {
            opacity: 1;
            transform: translateY(-4rem);
        }
    }
</style>

<Section id="introduction" class="introduction" on:intersect={handleIntersect} minHeight="100vh">
    <Entry class="introduction-entry">
        <Introduction>
            <strong>Digital products,</strong><br />
            accessible and refined&mdash;<br />
            users matter most.
        </Introduction>
    </Entry>
</Section>

<section class="work">
    <TableOfContents {currentSection} />
    <section id="entries" class="entries">
        <Section id="osher" on:intersect={handleIntersect}>
            <Entry title="Osher Foundation" subtitle="at Colorado State University" logo="../osher-logo.svg">
                <span slot="byline">Research, IA, Workflows, UI and visual design</span>
                <p slot="description">Class registration and student information system for Osher Lifelong Learning students at Colorado State University.</p>
            </Entry>
        </Section>

        <Section id="elimsprings" on:intersect={handleIntersect}>
            <Entry title="Elim Springs" logo="../elimsprings-logo.svg">
                <span slot="byline">Brand, UI and visual design</span>
                <p slot="description">Marketing and payment processing for small German event management and venue agency.</p>
            </Entry>
        </Section>

        <Section id="budgeting" on:intersect={handleIntersect}>
            <Entry title="Budgeting" logo="../budgeting-logo.svg">
                <span slot="byline">UI and visual design</span>
                <p slot="description">Speculative user experience for personal finance and budgeting for the web and desktop.</p>
            </Entry>
        </Section>

        <Section id="boxesandarrows" on:intersect={handleIntersect}>
            <Entry title="Boxes &amp; Arrows" logo="../boxesandarrows-logo.svg">
                <span slot="byline">IA, UI and visual design</span>
                <p slot="description">Awarding winning site redesign for Boxes and Arrows with final deliverable.</p>
            </Entry>
        </Section>

        <Section id="projectx" on:intersect={handleIntersect}>
            <Entry title="Project X">
                <span slot="byline">Research, Workflows, UI and visual design</span>
                <p slot="description">Outreach, contact, and call-scheduling web application for remote volunteers nationwide.</p>
            </Entry>
        </Section>
    </section>
</section>