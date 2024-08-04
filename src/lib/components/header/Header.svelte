<script>
    import { Phone } from 'lucide-svelte'
    import logo_text from '$lib/img/logo_text.png'
    import Sheet from './Sheet.svelte'
</script>

<header class="fixed top-0 left-0 h-[50px] w-full">
    <div class="container flex justify-between items-center bg-white border-b-gray-300 border-b-2">
        <Sheet />
        <div>
            <a href="/"><img src={logo_text} alt="logo" class="h-[20px]" /></a>
        </div>
        <div><a href="/"><Phone /></a></div>
    </div>
</header>
