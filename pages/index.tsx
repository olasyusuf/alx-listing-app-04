'use client';

import React, { useState, useEffect } from "react";
import { HERO_BACKGROUND } from "@/constants/images";
import { FILTERS } from "@/constants/filters";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { PropertyProps } from "@/interfaces";
import Pill from "@/components/common/Pill";
import PropertyCard from "@/components/common/PropertyCard";
import axios from 'axios';


const HomePage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("");
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get("/api/properties");
        setProperties(response.data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  
  // Filter properties based on selected pill
  const filteredProperties: PropertyProps[] = activeFilter
    ? PROPERTYLISTINGSAMPLE.filter((property) =>
        property.category.includes(activeFilter)
      )
    : PROPERTYLISTINGSAMPLE;

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative h-[500px] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: `url(${HERO_BACKGROUND})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Find your favorite place here!
          </h1>
          <p className="text-lg md:text-2xl max-w-2xl mx-auto">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-gray-50 py-6 px-4">
        <div className="flex flex-wrap gap-3 justify-center">
          {FILTERS.map((filter) => (
            <Pill
              key={filter}
              label={filter}
              isActive={activeFilter === filter}
              onClick={() =>
                setActiveFilter(activeFilter === filter ? "" : filter)
              }
            />
          ))}
        </div>
      </section>

      {/* Listing Section */}
      <section className="py-10 px-6">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Available Properties
        </h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredProperties.map((property, index) => (
            <PropertyCard key={index} property={property} />
          ))}
        </div>
        <div className="grid grid-cols-3 gap-4">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>
    </>
  );
};

export default HomePage;
