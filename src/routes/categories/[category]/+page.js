import { getSearchParams } from '$lib/utility/index'

export async function load({ params, url, data }) {
    const { subcats, items } = data
    const { category } = params
    const { selectedSubcat } = getSearchParams(url)

    return { category, selectedSubcat, subcats, items }
}
