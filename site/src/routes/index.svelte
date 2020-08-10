<script>
    import Section from '../components/Section.svelte';
    import Introduction from '../components/sections/Introduction.svelte';
    import Entry from '../components/Entry.svelte';
    import Description from '../components/Description.svelte';
    import Image from '../components/Image.svelte';
</script>

<style>
    :global(main > section.introduction) {
        margin-bottom: calc((var(--site-header-height) + var(--section-padding-top)) *-1);
    }
</style>

<Section class="introduction" minHeight="calc(100vh - 5rem)">
    <Entry entryOffset="20vh">
        <Introduction>I’m a software engineer and UX designer based in California. I specialise in interaction and UI design that is accessible and usable.</Introduction>
    </Entry>
</Section>

<Section id="entries">
    <Entry>
        <div slot="item">
            <Image alt="Boxes &amp; Arrows" src="http://placeimg.com/1000/500/nature" width="1000" height="500" borderRadius="6px" backgroundColor="rgba(0, 0, 0, 0.4)" decoding="sync" importance="high" />
        </div>
        <!-- TODO: Remove wrapping span; this is only required as Svelte/issue #1037 has not be closed.
             See for more info: https://github.com/sveltejs/svelte/issues/1037 -->
        <span slot="title">Boxes & Arrows</span>
        <p slot="description">After winning the 2003 Boxes &amp; Arrows site redesign competition, we set to work making our vision a reality.</p>
    </Entry>
</Section>

<Section id="entries2">
    <Entry>
        <div slot="item">
            <Image alt="Foobar" src="http://placeimg.com/1000/600/nature" width="1000" height="600" borderRadius="6px" backgroundColor="rgba(0, 0, 0, 0.4)" loading="lazy" />
        </div>
        <span slot="title">Boxes & Arrows</span>
        <p slot="description">After winning the 2003 Boxes &amp; Arrows site redesign competition, we set to work making our vision a reality.</p>
    </Entry>
</Section>

<Section id="entries2">
    <Entry>
        <div slot="item">
            <Image alt="Foobar" src="http://placeimg.com/1000/650/nature" width="1000" height="600" borderRadius="6px" backgroundColor="rgba(0, 0, 0, 0.4)" loading="lazy" />
        </div>
        <span slot="title">Boxes & Arrows</span>
        <p slot="description">After winning the 2003 Boxes &amp; Arrows site redesign competition, we set to work making our vision a reality.</p>
    </Entry>
</Section>

<Section id="entries2">
    <Entry>
        <div slot="item">
            <Image alt="Foobar" src="http://placeimg.com/1000/700/nature" width="1000" height="600" borderRadius="6px" backgroundColor="rgba(0, 0, 0, 0.4)" loading="lazy" />
        </div>
        <span slot="title">Boxes & Arrows</span>
        <p slot="description">After winning the 2003 Boxes &amp; Arrows site redesign competition, we set to work making our vision a reality.</p>
    </Entry>
</Section>

<Section id="entries2">
    <Entry>
        <div slot="item">
            <Image alt="Foobar" src="http://placeimg.com/1000/750/nature" width="1000" height="600" borderRadius="6px" backgroundColor="rgba(0, 0, 0, 0.4)" loading="lazy" />
        </div>
        <span slot="title">Boxes & Arrows</span>
        <p slot="description">After winning the 2003 Boxes &amp; Arrows site redesign competition, we set to work making our vision a reality.</p>
    </Entry>
</Section>

<Section id="entries2">
    <Entry>
        <div slot="item">
            <Image alt="Foobar" src="http://placeimg.com/1000/800/nature" width="1000" height="600" borderRadius="6px" backgroundColor="rgba(0, 0, 0, 0.4)" loading="lazy" />
        </div>
        <span slot="title">Boxes & Arrows</span>
        <p slot="description">After winning the 2003 Boxes &amp; Arrows site redesign competition, we set to work making our vision a reality.</p>
    </Entry>
</Section>

<Section id="entries2">
    <Entry>
        <div slot="item">
            <Image alt="Foobar" src="http://placeimg.com/1000/850/nature" width="1000" height="600" borderRadius="6px" backgroundColor="rgba(0, 0, 0, 0.4)" loading="lazy" />
        </div>
        <span slot="title">Boxes & Arrows</span>
        <p slot="description">After winning the 2003 Boxes &amp; Arrows site redesign competition, we set to work making our vision a reality.</p>
    </Entry>
</Section>

<Section id="entries2">
    <Entry>
        <div slot="item">
            <Image alt="Foobar" src="http://placeimg.com/1000/900/nature" width="1000" height="600" borderRadius="6px" backgroundColor="rgba(0, 0, 0, 0.4)" loading="lazy" />
        </div>
        <span slot="title">Boxes & Arrows</span>
        <p slot="description">After winning the 2003 Boxes &amp; Arrows site redesign competition, we set to work making our vision a reality.</p>
    </Entry>
</Section>
