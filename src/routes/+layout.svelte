<script>
    import '../app.css'
    import Header from '$lib/components/header/Header.svelte'
    import Footer from '$lib/components/footer/Footer.svelte'
</script>

<div class="relative">
    <Header />
    <main>
        <slot />
    </main>
    <Footer />
</div>
