import React from "react";

import { housesData } from "../data";

import { BiBed, BiBath, BiPhone, BiArea } from "react-icons/bi";

import { Link, useParams } from "react-router-dom";

import PropertySlider from "../components/PropertySlider";

const Property = () => {
    const { id } = useParams();
    const property = housesData.find((house) => {
        return house.id === parseInt(id);
    });
    return (
        <div className="container mx-auto min-h-[700px] mb-2">

            <div className="flex flex-col items-start gap-8 lg:flex-row">
                <div className="max-w-[768px]">
                    <div className="mb-2">
                        < PropertySlider />
                    </div>
                </div>
                <div className="flex-1 w-full mb-2 mt-6 bg-white border border-gray-300 rounded-lg px-6 py-4">
                    <div className="flex flex-col lg:flex-col lg:items-center lg:justify-between">
                        <div>
                            <h2 className="text-2xl font-semibold text-center">{property.name}</h2>
                            <h3 className="text-lg mb-4 text-center">{property.address}</h3>
                        </div>
                        <div className="mb-4 lg:mb-0 flex gap-x-2 text-sm">
                            <div className="bg-green-500 rounded-full text-white px-3 inline-block">
                                {property.type}
                            </div>
                            <div className="bg-violet-500 rounded-full text-white px-3 inline-block">
                                {property.county}
                            </div>
                        </div>
                        <div className="text-3xl mt-4 font-semibold text-violet-600">
                            Ksh {property.price}
                        </div>
                    </div>
                    <div className="flex gap-x-6 text-violet-700 mb-2 mt-4 lg:justify-center">
                        <div className="flex gap-x-2 items-center">
                            <BiBed className="text-2xl" />
                            <div className="text-lg font-medium">{property.bedrooms}</div>
                        </div>
                        <div className="flex gap-x-2 items-center">
                            <BiBath className="text-2xl" />
                            <div className="text-lg font-medium">{property.bathrooms}</div>
                        </div>
                    </div>
                    <p>{property.description}</p>
                </div>
            </div>
        </div>

    );
};

export default Property;