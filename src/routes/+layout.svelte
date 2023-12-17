<script>
    import "../../static/style.css"
    import Navbar from "./navbar.svelte"
    import Footer from "./footer.svelte"
    import Hero from "./Hero.svelte"
    import Dev from "./dev.svelte"
</script>

<Dev/>
<Navbar />
<Hero />
<slot />
<Footer />