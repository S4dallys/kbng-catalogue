<script>
    import { Input } from '$lib/components/ui/input'
    import { Search } from 'lucide-svelte'
</script>

<div class="w-full relative flex justify-center">
    <label for="search-bar">
        <Search class="relative top-2 left-8 w-[20px]" />
    </label>
    <Input
        id="search-bar"
        type="text"
        placeholder="Search items..."
        class="max-w-xs pl-10 border-2 border-gray-200"
    />
</div>
