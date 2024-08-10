import { getSearchParams } from './util'
import { json } from '@sveltejs/kit'

export async function GET({ url, locals }) {
    const { subcat } = getSearchParams(url)

    const { data, error } = await locals.supabase
        .from('categories')
        .select(`category
            ${subcat ? ',subcategories(subcategory)' : ''}`
        )

    if (error) {
        console.error(error)
    }

    return json(data)
}
