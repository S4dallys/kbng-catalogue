import { getSearchParams } from '$lib/utility/index'
import { json } from '@sveltejs/kit'

export async function GET({ url, locals, params }) {
    const { category } = params
    const { subcat } = getSearchParams(url)

    const { data, error } = await locals.supabase
        .from('subcategories')
        .select(`subcategory, categories()`)
        .eq('categories.category', category)

    if (error) {
        console.error(error)
    }

    return json(data.map((x) => x.subcategory))
}
