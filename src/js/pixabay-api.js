export function getInfo(str = "") {
    const BASE_URL = 'https://pixabay.com/api/';
    const API_KEY = '43485677-c4ca6985f0e2cabeed805eb30';

    const parameters = new URLSearchParams({
        key: API_KEY,
        q: str,
        image_typ: "photo",
        orientation: "horizontal",
        safesearch: true,
        per_page: 15,
    });
    return fetch(`${BASE_URL}?${parameters}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })

}