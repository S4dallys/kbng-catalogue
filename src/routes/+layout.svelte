<script>
    import '../app.css'
    import Header from '$lib/components/header/Header.svelte'
    import Footer from '$lib/components/footer/Footer.svelte'
</script>

<div class="relative container pt-[80px] pb-[20px]">
    <Header />
    <main class="flex flex-col justify-start items-center mb-32 gap-10">
        <slot />
    </main>
    <Footer />
</div>
