<script>
    import { Phone, Mail, Home } from 'lucide-svelte'
    import Heading from '$lib/components/general/Heading.svelte'
    import ContactItem from '$lib/components/general/ContactItem.svelte'
    import BackButton from '$lib/components/general/BackButton.svelte'
</script>

<Heading text="Contact Us">
    <p>Interested in any of our items?</p>
</Heading>
<ContactItem title="Telephone" icon={Phone}>
    <p>09178918846</p>
    <p>965-3434</p>
</ContactItem>
<ContactItem title="Email" icon={Mail}>
    <p>jayrenmarketing@yahoo.com.ph</p>
</ContactItem>
<ContactItem title="Address" icon={Home}>
    <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis ducimus laborum
        doloremque iure quisquam quam autem quia laboriosam commodi explicabo!
    </p>
</ContactItem>
<BackButton text="Back to Home" link="/" />
