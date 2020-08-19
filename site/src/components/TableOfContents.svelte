<style>
    ul {
        align-self: flex-start;
        list-style: none;
        padding-left: calc(var(--navigation-horizontal-padding) * 2);
        padding-top: calc(var(--site-header-height) + var(--section-padding-top));
        position: sticky;
        top: 0;
        margin-left: -1rem;
    }

    li {
        position: relative;
    }

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
        color: rgba(0, 0, 0, 0.4);
        display: inline-block;
        padding: 0.2rem 1rem 0.2rem;
        text-decoration: none;
        font-weight: 500;
    }

    li:hover a,
    .active a {
        font-weight: 700;
        color: var(--default-copy-color);
    }
</style>

<ul>
    <li class="active"><a href="#facespace">FaceSpace</a></li>
    <li><a href="#budgeting">Budgeting</a></li>
    <li><a href="#projectx">Project X</a></li>
    <li><a href="#boxesandarrows">Boxes &amp; Arrows</a></li>
    <li><a href="#elimsprings">Elim Springs</a></li>
</ul>