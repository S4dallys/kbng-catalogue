<script>
    import { goto } from '$app/navigation'
    import { page } from '$app/stores'
    import Heading from '$lib/components/general/Heading.svelte'
    import Select from '$lib/components/general/Select.svelte'

    export let data

    let { category, selectedSubcat, subcats, items } = data

    if (selectedSubcat) {
        selectedSubcat = { value: selectedSubcat, label: selectedSubcat }
    }

    subcats = subcats.map((x) => {
        return { value: x, label: x }
    })

    $: if (selectedSubcat) console.log($page.url.pathname + '?subcat=' + selectedSubcat.value)
    $: console.log(selectedSubcat)
</script>

<Heading text={category} />
<Select content={subcats} bind:selected={selectedSubcat} />
