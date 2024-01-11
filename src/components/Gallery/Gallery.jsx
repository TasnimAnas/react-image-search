import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useGlobalContext } from "../../context/GlobalContext";
import "./Gallery.css";

const URL = `https://api.unsplash.com/search/photos`;

const Gallery = () => {
  const { query } = useGlobalContext();
  const { data, isError, error, isLoading } = useQuery({
    queryKey: ["getImage", query],
    queryFn: async () => {
      const { data } = await axios.get(
        `${URL}?client_id=${import.meta.env.VITE_ACCESS_KEY}&query=${query}`
      );
      return data.results;
    },
  });

  if (isLoading)
    return (
      <div className="loading">
        <div className="loader"></div>
      </div>
    );

  if (isError)
    return <div className="err">Some error occurred, try again!</div>;

  if (data.length < 1) return <div className="err">No images found!</div>;
  console.log(data);
  return (
    <section className="galleryContainer">
      {data.map((img) => {
        return (
          <img key={img.id} src={img.urls.small_s3} alt={img.alt_description} />
        );
      })}
    </section>
  );
};
export default Gallery;
