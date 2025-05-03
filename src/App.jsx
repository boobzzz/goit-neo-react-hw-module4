import { fetchImages } from './services/api.js';
import { autoScrollOnLoadMore } from './utils/utils.js';
import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import SearchBox from './components/SearchBox.jsx';
import ImageGallery from './components/ImageGallery.jsx';
import LoadMoreBtn from './components/LoadMoreBtn.jsx';
import Loader from './components/Loader.jsx';
import ErrorMessage from './components/ErrorMessage.jsx';
import ImageModal from './components/ImageModal.jsx';
import Powered from './components/Powered.jsx';
import './App.css';

function App() {
    const [images, setImages] = useState([]);
    const [query, setQuery] = useState('');
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [modalImage, setModalImage] = useState(null);

    async function getImages(query, page) {
        try {
            setLoading(true);
            return await fetchImages(query, page);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    const searchImages = async (newQuery) => {
        if (!newQuery || newQuery === query) {
            toast('Search query is empty or the same as before.');
            return;
        }

        const firstPage = 1;
        const newImages = await getImages(newQuery, firstPage);

        setImages(newImages);
        setQuery(newQuery);
        setPage(firstPage);
        setError('');
    }

    const loadMore = async () => {
        const nextPage = page + 1;
        const newImages = await getImages(query, nextPage);

        if (newImages?.length > 0) {
            setImages([...images, ...newImages]);
            setPage(nextPage);
            setError('');
        }
    }

    const openModal = (id) => {
        const image = images.find(image => image.id === id);
        setModalImage(image);
    }

    const closeModal = () => {
        setModalImage(null);
    }

    useEffect(() => {
        if (page > 1) {
            autoScrollOnLoadMore();
        }
    }, [page]);

    return (
        <>
            <header>
                <SearchBox onSubmit={searchImages} />
            </header>
            <main>
                {images?.length > 0 &&
                    <ImageGallery
                        images={images}
                        openModal={openModal}
                    />
                }
                {loading && <Loader />}
                {error && <ErrorMessage message={error} />}
                {images?.length > 0 && <LoadMoreBtn onClick={loadMore} />}
            </main>
            <footer>
                <Powered />
            </footer>
            <Toaster/>
            <ImageModal
                isOpen={!!modalImage}
                closeModal={closeModal}
                image={modalImage}
            />
        </>
    )
}

export default App;
