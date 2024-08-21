<script>
    import * as Card from '$lib/components/ui/card'

    export let content
</script>

<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10">
    {#each Array(5) as _}
        <Card.Root class="rounded-3xl max-w-[8rem]">
            <Card.Content class="flex aspect-square items-center justify-center p-0">
                <a href="/categories">
                    <img
                        class="object-cover aspect-square rounded-3xl"
                        src="https://i.pinimg.com/564x/63/53/33/635333d08ed1b7374d8f91288d2cc294.jpg"
                        alt="tutel"
                        title="tutel"
                    /></a
                >
            </Card.Content>
        </Card.Root>
    {/each}
</div>
