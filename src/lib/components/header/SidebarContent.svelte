<script>
    import { page } from '$app/stores'
    import { redirect } from '@sveltejs/kit'
    let { categories } = $page.data
</script>

<ul class="capitalize flex flex-col gap-1">
    {#if categories}
        {#each categories as cat (cat.category)}
            <li>
                <p>
                    <a
                        class="inline font-bold hover:border-b hover:border-b-black"
                        href={`/category/${cat.category}`}>{cat.category}</a
                    >
                </p>
                <ul class="sm:ml-4">
                    {#each cat.subcategories as subcat (subcat.subcategory)}
                        <li>
                            <a
                                class="hover:border-b hover:border-b-black"
                                href={`/category/${cat.category}?subcat=${subcat.subcategory}`}
                                >{subcat.subcategory}</a
                            >
                        </li>
                    {/each}
                </ul>
            </li>
        {/each}
    {:else}
        Error loading categories!
    {/if}
</ul>
