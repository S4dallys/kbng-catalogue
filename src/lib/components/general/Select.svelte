<script>
    import * as Select from '$lib/components/ui/select'

    export let content
    export let selected
</script>

<Select.Root bind:selected>
    <Select.Trigger class="w-[180px]">
        <Select.Value placeholder="Theme" />
    </Select.Trigger>
    <Select.Content>
        {#each content as item}
            <Select.Item {...item} />
        {/each}
    </Select.Content>
</Select.Root>
