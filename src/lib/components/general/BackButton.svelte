<script>
    import Button from '../ui/button/button.svelte'

    export let text
    export let link
</script>

<Button href={link}>{text}</Button>
