<script>
    export let currentSection = null;
</script>

<style>
    ul {
        align-items: flex-start;
        align-self: flex-start;
        display: flex;
        flex-direction: column;
        list-style: none;
        margin: -100% 0 0 -1rem;
        padding-left: calc(var(--navigation-horizontal-padding) * 2);
        position: sticky;
        top: calc(var(--site-header-height) + 9rem);
    }

    li {
        position: relative;
        width: 100%;
    }

    /* Not using `::marker` as it's not fully supported yet, and does not provide the
       flexibility we need. */
    li:hover::before,
    .active::before {
        --dimension: 0.5rem;
        content: "";
        width: var(--dimension);
        height: var(--dimension);
        background-color: var(--primary-accent-color);
        position: absolute;
        top: calc(50% - (var(--dimension) / 2));
        left: -1rem;
    }

    a {
        color: var(--default-copy-color);
        display: inline-block;
        padding: 0.2rem 1rem 0.2rem;
        text-decoration: none;
        font-weight: 500;
        transition: font-weight var(--navigation-transition-duration), color var(--navigation-transition-duration);
        width: 100%;
    }

    a span {
        opacity: 0.8;
        transition: opacity var(--navigation-transition-duration);
        white-space: nowrap;
    }

    li:hover a,
    .active a {
        font-weight: 700;
        color: var(--default-copy-color);
    }

    li:hover a span,
    .active a span {
        opacity: 1;
    }
</style>

<ul>
    <li class:active={currentSection === "osher"}><a href="#osher"><span>Osher Foundation</span></a></li>
    <li class:active={currentSection === "elimsprings"}><a href="#elimsprings"><span>Elim Springs</span></a></li>
    <li class:active={currentSection === "budgeting"}><a href="#budgeting"><span>Budgeting</span></a></li>
    <li class:active={currentSection === "boxesandarrows"}><a href="#boxesandarrows"><span>Boxes &amp; Arrows</span></a></li>
    <li class:active={currentSection === "projectx"}><a href="#projectx"><span>Project X</span></a></li>
</ul>