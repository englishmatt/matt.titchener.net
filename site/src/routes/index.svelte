<script>
    import Section from '../components/Section.svelte';
    import Introduction from '../components/sections/Introduction.svelte';
    import Entry from '../components/Entry.svelte';
    import Description from '../components/Description.svelte';
    import Image from '../components/Image.svelte';
</script>

<style>
    :global(main > .introduction) {
        --mask-image: linear-gradient(black 75%, transparent 95%, transparent);
        margin-bottom: calc((var(--site-header-height) + var(--section-padding-top)) *-1);
        mask-image: var(--mask-image);
        -webkit-mask-image: var(--mask-image);
        pointer-events: none;
    }

    :global(.introduction > div) {
        /* Hack to overcome odd rendering bug in Firefox 79.0 */
        background-image: linear-gradient(transparent, transparent);
    }

    :global(h2 + section) {
        padding-top: 0;
    }

    :global(h2) {
        font-family: 'Montserrat', sans-serif;
        position: sticky;
        text-transform: uppercase;
        top: 0;
    }
</style>

<Section class="introduction" minHeight="calc(100vh - 7rem)">
    <Entry entryOffset="20vh">
        <Introduction>
            <span slot="headline">I’m a designer-developer based in California.</span><br />
            <span>Accessibility and universal design are important to me.</span>
        </Introduction>
    </Entry>
</Section>

<Section id="entries">
    <Entry>
        <div slot="item">
            <Image alt="FaceSpace" src="/FaceSpace.png" width="1000" height="1000" borderRadius="6px" backgroundColor="rgba(0, 0, 0, 0.4)" decoding="sync" importance="high" />
        </div>
        <!-- TODO: Remove wrapping span; this is only required as Svelte/issue #1037 has not be closed.
            See for more info: https://github.com/sveltejs/svelte/issues/1037 -->
        <span slot="title">FaceSpace</span>
        <p slot="description">After winning the 2003 Boxes &amp; Arrows site redesign competition, we set to work making our vision a reality.</p>
    </Entry>
</Section>

<Section id="entries2">
    <Entry>
        <div slot="item">
            <Image alt="Foobar" src="/Budgeting.svg" width="1000" height="600" borderRadius="6px" backgroundColor="rgba(0, 0, 0, 0.4)" loading="lazy" />
        </div>
        <span slot="title">Budgeting</span>
        <p slot="description">Budgeting started as a speculative project to design personal budgeting and financial planning application.</p>
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
