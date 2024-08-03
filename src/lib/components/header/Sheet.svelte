<script>
    import { Menu } from 'lucide-svelte'
    import * as Sheet from '$lib/components/ui/sheet'
    import Button from '../ui/button/button.svelte'
</script>

<Sheet.Root>
    <Sheet.Trigger asChild let:builder
        ><Button builders={[builder]} variant="ghost" class="hover:bg-white p-0"><Menu /></Button
        ></Sheet.Trigger
    >
    <Sheet.Content side="left">
        <Sheet.Header>
            <Sheet.Title>Are you sure absolutely sure?</Sheet.Title>
            <Sheet.Description>
                This action cannot be undone. This will permanently delete your account and remove
                your data from our servers.
            </Sheet.Description>
        </Sheet.Header>
    </Sheet.Content>
</Sheet.Root>
