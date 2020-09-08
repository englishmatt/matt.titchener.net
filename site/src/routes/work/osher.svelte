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

    .lede {
        font-size: 1.5rem;
        line-height: 1.5;
        color: rgba(255, 255, 255, 0.7);
        font-weight: 500;
    }
</style>

<article>
    <Carousel id="final" scrollOffset="30vh">
        <Image src="../../osher/front-page.png" alt="Osher front page" width="1400" height="2514" />
        <Image src="../../osher/membership.png" alt="Osher membership" width="1400" height="1835" />
        <Image src="../../osher/course-browse.png" alt="Osher front page" width="1400" height="1458" />
        <Image src="../../osher/course-page.png" alt="Osher front page" width="1400" height="1513" />
    </Carousel>
    <h1>
        <span>Case Study</span>
        <span class="logo">Osher Lifelong Learning Institute <span class="subheading">at Colorado State University</span></span>
    </h1>
    <p class="lede">
        The <i>Osher Lifelong Learning Institute</i> (OLLI) at <i>Colorado State University</i> (CSU) provides
        intellectual nourishment to seniors and retirees throughout northern Colorado. Over the course of the 2017-2018 academic year the team at the Division of Continuing Education at CSU,
        researched, designed, and delivered a new OLLI course registration platform and web presence for their students.
    </p>
    <h2>Research</h2>
    <p>
        Through student and administrative feedback, a business case was presented to overhaul the customer experience,
        both in form and function. In concert with OLLI stakeholders, my team and I set about reimagining what a new
        OLLI registration experience might look like:
    </p>
    <Carousel id="bpmn" scrollOffset="30vh" height="20rem">
        <Image src="../../osher/instructor-recruitment-bpmn.png" alt="Instructor recruitment BPMN" width="2439" height="1309" />
        <Image src="../../osher/registration-bpmn.png" alt="Student registration BPMN" width="2083" height="1483" />
        <Image src="../../osher/checkout-bpmn.png" alt="Checkout BPMN" width="1731" height="870" />
        <Image src="../../osher/payment-bpmn.png" alt="Payment BPMN" width="2013" height="1326" />
    </Carousel>
    <h2>Design Process</h2>
    <Carousel id="bpmn" scrollOffset="30vh" height="20rem">
        <Image src="../../osher/instructor-recruitment-bpmn.png" alt="Instructor recruitment BPMN" width="2439" height="1309" />
        <Image src="../../osher/registration-bpmn.png" alt="Student registration BPMN" width="2083" height="1483" />
        <Image src="../../osher/checkout-bpmn.png" alt="Checkout BPMN" width="1731" height="870" />
        <Image src="../../osher/payment-bpmn.png" alt="Payment BPMN" width="2013" height="1326" />
    </Carousel>
</article>