<script>
    import Heading from '$lib/components/general/Heading.svelte'
    import Select from '$lib/components/general/Select.svelte'

    export let data

    let selectedSubcat = { value: 'sub4', label: 'sub4' }
</script>

<Heading text={data.category} />
<Select
    content={[
        { value: 'sub1', label: 'sub1' },
        { value: 'sub2', label: 'sub2' },
        { value: 'sub3', label: 'sub3' },
        { value: 'sub4', label: 'sub4' },
        { value: 'sub5', label: 'sub5' }
    ]}
    bind:selected={selectedSubcat}
/>
