export const getPhones = async (url) => {
    const response = await fetch(url)
    const phones = await response.json()
    return phones
}