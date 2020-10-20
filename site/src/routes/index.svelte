<svelte:head>
    <title>Matt Titchener</title>
    <meta name="description" content="Matt Titchener&rsquo;s UXD and visual design portfolio front page." />
</svelte:head>

<script>
    import Section from '../components/Section.svelte';
    import Introduction from '../components/sections/Introduction.svelte';
    import Entry from '../components/Entry.svelte';
    import TableOfContents from '../components/TableOfContents.svelte';
    import { onMount } from 'svelte';
    import { sectionClassName } from "../stores.js";
    import { goto } from "@sapper/app";

    let currentSection = null;

    async function handleIntersect(event) {
        await goto(`#${event.detail.id}`, { noscroll: true, replaceState: true });
        currentSection = event.detail.id;

        // WARNING: Do not set state in Sapper/SSR - this will leak global data to other users.
        // TODO: Consider using session store for this?
        if (process.browser) {
            sectionClassName.set(event.detail.id);
        }
    }

    function handleHashChange() {
        const id = window.location.hash.substring(1);
        const element = document.getElementById(id);

        if (element instanceof HTMLElement) {
            element.scrollIntoView(true);
        }
    }

    onMount(handleHashChange);
</script>

<style>
    :global(main > .introduction) {
        --mask-image: linear-gradient(to top, transparent 7rem, black 19rem);
        -webkit-mask-image: var(--mask-image);
        mask-image: var(--mask-image);
        margin-top: calc(var(--site-header-height) * -1);
        background-image: linear-gradient(transparent, transparent);    /* Hack to overcome odd rendering bug in Firefox 79.0 */
    }

    :global(main > .introduction > .introduction-entry) {
        align-self: flex-start;
        animation-delay: 500ms;
        animation-duration: 1000ms;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-name: show-lede;
        animation-timing-function: cubic-bezier(.02, .02, 0, 1.01);
        opacity: 0;
        position: sticky;
        top: 36%;
    }

    :global(main .projectx h3) {
        font-family: "Permanent Marker";
        font-weight: 400;
    }

    :global(.entries > section:first-child) {
        margin-top: calc(var(--padding-top) * -1);
    }

    .work {
        --overlap: 24rem;
        --work-mask-image: linear-gradient(to bottom, transparent, black 5rem);
        display: flex;
        padding-top: var(--overlap);
        margin-top: calc(var(--overlap) * -1);
        -webkit-mask-image: var(--work-mask-image);
        mask-image: var(--work-mask-image);
    }

    .work > :global(:nth-child(1)) {
        order: 2;
    }

    .entries {
        flex: 0 0 var(--main-content-width);
        max-width: var(--max-main-content-width);
        order: 1;
    }
</style>

<svelte:window on:hashchange={handleHashChange} />

<Section id="introduction" on:intersect={handleIntersect} minHeight="100vh" paddingTop="0" intersectionMargin="-80% 0px -20% 0px" intersectionThreshold="0">
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
        <Section id="osher" on:intersect={handleIntersect} intersectSelector=".entry">
            <Entry title="Osher Lifelong Learning Institute" logo="../osher-logo.svg" href="/work/osher/">
                <ul slot="byline">
                    <li>Research</li>
                    <li>IA</li>
                    <li>Workflows</li>
                    <li>UI and Visual Design</li>
                </ul>
                <p slot="description">
                    Class registration and student information system for Osher Lifelong Learning Institute at Colorado
                    State University.
                </p>
            </Entry>
        </Section>
        <Section id="elimsprings" on:intersect={handleIntersect} intersectSelector=".entry">
            <Entry title="Elim Springs" logo="../elimsprings-logo.svg" href="/work/elim-springs/">
                <ul slot="byline">
                    <li>Brand</li>
                    <li>UI and visual design</li>
                </ul>
                <p slot="description">
                    Marketing and e-commerce solution for event management and venue agency based in Düsseldorf,
                    Germany.
                </p>
            </Entry>
        </Section>
        <Section id="budgeting" on:intersect={handleIntersect} intersectSelector=".entry">
            <Entry title="Budgeting" logo="../budgeting-logo.svg" href="/work/budgeting/">
                <ul slot="byline">
                    <li>UX, UI and visual design</li>
                </ul>
                <p slot="description">
                    Speculative user interface design for a personal finance and budgeting application for the web and
                    desktop.
                </p>
            </Entry>
        </Section>
        <Section id="boxesandarrows" on:intersect={handleIntersect} intersectSelector=".entry">
            <Entry title="Boxes &amp; Arrows" logo="../boxesandarrows-logo.svg" href="/work/boxes-and-arrows/">
                <ul slot="byline">
                    <li>IA</li>
                    <li>UI and visual design</li>
                </ul>
                <p slot="description">
                    Award-winning site redesign and front-end implementation for the Boxes and Arrows magazine site.
                </p>
            </Entry>
        </Section>
        <Section id="projectx" on:intersect={handleIntersect} intersectSelector=".entry">
            <Entry title="Project X" href="/work/project-x/">
                <ul slot="byline">
                    <li>Research</li>
                    <li>Workflows</li>
                    <li>UI and visual design</li>
                </ul>
                <p slot="description">
                    Content Relationship Manager, with outreach and call-scheduling for teams of remote volunteers distributed
                    throughout the United States.
                </p>
            </Entry>
        </Section>
    </section>
</section>
