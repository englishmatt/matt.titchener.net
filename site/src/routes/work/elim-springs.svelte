<script>
    import Image from "../../components/Image.svelte";
    import Carousel from "../../components/Carousel.svelte";
</script>

<style>
    .logo {
        --mask-image: url("../elimsprings-logo.svg");
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
        display: block;
        margin-top: 1rem;
    }

    h1 {
        text-transform: uppercase;
        font-weight: 700;
        font-size: 1.2rem;
        letter-spacing: 1px;
        margin-top: 5rem;
        font-family: 'Montserrat', 'Inter', sans-serif;
    }

    h1, h2 {
        color: var(--primary-accent-color);
    }

    p {
        margin-top: 0;
    }

    :global(body) {
        overflow: hidden;
    }

    :global(.work.elimsprings main) {
        height: 100vw;
        width: 100vh;
        overflow: auto;
        direction: rtl;
        transform: rotate(-90deg) translate(-100%, 0);
        transform-origin: 0 0;
        mask-image: none;
        -webkit-mask-image: none;
        padding-top: 0;
    }

    article {
        transform: rotate(90deg) translate(100%, 0);
        transform-origin: 100% 0;
        height: 10rem;
        display: inline-flex;
        direction: ltr;
        width: auto !important;
        transition: transform 300ms, transform-origin 300ms;
    }

    section {
        padding: 0 var(--content-left-margin);
        flex: 1 1 auto;
        box-sizing: border-box;
    }

    p {
        width: 60vw;
    }
</style>

<article>
    <section>
        <Image alt="final design" src="http://placekitten.com/1000/500" />
        <h1>
            <span>Case Study</span>
            <span class="logo">Osher Lifelong Learning Institute <span class="subheading">at Colorado State University</span></span>
        </h1>
        <p class="lede">
            Ullamco aute nostrud ex nostrud commodo esse non occaecat ea quis laborum enim ipsum. Eiusmod quis esse officia tempor officia quis aliqua incididunt voluptate dolor reprehenderit cupidatat est.
        </p>
        <p>
            Velit amet elit sunt Lorem incididunt consectetur eu enim do sint quis duis veniam commodo. Nostrud voluptate elit enim excepteur elit sit excepteur elit eu amet nostrud. Aliquip laborum incididunt esse ullamco aliqua tempor aute non. Enim ullamco duis anim labore commodo Lorem ex aliquip sunt et aliqua.
        </p>
    </section>
    <section>
        <p>
            Ullamco aute nostrud ex nostrud commodo esse non occaecat ea quis laborum enim ipsum. Eiusmod quis esse officia tempor officia quis aliqua incididunt voluptate dolor reprehenderit cupidatat est. Velit amet elit sunt Lorem incididunt consectetur eu enim do sint quis duis veniam commodo. Nostrud voluptate elit enim excepteur elit sit excepteur elit eu amet nostrud. Aliquip laborum incididunt esse ullamco aliqua tempor aute non. Enim ullamco duis anim labore commodo Lorem ex aliquip sunt et aliqua.
        </p>
    </section>
</article>