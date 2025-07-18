import { useState, Fragment } from "react";

export const Carousel = () => {
  const images = [
    { id: 1, url: "https://picsum.photos/id/1018/1000/600/", alt: "Mountain" },
    { id: 2, url: "https://picsum.photos/id/1015/1000/600/", alt: "Forest" },
    { id: 3, url: "https://picsum.photos/id/1016/1000/600/", alt: "Lake" },
    { id: 4, url: "https://picsum.photos/id/1020/1000/600/", alt: "Beach" },
    { id: 5, url: "https://picsum.photos/id/1024/1000/600/", alt: "Dog" },
    { id: 6, url: "https://picsum.photos/id/1035/1000/600/", alt: "River" },
    { id: 7, url: "https://picsum.photos/id/1040/1000/600/", alt: "Bridge" },
    { id: 8, url: "https://picsum.photos/id/1050/1000/600/", alt: "Desert" },
    { id: 9, url: "https://picsum.photos/id/1060/1000/600/", alt: "City" },
    { id: 10, url: "https://picsum.photos/id/1070/1000/600/", alt: "Ocean" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [randomIndex, setRandomIndex] = useState(null);

  const nextImage = () => {
    setRandomIndex(null);
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setRandomIndex(null);
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const displayImage = (index) => {
    setRandomIndex(index);
  };

  return (
    <Fragment>
      <h2 style={{ textAlign: "center" }}>Simple Carousel</h2>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <button onClick={prevImage}>Previous</button>

        <img
          src={
            randomIndex !== null
              ? images[randomIndex].url
              : images[currentIndex].url
          }
          alt={
            randomIndex !== null
              ? images[randomIndex].alt
              : images[currentIndex].alt
          }
          style={{
            width: "800px",
            height: "500px",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />

        <button onClick={nextImage}>Next</button>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "1rem",
          flexWrap: "wrap",
        }}
      >
        {images.map((image, index) => (
          <img
            key={image.id}
            src={image.url}
            alt={image.alt}
            onClick={() => displayImage(index)}
            style={{
              width: "100px",
              height: "60px",
              objectFit: "cover",
              margin: "0.3rem",
              cursor: "pointer",
              borderRadius: "4px",
              border:
                (randomIndex === index ||
                  (randomIndex === null && currentIndex === index))
                  ? "2px solid #007bff"
                  : "2px solid transparent"
            }}
          />
        ))}
      </div>
    </Fragment>
  );
};
