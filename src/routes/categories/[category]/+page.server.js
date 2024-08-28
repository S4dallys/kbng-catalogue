export async function load({ fetch, params }) {
    async function fetchUrl(url) {
        let res = await fetch(url)
        let json = await res.json()
        return json
    }

    let { category } = params

    let subcatsUrl = `/api/subcats/${category}`
    let itemsUrl = `/api/items/${category}`

    const promises = await Promise.all([fetchUrl(subcatsUrl), fetchUrl(itemsUrl)])
    let [subcats, items] = promises

    return { subcats, items }
}
