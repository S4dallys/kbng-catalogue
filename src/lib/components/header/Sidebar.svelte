<script>
    import SidebarContent from './SidebarContent.svelte'
    import SidebarOthers from './SidebarOthers.svelte'
    import { Menu } from 'lucide-svelte'
    import * as Sheet from '$lib/components/ui/sheet'
    import { ScrollArea } from '$lib/components/ui/scroll-area/index.js'
    import Button from '../ui/button/button.svelte'
</script>

<Sheet.Root>
    <Sheet.Trigger asChild let:builder
        ><Button builders={[builder]} variant="ghost" class="hover:bg-white p-0"><Menu /></Button
        ></Sheet.Trigger
    >
    <Sheet.Content side="left">
        <ScrollArea class="h-svh">
            <Sheet.Header>
                <Sheet.Title>Categories</Sheet.Title>
                <div class="sm:ml-4">
                    <SidebarContent />
                </div>
                <Sheet.Title>Others</Sheet.Title>
                <div class="sm:ml-4">
                    <SidebarOthers />
                </div>
            </Sheet.Header>
        </ScrollArea>
    </Sheet.Content>
</Sheet.Root>
