import { useEffect, useRef, useState } from "react";
import "./App.css";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import { fetchPhotos } from "./api";
import toast, { Toaster } from "react-hot-toast";
import { RingLoader } from "react-spinners";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const totalPages = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageModal, setImageModal] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchPhotos(query);
        setPhotos(data.results);
        totalPages.current = data.total_pages;
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    if (!query) return;
    getData();
  }, [query]);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchPhotos(query, page);
        setPhotos((prev) => [...prev, ...data.results]);
        totalPages.current = data.total_pages;
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
        setTimeout(
          () => window.scrollBy({ top: 820, behavior: "smooth" }),
          300
        );
      }
    };
    if (!query) return;
    getData();
  }, [page]);

  const updateQuery = (newQuery) => {
    if (!newQuery.trim()) {
      toast.error("This didn't work.");
      return;
    }
    setQuery(newQuery);
  };

  const loadMore = () => {
    setPage(page + 1);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <SearchBar updateQuery={updateQuery} />
      {photos.length != 0 && (
        <ImageGallery
          photos={photos}
          setImageModal={setImageModal}
          openModal={openModal}
        />
      )}
      <ImageModal
        isOpen={isModalOpen}
        imageModal={imageModal}
        closeModal={closeModal}
      />
      {isLoading && <RingLoader />}
      {error && <ErrorMessage />}
      {totalPages.current > page && photos.length != 0 && (
        <LoadMoreBtn loadMore={loadMore} />
      )}
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
