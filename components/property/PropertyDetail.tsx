import { PropertyProps } from "@/interfaces";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div className="w-full">
      {/* Header Section */}
      <div className="mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">{property.name}</h1>

        <div className="flex flex-wrap items-center gap-2 mt-2 text-gray-600">
          <span className="text-yellow-500 font-semibold">{property.rating} ★</span>
          <span>· {property.address.city}, {property.address.state}, {property.address.country}</span>
        </div>

        {property.discount && (
          <div className="mt-2 inline-block bg-green-100 text-green-700 text-sm px-3 py-1 rounded-md font-medium">
            {property.discount}
          </div>
        )}
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-64 object-cover rounded-lg sm:col-span-2 md:col-span-3"
        />
        {property.images?.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`${property.name}-${index}`}
            className="w-full h-48 object-cover rounded-lg"
          />
        ))}
      </div>

      {/* Offers Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-gray-50 p-4 rounded-lg text-center">
          <p className="text-xl font-semibold">{property.offers.bed}</p>
          <p className="text-gray-600">Beds</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg text-center">
          <p className="text-xl font-semibold">{property.offers.shower}</p>
          <p className="text-gray-600">Showers</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg text-center">
          <p className="text-xl font-semibold">{property.offers.occupants}</p>
          <p className="text-gray-600">Occupancy</p>
        </div>
      </div>

      {/* Description */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Description</h2>
        <p className="text-gray-700 leading-relaxed">{property.description}</p>
      </div>

      {/* Amenities */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">What this place offers</h2>
        <ul className="flex flex-wrap gap-3">
          {property.category.map((amenity, index) => (
            <li
              key={index}
              className="bg-gray-200 hover:bg-gray-300 px-3 py-2 rounded-md text-sm text-gray-800 transition"
            >
              {amenity}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PropertyDetail;
