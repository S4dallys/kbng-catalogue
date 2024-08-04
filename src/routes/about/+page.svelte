<script>
    import Heading from '$lib/components/general/Heading.svelte'
    import BackButton from '$lib/components/general/BackButton.svelte'
    import logo_pic from '$lib/img/logo_pic.png'
</script>

<Heading text="About KB&G" />
<img src={logo_pic} alt="jayren logo" class="w-4/5 ml-8 max-w-[350px]" />
<div class="text-center max-w-[400px]">
    <h2 class="font-semibold text-xl mb-1">Who we are</h2>
    <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates ratione eius sit
        ducimus magnam, itaque ex dolorum officia, sunt placeat nisi, praesentium perferendis optio
        fugit et omnis animi nostrum incidunt.
    </p>
</div>
<BackButton text="Back to Home" link="/" />
