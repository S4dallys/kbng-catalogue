<script>
    import { Phone } from 'lucide-svelte'
    import logo_text from '$lib/img/logo_text.png'
    import Sidebar from './Sidebar.svelte'
</script>

<header
    class="fixed top-0 left-0 h-[50px] w-full px-6 flex justify-between items-center bg-white shadow-sm shadow-gray-400"
>
    <Sidebar />
    <div>
        <a href="/"><img src={logo_text} alt="logo" class="h-[20px]" /></a>
    </div>
    <div><a href="/contact"><Phone /></a></div>
</header>
