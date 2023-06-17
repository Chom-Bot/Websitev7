<script>

    import Navbar from "../components/Navbar.svelte";
    import Footer from "../components/Footer.svelte";
    import styles from "./globals.css";

</script>

<div class="app">

    <Navbar />
    <main>
        <slot></slot>
    </main>
</div>