export function load({ params, url }) {
    const { category } = params
    const selectedSubcat = url.searchParams.get('subcat')
    const subcats = null

    return { category, subcats, selectedSubcat }
}
