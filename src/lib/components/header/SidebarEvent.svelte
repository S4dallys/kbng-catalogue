<script>
    import { createEventDispatcher } from 'svelte'
    import { Menu } from 'lucide-svelte'

    const dispatch = createEventDispatcher()

    function pressed() {
        dispatch('pressed')
    }
</script>

<button on:click={pressed}><Menu /></button>
