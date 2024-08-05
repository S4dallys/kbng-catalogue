<script>
    import { BadgeCheck } from 'lucide-svelte'
</script>

<footer class="w-full flex justify-center">
    <div class="flex gap-1 flex-col items-center text-center">
        <div class="flex gap-2">
            <BadgeCheck />
            <BadgeCheck />
            <BadgeCheck />
            <BadgeCheck />
        </div>
        <div>
            <p class="font-bold">Categories</p>
            <ul>
                <li><a href="/">Cat 1</a></li>
                <li><a href="/">Cat 2</a></li>
                <li><a href="/">Cat 3</a></li>
            </ul>
        </div>
        <p class="font-bold"><a href="/about">About KB&G</a></p>
        <p class="font-bold"><a href="/contact">Contact Us</a></p>
    </div>
</footer>
