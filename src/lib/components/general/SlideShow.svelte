<script>
    import * as Card from '$lib/components/ui/card'
    import * as Carousel from '$lib/components/ui/carousel'

    // export let content
</script>

<Carousel.Root class="w-3/5">
    <Carousel.Content>
        {#each Array(5) as _, i (i)}
            <Carousel.Item class="sm:basis-1/2 lg:basis-1/3">
                <div class="p-1">
                    <Card.Root class="rounded-3xl">
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
                </div>
            </Carousel.Item>
        {/each}
    </Carousel.Content>
    <Carousel.Previous />
    <Carousel.Next />
</Carousel.Root>
