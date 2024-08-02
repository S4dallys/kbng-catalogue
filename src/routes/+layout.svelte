<script>
    import '../app.css'
    import Header from '$lib/components/header/Header.svelte'

    function pressed() {
        console.log('pressed')
    }
</script>

<div class="relative">
    <Header on:pressed={pressed} />
    <aside></aside>
    <main>
        <slot />
    </main>
</div>
