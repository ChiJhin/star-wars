'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';

const Page = () => {
  interface Planet {
    id: string;
    name: string;
    climate: string;
    terrain: string;
  }

  interface PlanetsResponse {
    previous: string | null;
    next: string | null;
    results: Planet[];
  }

  const [planets, setPlanet] = useState<PlanetsResponse>({
    previous: null,
    next: null,
    results: [],
  });
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://sw-api.starnavi.io/planets/?page=${pageNumber}`,
        );
        console.log(response.data);

        setPlanet(response.data);
      } catch (error) {
        console.error('Error fetching planet:', error);
      }
    };

    fetchData();
  }, [pageNumber]);

  return (
    <div>
      <div className=" flex gap-3 mb-4">
        <button
          className="text-green-600 cursor-pointer disabled:text-gray-400 disabled:cursor-not-allowed"
          disabled={planets?.previous === null}
          onClick={() => {
            setPageNumber(pageNumber - 1);
          }}
        >
          Previous
        </button>

        <button
          className="text-green-600 cursor-pointer  disabled:text-gray-400 disabled:cursor-not-allowed"
          disabled={planets?.next === null}
          onClick={() => {
            setPageNumber(pageNumber + 1);
          }}
        >
          Next
        </button>
      </div>

      <div className=" flex flex-col gap-5">
        {planets?.results ? (
          planets?.results?.map((planet) => (
            <div key={planet.id}>
              <p className="text-green-600 ">Name: {planet.name}</p>
              <p className="text-green-600 ">Climate: {planet.climate}</p>
              <p className="text-green-600 ">Terrain: {planet.terrain}</p>
            </div>
          ))
        ) : (
          <p className=" text-green-600">Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Page;
