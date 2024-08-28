function getSearchParams(url) {
    const sp = url.searchParams
    return Object.fromEntries(sp)
}

export { getSearchParams }
