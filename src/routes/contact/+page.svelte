<script>
    import { contactInfo } from '$lib/data'
    import Heading from '$lib/components/general/Heading.svelte'
    import ContactItem from '$lib/components/general/ContactItem.svelte'
    import BackButton from '$lib/components/general/BackButton.svelte'
</script>

<Heading text="Contact Us">
    <p>Interested in any of our items?</p>
</Heading>
{#each contactInfo as contactItem (contactItem.title)}
    <ContactItem {...contactItem} />
{/each}
<BackButton text="Back to Home" link="/" />
