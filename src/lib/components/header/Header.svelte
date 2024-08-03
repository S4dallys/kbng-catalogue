<script>
    import { Phone } from 'lucide-svelte'
    import logo_text from '$lib/img/logo_text.png'
    import Sheet from './Sheet.svelte'
</script>

<header class="fixed top-0 h-[50px] w-full bg-white flex justify-between items-center px-2">
    <Sheet />
    <div>
        <a href="/"><img src={logo_text} alt="logo" class="h-[25px]" /></a>
    </div>
    <div><a href="/"><Phone /></a></div>
</header>
