<script>
    import { aboutUs } from '$lib/data'
    import Heading from '$lib/components/general/Heading.svelte'
    import BackButton from '$lib/components/general/BackButton.svelte'
    import logo_whole from '$lib/img/logo_whole.png'
</script>

<Heading text="About KB&G" />
<img src={logo_whole} alt="jayren logo" class="w-4/5 max-w-[350px]" />
<div class="text-center max-w-[400px]">
    <h2 class="font-semibold text-xl mb-1">Who we are</h2>
    <p>
        {aboutUs}
    </p>
</div>
<BackButton text="Back to Home" link="/" />
