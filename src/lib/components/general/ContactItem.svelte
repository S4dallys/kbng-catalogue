<script>
    export let title
    export let icon
</script>

<div class="w-1/4 min-w-[300px]">
    <div class="flex gap-2 w-full border-b border-b-black mb-2">
        <svelte:component this={icon} />
        <p class="font-semibold mb-2">{title}</p>
    </div>
    <div class="text-center">
        <slot />
    </div>
</div>
