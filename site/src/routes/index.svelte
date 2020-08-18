<script>
    import Section from '../components/Section.svelte';
    import Introduction from '../components/sections/Introduction.svelte';
    import Entry from '../components/Entry.svelte';
    import Description from '../components/Description.svelte';
</script>

<style>
    :global(main > .introduction) {
        --mask-image: linear-gradient(black 75%, transparent 95%, transparent);
        -webkit-mask-image: var(--mask-image);
        mask-image: var(--mask-image);
    }

    :global(.introduction > div) {
        /* Hack to overcome odd rendering bug in Firefox 79.0 */
        background-image: linear-gradient(transparent, transparent);
    }
</style>

<Section id="introduction" class="introduction" minHeight="calc(100vh - 7rem)">
    <Entry entryOffset="20vh">
        <Introduction>
            <span slot="headline">I’m a designer-developer based in California.</span><br />
            <span>Accessibility and universal design are important to me.</span>
        </Introduction>
    </Entry>
</Section>

<Section id="entries">
    <Entry>
        <span slot="title">FaceSpace</span>
        <p slot="description">After winning the 2003 Boxes &amp; Arrows site redesign competition, we set to work making our vision a reality.</p>
    </Entry>
</Section>

<Section id="entries2">
    <Entry>
        <span slot="title">Budgeting</span>
        <p slot="description">Budgeting started as a speculative project to design personal budgeting and financial planning application.</p>
    </Entry>
</Section>

<Section id="entries">
    <Entry>
        <span slot="title">Project X</span>
        <p slot="description">After winning the 2003 Boxes &amp; Arrows site redesign competition, we set to work making our vision a reality.</p>
    </Entry>
</Section>

<Section id="entries2">
    <Entry>
        <span slot="title">Boxes &amp; Arrows</span>
        <p slot="description">After winning the 2003 Boxes &amp; Arrows site redesign competition, we set to work making our vision a reality.</p>
    </Entry>
</Section>

<Section id="entries2">
    <Entry>
        <span slot="title">Elim Springs</span>
        <p slot="description">After winning the 2003 Boxes &amp; Arrows site redesign competition, we set to work making our vision a reality.</p>
    </Entry>
</Section>
