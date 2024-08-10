function getSearchParams(url) {
    const sp = url.searchParams

    return {
        subcat: sp.get('subcat') === 'true',
    }
}

export {
    getSearchParams
}
