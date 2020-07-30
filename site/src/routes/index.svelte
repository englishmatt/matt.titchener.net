<script>
    import Section from '../components/Section.svelte';
    import Introduction from '../components/sections/Introduction.svelte';
    import Entry from '../components/Entry.svelte';
</script>

<Section id="entry">
    <Entry entryOffset="20vh">
        <Introduction />
    </Entry>
</Section>

<Section id="entry">
    <Entry>
        <img src="http://placekitten.com/300/200" alt="Kitty" />
    </Entry>
    <Entry>
        <img src="http://placekitten.com/100/200" alt="Kitty" />
    </Entry>
</Section>