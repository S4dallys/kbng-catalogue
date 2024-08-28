export async function load({ fetch }) {
    const res = await fetch('/api/categories?subcat=true')
    const categories = await res.json()

    return { categories }
}
