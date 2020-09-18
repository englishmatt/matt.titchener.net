<script>
    import Image from "../../components/Image.svelte";
    import MobileImage from "../../components/MobileImage.svelte";
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
        clear: both;
    }

    p {
        margin-top: 0;
    }

    .typography :global(p) {
        padding-right: var(--caption-gutter);
        overflow: auto;
    }

    .typography :global(p::before) {
        content: "\25BA";
        display: inline-block;
        padding-right: 0.5rem;
        font-size: 0.7rem;
        color: var(--primary-accent-color);
        vertical-align: 18.8%;
    }

    .logo-typeface :global(p::before),
    .patterns :global(p::before) {
        content: "\25C4";
        display: inline-block;
        padding-right: 0.5rem;
        font-size: 0.7rem;
        color: var(--primary-accent-color);
        vertical-align: 18.8%;
    }

    .logo-typeface :global(img),
    .patterns :global(img) {
        margin-right: var(--caption-gutter);
    }
</style>

<article>
    <section>
        <Carousel>
            <Image alt="" src="../../elim-springs/front-page.png" width="1440" height="1024" />
            <MobileImage alt="" src="../../elim-springs/front-page-mobile.png" width="1440" height="1024" />
            <Image alt="" src="../../elim-springs/events.png" width="1440" height="1024" />
            <Image alt="" src="../../elim-springs/about.png" width="1440" height="1024" />
            <MobileImage alt="" src="../../elim-springs/about-mobile.png" width="1440" height="1024" />
            <Image alt="" src="../../elim-springs/location-a.png" width="1440" height="1024" />
            <Image alt="" src="../../elim-springs/donations.png" width="1440" height="1024" />
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
        <h2>Design Iterations</h2>
        <Carousel id="process" scrollOffset="30vh" height="20rem">
            <Image alt="" src="../../elim-springs/iteration-1.png" width="1440" height="1024" />
            <Image alt="" src="../../elim-springs/iteration-2.png" width="1440" height="1024" />
            <Image alt="" src="../../elim-springs/iteration-3.png" width="1440" height="1024" />
            <Image alt="" src="../../elim-springs/iteration-4.png" width="1440" height="1024" />
            <Image alt="" src="../../elim-springs/iteration-5.png" width="1440" height="1024" />
            <Image alt="" src="../../elim-springs/iteration-6.png" width="1440" height="1024" />
            <Image alt="" src="../../elim-springs/front-page.png" width="1440" height="1024" />
        </Carousel>
        <h2>Style Guide</h2>
        <figure class="typography">
            <Image alt="Elim Springs' style guide" src="../../elim-springs/typography.png" align="right" width="494" height="588" />
            <figcaption>
                <p>
                    Incididunt non consectetur voluptate sint laborum ad minim amet in non consequat veniam consectetur proident. Ut tempor ea ipsum veniam elit qui mollit nulla dolore nostrud tempor sit magna nostrud. Culpa labore labore reprehenderit tempor pariatur do eu ipsum. Sunt ad consequat minim mollit amet nulla elit quis voluptate. Velit velit aute nisi dolor Lorem et laboris adipisicing laborum eiusmod dolore do aliquip. Aliquip esse do duis anim et irure aliquip.
                </p>
            </figcaption>
        </figure>
        <figure class="patterns">
            <Image alt="Elim Springs' style guide" src="../../elim-springs/buttons.png" align="left" width="478" heightg="714" />
            <figcaption>
                <p>
                    Incididunt non consectetur voluptate sint laborum ad minim amet in non consequat veniam consectetur proident. Ut tempor ea ipsum veniam elit qui mollit nulla dolore nostrud tempor sit magna nostrud. Culpa labore labore reprehenderit tempor pariatur do eu ipsum. Sunt ad consequat minim mollit amet nulla elit quis voluptate. Velit velit aute nisi dolor Lorem et laboris adipisicing laborum eiusmod dolore do aliquip. Aliquip esse do duis anim et irure aliquip.
                </p>
            </figcaption>
        </figure>
        <h2>Brand</h2>
        <Image alt="Elim Springs' style guide" src="../../elim-springs/brand.png" width="974" height="771" />
        <figure class="logo-typeface">
            <Image alt="Elim Springs' style guide" src="../../elim-springs/logo-typeface.png" align="left" width="876" height="463" />
            <figcaption>
                <p>
                    Duis cupidatat labore qui irure. Nisi occaecat magna consectetur ipsum adipisicing duis ullamco nostrud tempor dolore duis. Officia cupidatat ipsum tempor ullamco labore. Exercitation aliquip cupidatat consectetur eiusmod mollit est aliqua cillum sit. Dolore occaecat quis elit veniam veniam ad nisi minim.
                </p>
            </figcaption>
        </figure>
    </section>
    <section>
        <h2>Results</h2>
        <p>
            Ullamco aute nostrud ex nostrud commodo esse non occaecat ea quis laborum enim ipsum. Eiusmod quis esse officia tempor officia quis aliqua incididunt voluptate dolor reprehenderit cupidatat est. Velit amet elit sunt Lorem incididunt consectetur eu enim do sint quis duis veniam commodo. Nostrud voluptate elit enim excepteur elit sit excepteur elit eu amet nostrud. Aliquip laborum incididunt esse ullamco aliqua tempor aute non. Enim ullamco duis anim labore commodo Lorem ex aliquip sunt et aliqua.
        </p>
    </section>
</article>