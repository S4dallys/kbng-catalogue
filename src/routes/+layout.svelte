<script>
    import '../app.css'
    import Header from '$lib/components/header/Header.svelte'
    import Footer from '$lib/components/footer/Footer.svelte'
</script>

<div class="relative container">
    <Header />
    <main class="mt-[50px] flex flex-col justify-start items-center pb-12 py-4 gap-12">
        <slot />
    </main>
    <Footer />
</div>
