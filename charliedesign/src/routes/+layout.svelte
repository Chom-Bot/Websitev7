<script>

    import Navbar from "../components/Navbar.svelte";
    import Footer from "../components/Footer.svelte";

</script>

<div class="app">

    <Navbar />
    <main>
        <slot></slot>
    </main>
    <Footer />
</div>