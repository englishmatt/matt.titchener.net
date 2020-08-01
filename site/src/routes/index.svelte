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
        <!-- TODO: Remove wrapping div; this is only required as Svelte/issue #1037 has not be closed.
             See for more info: https://github.com/sveltejs/svelte/issues/1037 -->
        <div slot="description">
            <Description>
                <!-- Remove wrapping span, see above -->
                <span slot="title">Boxes & Arrows</span>
                <p>After winning the 2003 Boxes &amp; Arrows site redesign competition, we set to work making our vision a reality.</p>
            </Description>
        </div>
    </Entry>
    <Entry>
        <img src="http://placekitten.com/1000/600" alt="Kitty" loading="lazy" />
    </Entry>
    <Entry>
        <img src="http://placekitten.com/1000/700" alt="Kitty" loading="lazy" />
    </Entry>
</Section>

<Section id="entries2">
    <Entry>
        <img src="http://placekitten.com/1000/500" loading="lazy" alt="Kitty" />
        <!-- TODO: Remove wrapping div; this is only required as Svelte/issue #1037 has not be closed.
             See for more info: https://github.com/sveltejs/svelte/issues/1037 -->
        <div slot="description">
            <Description>
                <!-- Remove wrapping span, see above -->
                <span slot="title">Foobar</span>
                <p>Veniam deserunt voluptate labore consequat eiusmod. Laboris fugiat enim cupidatat mollit. Elit cupidatat incididunt tempor ea nisi laboris ea ad excepteur nisi consequat ut. Incididunt in laboris aliqua sint reprehenderit laborum ut. Tempor sit aliquip ullamco sit eiusmod veniam cupidatat aute anim reprehenderit aute ad. Irure non ex sunt velit velit mollit qui nostrud exercitation tempor. Culpa deserunt mollit nostrud in commodo.</p>
                <p>Ut id elit laboris ut sunt. Occaecat excepteur exercitation id dolor adipisicing sint elit sunt labore mollit enim et reprehenderit. Exercitation irure ex excepteur magna aliqua irure est.</p>
            </Description>
        </div>
    </Entry>
    <Entry>
        <img src="http://placekitten.com/1000/600" alt="Kitty" loading="lazy" />
    </Entry>
    <Entry>
        <img src="http://placekitten.com/1000/700" alt="Kitty" loading="lazy" />
    </Entry>
</Section>
