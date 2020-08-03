<script>
    import Section from '../components/Section.svelte';
    import Introduction from '../components/sections/Introduction.svelte';
    import Entry from '../components/Entry.svelte';
    import Description from '../components/Description.svelte';
</script>

<Section>
    <Entry entryOffset="20vh">
        <Introduction />
    </Entry>
</Section>

<Section id="entries">
    <Entry>
        <img src="http://placekitten.com/1000/500" loading="lazy" alt="Kitty" />
        <!-- TODO: Remove wrapping span; this is only required as Svelte/issue #1037 has not be closed.
             See for more info: https://github.com/sveltejs/svelte/issues/1037 -->
        <span slot="title">Boxes & Arrows</span>
        <p slot="description">After winning the 2003 Boxes &amp; Arrows site redesign competition, we set to work making our vision a reality.</p>
    </Entry>
</Section>

<Section id="entries2">
    <Entry>
        <img src="http://placekitten.com/1000/500" loading="lazy" alt="Kitty" />
    </Entry>
</Section>
