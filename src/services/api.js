import axios from 'axios';

axios.defaults.headers.common['Authorization'] = 'Client-ID c1FmI8ySab8mbCeTSMOtQGQPUHxuLwz5EoDcXLZG5FQ';
axios.defaults.baseURL = 'https://api.unsplash.com';

export const fetchImages = async (query, page) => {
    const response = await axios.get('/search/photos', {
        params: {
            query: query,
            page: page,
            per_page: 20
        },
    });
    return response.data.results;
};
