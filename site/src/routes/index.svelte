<script>
    import Section from '../components/Section.svelte';
    import Introduction from '../components/sections/Introduction.svelte';
    import Entry from '../components/Entry.svelte';
    import Description from '../components/Description.svelte';
</script>

<style>
    :global(main > section.introduction) {
        margin-bottom: calc((var(--site-header-height) + var(--section-padding-top)) *-1);
    }
</style>

<Section class="introduction" minHeight="calc(100vh - 5rem)">
    <Entry entryOffset="20vh">
        <Introduction>I’m Matt, a UX designer and software engineer from the UK. Accessibility and universal design are central to my work, be it engineering or design.</Introduction>
    </Entry>
</Section>

<Section id="entries">
    <Entry>
        <img slot="item" src="http://placeimg.com/1000/500/nature" alt="Kitty" />
        <!-- TODO: Remove wrapping span; this is only required as Svelte/issue #1037 has not be closed.
             See for more info: https://github.com/sveltejs/svelte/issues/1037 -->
        <span slot="title">Boxes & Arrows</span>
        <p slot="description">After winning the 2003 Boxes &amp; Arrows site redesign competition, we set to work making our vision a reality.</p>
    </Entry>
</Section>

<Section id="entries2">
    <Entry>
        <img slot="item" src="http://placeimg.com/1000/600/nature" loading="lazy" alt="Kitty" />
    </Entry>
</Section>
