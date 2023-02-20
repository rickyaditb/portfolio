<script>
    import Head from "./components/Head.svelte";
    import Header from "./components/Header.svelte";
    import Home from "./components/Home.svelte";
    import Skills from "./components/Skills.svelte";
    import Education from "./components/Education.svelte";
    import Certifications from "./components/Certifications.svelte";
    import Projects from "./components/Projects.svelte";
    import Footer from "./components/Footer.svelte";

    let lang = "english";

    const langSwitcher = (event) => {
        lang = event.detail.toLowerCase();
    };
</script>


    <Head />
    <Header {lang} on:language={langSwitcher} />
    <main class="container mx-auto px-5 xl:px-44 flex flex-col gap-16 my-8">
        <Home {lang} />
        <Skills {lang} />
        <Education {lang} />
        <Certifications {lang} />
        <Projects {lang} />
    </main>
    <Footer />

