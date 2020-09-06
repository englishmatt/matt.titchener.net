<script>
    import Image from "../../components/Image.svelte";
    import Carousel from "../../components/Carousel.svelte";
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
        text-transform: uppercase;
        font-weight: 700;
        font-size: 1.2rem;
        letter-spacing: 1px;
        margin-top: 5rem;
        font-family: 'Montserrat', 'Inter', sans-serif;
    }

    .lede {
        font-size: 1.5rem;
        line-height: 1.5;
        color: rgba(255, 255, 255, 0.7);
        font-weight: 500;
    }
</style>

<article class="osher">
    <h1 class="logo">Osher Lifelong Learning Institute <span class="subheading">at Colorado State University</span></h1>
    <h2>Case Study</h2>
    <p class="lede">The Osher Lifelong Learning Institute at Colorado State University provides intellectual nourishment to seniors and retirees through northern Colorado. Over the course of the 2017-2018 academic year, through student and administrative feedback, a business case was presented to overhaul the customer experience, both in form and function.</p>
    <p>In concert with OLLI stakeholders, my team and I set about reimagining what a new OLLI registration experience might look like:</p>
    <Carousel id="carousel" scrollOffset="30vh">
        <Image src="https://dummyimage.com/1000x500/000/fff" alt="" width="1000" height="500" />
        <Image id="testing1" src="https://dummyimage.com/1000x200/000/0ff" alt="" width="1000" height="200" />
        <Image src="https://dummyimage.com/500x700/000/fff" alt="" width="500" height="700" loading="lazy" />
        <Image src="https://dummyimage.com/1000x700/fff/f00" alt="" width="1000" height="700" loading="lazy" />
    </Carousel>
    <p>The Division of Continuing Education at Colorado State University is responsible for the development and maintenance of the OLLI. The original customer experience was considered confusing, and overly complex for the target audience.</p>
    <Image src="https://localhost" alt="" width="1000" height="700" loading="lazy" />
    <p>The Division of Continuing Education at Colorado State University is responsible for the development and maintenance of the OLLI. The original customer experience was considered confusing, and overly complex for the target audience.</p>
    <Image src="https://dummyimage.com/500x700/000/fff" alt="" width="500" height="700" loading="lazy" />
    <p>The Division of Continuing Education at Colorado State University is responsible for the development and maintenance of the OLLI. The original customer experience was considered confusing, and overly complex for the target audience.</p>
    <Image src="https://dummyimage.com/1000x200/000/fff" alt="" width="1000" height="200" loading="lazy" />
    <p class="lede">The Division of Continuing Education at Colorado State University is responsible for the development and maintenance of the OLLI. The original customer experience was considered confusing, and overly complex for the target audience.</p>
    <Image src="https://localhost" alt="" width="1000" height="700" loading="lazy" />
    <p>The Division of Continuing Education at Colorado State University is responsible for the development and maintenance of the OLLI. The original customer experience was considered confusing, and overly complex for the target audience.</p>
    <Image src="https://dummyimage.com/1000x700/fff/000" alt="" width="1000" height="700" loading="lazy" />
    <p>The Division of Continuing Education at Colorado State University is responsible for the development and maintenance of the OLLI. The original customer experience was considered confusing, and overly complex for the target audience.</p>
    <Image src="https://dummyimage.com/500x700/fff/000" alt="" width="500" height="700" loading="lazy" />
    <p>The Division of Continuing Education at Colorado State University is responsible for the development and maintenance of the OLLI. The original customer experience was considered confusing, and overly complex for the target audience.</p>
    <Image src="https://dummyimage.com/1000x200/fff/000" alt="" width="1000" height="200" loading="lazy" />
    <p class="lede">The Division of Continuing Education at Colorado State University is responsible for the development and maintenance of the OLLI. The original customer experience was considered confusing, and overly complex for the target audience.</p>
    <Image src="https://localhost" alt="" width="1000" height="700" loading="lazy" />
    <p>The Division of Continuing Education at Colorado State University is responsible for the development and maintenance of the OLLI. The original customer experience was considered confusing, and overly complex for the target audience.</p>
    <Image src="https://dummyimage.com/1000x700/000/ff0" alt="" width="1000" height="700" loading="lazy" />
    <p>The Division of Continuing Education at Colorado State University is responsible for the development and maintenance of the OLLI. The original customer experience was considered confusing, and overly complex for the target audience.</p>
    <Image src="https://dummyimage.com/500x700/000/ff0" alt="" width="500" height="700" loading="lazy" />
    <p>The Division of Continuing Education at Colorado State University is responsible for the development and maintenance of the OLLI. The original customer experience was considered confusing, and overly complex for the target audience.</p>
    <Image src="https://dummyimage.com/1000x200/000/ff0" alt="" width="1000" height="200" loading="lazy" />
    <p class="lede">The Division of Continuing Education at Colorado State University is responsible for the development and maintenance of the OLLI. The original customer experience was considered confusing, and overly complex for the target audience.</p>
    <Image src="https://localhost" alt="" width="1000" height="700" loading="lazy" />
    <p>The Division of Continuing Education at Colorado State University is responsible for the development and maintenance of the OLLI. The original customer experience was considered confusing, and overly complex for the target audience.</p>
    <Image src="https://dummyimage.com/1000x700/000/f0f" alt="" width="1000" height="700" loading="lazy" />
    <p>The Division of Continuing Education at Colorado State University is responsible for the development and maintenance of the OLLI. The original customer experience was considered confusing, and overly complex for the target audience.</p>
    <Image src="https://dummyimage.com/500x700/000/f0f" alt="" width="500" height="700" loading="lazy" />
    <p>The Division of Continuing Education at Colorado State University is responsible for the development and maintenance of the OLLI. The original customer experience was considered confusing, and overly complex for the target audience.</p>
    <Image src="https://dummyimage.com/1000x200/000/f0f" alt="" width="1000" height="200" loading="lazy" />
    <p class="lede">The Division of Continuing Education at Colorado State University is responsible for the development and maintenance of the OLLI. The original customer experience was considered confusing, and overly complex for the target audience.</p>
    <Image src="https://localhost" alt="" width="1000" height="700" loading="lazy" />
    <p>The Division of Continuing Education at Colorado State University is responsible for the development and maintenance of the OLLI. The original customer experience was considered confusing, and overly complex for the target audience.</p>
    <Image src="https://dummyimage.com/1000x700/fff/f00" alt="" width="1000" height="700" loading="lazy" />
    <p>The Division of Continuing Education at Colorado State University is responsible for the development and maintenance of the OLLI. The original customer experience was considered confusing, and overly complex for the target audience.</p>
    <Image src="https://dummyimage.com/500x700/fff/f00" alt="" width="500" height="700" loading="lazy" />
    <p>The Division of Continuing Education at Colorado State University is responsible for the development and maintenance of the OLLI. The original customer experience was considered confusing, and overly complex for the target audience.</p>
    <Image src="https://dummyimage.com/1000x200/fff/f00" alt="" width="1000" height="200" loading="lazy" />
    <p class="lede">The Division of Continuing Education at Colorado State University is responsible for the development and maintenance of the OLLI. The original customer experience was considered confusing, and overly complex for the target audience.</p>
    <Image src="https://localhost" alt="" width="1000" height="700" loading="lazy" />
    <p>The Division of Continuing Education at Colorado State University is responsible for the development and maintenance of the OLLI. The original customer experience was considered confusing, and overly complex for the target audience.</p>
    <Image src="https://dummyimage.com/1000x700/000/f0f" alt="" width="1000" height="700" loading="lazy" />
    <p>The Division of Continuing Education at Colorado State University is responsible for the development and maintenance of the OLLI. The original customer experience was considered confusing, and overly complex for the target audience.</p>
    <Image src="https://dummyimage.com/500x700/000/f0f" alt="" width="500" height="700" loading="lazy" />
    <p>The Division of Continuing Education at Colorado State University is responsible for the development and maintenance of the OLLI. The original customer experience was considered confusing, and overly complex for the target audience.</p>
    <Image src="https://dummyimage.com/1000x200/000/f0f" alt="" width="1000" height="200" loading="lazy" />
    <p class="lede">The Division of Continuing Education at Colorado State University is responsible for the development and maintenance of the OLLI. The original customer experience was considered confusing, and overly complex for the target audience.</p>
    <Image src="https://localhost" alt="" width="1000" height="700" loading="lazy" />
    <p>The Division of Continuing Education at Colorado State University is responsible for the development and maintenance of the OLLI. The original customer experience was considered confusing, and overly complex for the target audience.</p>
    <Image src="https://dummyimage.com/1000x700/000/0ff" alt="" width="1000" height="700" loading="lazy" />
    <p>The Division of Continuing Education at Colorado State University is responsible for the development and maintenance of the OLLI. The original customer experience was considered confusing, and overly complex for the target audience.</p>
    <Image src="https://dummyimage.com/500x700/000/0ff" alt="" width="500" height="700" loading="lazy" />
    <p>The Division of Continuing Education at Colorado State University is responsible for the development and maintenance of the OLLI. The original customer experience was considered confusing, and overly complex for the target audience.</p>
    <Image src="https://dummyimage.com/1000x200/000/0ff" alt="" width="1000" height="200" loading="lazy" />
    <p class="lede">The Division of Continuing Education at Colorado State University is responsible for the development and maintenance of the OLLI. The original customer experience was considered confusing, and overly complex for the target audience.</p>
    <Image src="https://localhost" alt="" width="1000" height="700" loading="lazy" />
    <p>The Division of Continuing Education at Colorado State University is responsible for the development and maintenance of the OLLI. The original customer experience was considered confusing, and overly complex for the target audience.</p>
    <Image src="https://dummyimage.com/1000x700/fff/0f0" alt="" width="1000" height="700" loading="lazy" />
    <p>The Division of Continuing Education at Colorado State University is responsible for the development and maintenance of the OLLI. The original customer experience was considered confusing, and overly complex for the target audience.</p>
    <Image src="https://dummyimage.com/500x700/fff/0f0" alt="" width="500" height="700" loading="lazy" />
    <p>The Division of Continuing Education at Colorado State University is responsible for the development and maintenance of the OLLI. The original customer experience was considered confusing, and overly complex for the target audience.</p>
    <Image src="https://dummyimage.com/1000x200/fff/0f0" alt="" width="1000" height="200" loading="lazy" />
    <p class="lede">The Division of Continuing Education at Colorado State University is responsible for the development and maintenance of the OLLI. The original customer experience was considered confusing, and overly complex for the target audience.</p>
    <Image src="https://localhost" alt="" width="1000" height="700" loading="lazy" />
    <p>The Division of Continuing Education at Colorado State University is responsible for the development and maintenance of the OLLI. The original customer experience was considered confusing, and overly complex for the target audience.</p>
    <Image src="https://dummyimage.com/1000x700/00f/ff0" alt="" width="1000" height="700" loading="lazy" />
    <p>The Division of Continuing Education at Colorado State University is responsible for the development and maintenance of the OLLI. The original customer experience was considered confusing, and overly complex for the target audience.</p>
    <Image src="https://dummyimage.com/500x700/00f/ff0" alt="" width="500" height="700" loading="lazy" />
    <p>The Division of Continuing Education at Colorado State University is responsible for the development and maintenance of the OLLI. The original customer experience was considered confusing, and overly complex for the target audience.</p>
    <Image src="https://dummyimage.com/1000x200/00f/ff0" alt="" width="1000" height="200" loading="lazy" />
</article>