<script>
    import Section from '../../components/Section.svelte';
</script>

<style>
    .logo {
        --mask-image: url("../osher-logo.svg");
        --mask-size: contain;
        --mask-repeat: no-repeat;
        --mask-position: 0 65%;
        background-color: var(--default-copy-color);
        -webkit-mask-image: var(--mask-image);
        -webkit-mask-size: var(--mask-size);
        -webkit-mask-repeat: var(--mask-repeat);
        -webkit-mask-position: var(--mask-position);
        mask-image: var(--mask-image);
        mask-size: var(--mask-size);
        mask-repeat: var(--mask-repeat);
        mask-position: var(--mask-position);
        height: 72px;
        width: 30rem;           /* TODO: Either introduce media query at smaller screen widths
                                   or calc() a smarter width value */
        text-indent: -1000px;   /* TODO: Do more to visually hide text */
    }

    h2 {
        font-weight: 600;
        margin-top: 6rem;
    }

    img {
        border-radius: 6px;
        width: 100%;
    }

    .lede {
        font-size: 1.5rem;
        line-height: 1.5;
        color: rgba(255, 255, 255, 0.7);
        font-weight: 500;
    }
</style>

<article>
    <h1 class="logo">Osher Lifelong Learning Institute <span class="subheading">at Colorado State University</span></h1>
    <h2>Design Brief</h2>
    <p class="lede">The Division of Continuing Education at Colorado State University is responsible for the development and maintenance of the OLLI. The original customer experience was considered confusing, and overly complex for the target audience.</p>
    <img src="https://dummyimage.com/1000x700/eee/222" alt="" />
    <p>The Division of Continuing Education at Colorado State University is responsible for the development and maintenance of the OLLI. The original customer experience was considered confusing, and overly complex for the target audience.</p>
    <img src="https://dummyimage.com/1000x700/ccc/111" alt="" />
    <p>The Division of Continuing Education at Colorado State University is responsible for the development and maintenance of the OLLI. The original customer experience was considered confusing, and overly complex for the target audience.</p>
    <img src="https://dummyimage.com/1000x700/fff/555" alt="" />
</article>