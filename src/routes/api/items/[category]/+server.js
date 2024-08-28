import { getSearchParams } from '$lib/utility/index'
import { json } from '@sveltejs/kit'

export async function GET({ url, locals, params }) {
    const { category } = params
    const { subcat } = getSearchParams(url)

    let result

    if (subcat) {
        result = await locals.supabase
            .from('item')
            .select(`*, categories(), subcategories()`)
            .eq('categories.category', category)
            .eq('subcategories.subcategory', subcat)
    } else {
        result = await locals.supabase
            .from('item')
            .select(`*, categories()`)
            .eq('categories.category', category)
    }

    let { data, error } = result

    if (error) {
        console.error(error)
    }

    return json(data)
}
