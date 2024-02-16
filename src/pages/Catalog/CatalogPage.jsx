import React, { useEffect, useState } from "react";
import fetchCars from "../../services/api";
import CatalogList from "../../components/CatalogList/CatalogList";

const CatalogPage = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchAllCars = async () => {
      try {
        const data = await fetchCars();
        setCars(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAllCars();
  }, []);

  return (
    <section className="catalog-section">
      <div className="container">
        <p>CatalogPage</p>
        <CatalogList cars={cars} />
      </div>
    </section>
  );
};

export default CatalogPage;
