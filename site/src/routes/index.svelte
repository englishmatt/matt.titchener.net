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
        --mask-image: linear-gradient(black 75%, transparent 95%, transparent);
        -webkit-mask-image: var(--mask-image);
        mask-image: var(--mask-image);
    }

    :global(main > .introduction > .introduction-entry) {
        position: fixed;
        top: 23%;
        animation-delay: 500ms;
        animation-duration: 1000ms;
        animation-iteration-count: 1;
        animation-name: show-lede;
        animation-timing-function: cubic-bezier(.02, .02, 0, 1.01);
        animation-fill-mode: forwards;
        background-image: linear-gradient(transparent, transparent);    /* Hack to overcome odd rendering bug in Firefox 79.0 */
        opacity: 0;
    }

    .work {
        display: flex;
    }

    .work > :global(:nth-child(1)) {
        order: 2;
    }

    .entries {
        order: 1;
        max-width: calc(var(--max-main-content-width) - var(--content-left-margin));
        width: calc(var(--main-content-width) - var(--content-left-margin));
    }

    @keyframes show-lede {
        from {
            opacity: 0;
            transform: translateY(0) scale(0.95);;
        }

        to {
            opacity: 1;
            transform: translateY(-4rem);
        }
    }
</style>

<Section id="introduction" class="introduction" on:intersect={handleIntersect}>
    <Entry entryOffset="20vh" class="introduction-entry">
        <Introduction>
            <span slot="headline">I’m a designer-developer based in California.</span><br />
            <span>Accessibility and universal design are important to me.</span>
        </Introduction>
    </Entry>
</Section>

<section class="work">
    <TableOfContents {currentSection} />
    <section id="entries" class="entries">
        <Section id="facespace" on:intersect={handleIntersect}>
            <Entry title="FaceSpace">
                <p slot="description">After winning the 2003 Boxes &amp; Arrows site redesign competition, we set to work making our vision a reality.</p>
            </Entry>
        </Section>

        <Section id="osher" on:intersect={handleIntersect}>
            <Entry title="Osher Foundation" subtitle="at Colorado State University" logo="../osher-logo.svg">
                <p slot="description">Budgeting started as a speculative project to design personal budgeting and financial planning application.</p>
            </Entry>
        </Section>

        <Section id="budgeting" on:intersect={handleIntersect}>
            <Entry title="Budgeting">
                <p slot="description">Budgeting started as a speculative project to design personal budgeting and financial planning application.</p>
            </Entry>
        </Section>

        <Section id="projectx" on:intersect={handleIntersect}>
            <Entry title="Project X">
                <p slot="description">After winning the 2003 Boxes &amp; Arrows site redesign competition, we set to work making our vision a reality.</p>
            </Entry>
        </Section>

        <Section id="boxesandarrows" on:intersect={handleIntersect}>
            <Entry title="Boxes &amp; Arrows" logo="../boxesandarrows-logo.svg">
                <p slot="description">After winning the 2003 Boxes &amp; Arrows site redesign competition, we set to work making our vision a reality.</p>
            </Entry>
        </Section>

        <Section id="elimsprings" on:intersect={handleIntersect}>
            <Entry title="Elim Springs" logo="../elimsprings-logo.svg">
                <p slot="description">After winning the 2003 Boxes &amp; Arrows site redesign competition, we set to work making our vision a reality.</p>
            </Entry>
        </Section>
    </section>
</section>