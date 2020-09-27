<svelte:head>
    <title>Boxes and Arrows &#183; Matt Titchener</title>
</svelte:head>

<script>
    import Image from "../../components/Image.svelte";
    import Carousel from "../../components/Carousel.svelte";
    import CaseStudy from "../../components/CaseStudy.svelte";
</script>

<style>
    .logo {
        --mask-image: url("../boxesandarrows-logo.svg");
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
        clear: both;
    }

    p {
        margin-top: 0;
    }
</style>

<CaseStudy>
    <section>
        <Carousel>
            <Image alt="" src="../../boxes-and-arrows/front-page.jpg" width="1440" height="1024" />
            <Image alt="" src="../../boxes-and-arrows/article-page.jpg" width="1440" height="1024" />
            <Image alt="" src="../../boxes-and-arrows/topic-page.jpg" width="1440" height="1024" />
            <Image alt="" src="../../boxes-and-arrows/search-page.jpg" width="1440" height="1024" />
            <Image alt="" src="../../boxes-and-arrows/category-page.jpg" width="1440" height="1024" />
        </Carousel>
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
        <h2>Design I... It... Iterations</h2>
        <Carousel height="20rem">
            <Image alt="" src="../../boxes-and-arrows/mockup-1.png" width="1440" height="1024" />
            <Image alt="" src="../../boxes-and-arrows/mockup-2.png" width="1440" height="1024" />
            <Image alt="" src="../../boxes-and-arrows/mockup-3.png" width="1440" height="1024" />
            <Image alt="" src="../../boxes-and-arrows/mockup-4.png" width="1440" height="1024" />
        </Carousel>
        <h2>Information Architecture</h2>
        <Carousel height="20rem">
            <Image alt="" src="../../boxes-and-arrows/information-architecture.png" width="1440" height="1024" />
            <Image alt="" src="../../boxes-and-arrows/issue-transitions-1.png" width="1440" height="1024" />
            <Image alt="" src="../../boxes-and-arrows/issue-transitions-2.png" width="1440" height="1024" />
            <Image alt="" src="../../boxes-and-arrows/issue-transitions-3.png" width="1440" height="1024" />
        </Carousel>
        <h2>Style Guide</h2>
        <p>
            Before Figma there was Adobe Photoshop and Illustrator. For the sake of maintaining reproduable styles across

        </p>
        <Carousel height="20rem">
            <Image alt="" src="../../boxes-and-arrows/style-guide-1.png" width="1440" height="1024" />
            <Image alt="" src="../../boxes-and-arrows/style-guide-2.png" width="1440" height="1024" />
            <Image alt="" src="../../boxes-and-arrows/style-guide-3.png" width="1440" height="1024" />
        </Carousel>
    </section>
    <section>
        <h2>Results</h2>
        <p>
            Ullamco aute nostrud ex nostrud commodo esse non occaecat ea quis laborum enim ipsum. Eiusmod quis esse officia tempor officia quis aliqua incididunt voluptate dolor reprehenderit cupidatat est. Velit amet elit sunt Lorem incididunt consectetur eu enim do sint quis duis veniam commodo. Nostrud voluptate elit enim excepteur elit sit excepteur elit eu amet nostrud. Aliquip laborum incididunt esse ullamco aliqua tempor aute non. Enim ullamco duis anim labore commodo Lorem ex aliquip sunt et aliqua.
        </p>
    </section>
</CaseStudy>