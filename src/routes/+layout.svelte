<script>
    import '../app.css'
    import Header from '$lib/components/header/Header.svelte'
</script>

<div class="relative">
    <Header />
    <main>
        <slot />
    </main>
</div>
