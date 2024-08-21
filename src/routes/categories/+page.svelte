<script>
    import { page } from '$app/stores'

    import SearchBar from '$lib/components/general/SearchBar.svelte'
    import Heading from '$lib/components/general/Heading.svelte'
    import LinkGroup from '$lib/components/general/LinkGroup.svelte'

    let { categories } = $page.data

    console.log(categories)
</script>

<SearchBar />
<Heading text="Categories" />
<LinkGroup />
