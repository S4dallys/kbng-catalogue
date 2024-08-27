<script>
    export let text
</script>

<div>
    <h1 class="text-3xl font-semibold text-center mb-4 capitalize">
        {text}
    </h1>
    <slot />
</div>
