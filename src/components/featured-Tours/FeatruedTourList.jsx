import React from 'react';
import TourCard from '../../shared/TourCard';
import { Col } from 'reactstrap';

import useFetch from './../../hooks/useFetch';
import { BASE_URL } from './../../utils/config';

const FeatruedTourList = () => {
  const { data: featuredTours, loading, error } = useFetch(`${BASE_URL}/tours/search/getFeaturedTours`);

  console.log("Featured Tours:", featuredTours);

  // Ensure featuredTours is an array, otherwise return an empty array
  const toursArray = Array.isArray(featuredTours) ? featuredTours : [];

  return (
    <>
      {
        loading && <h4>Loading..........</h4>
      }
      {
        error && <h4>{error}</h4>
      }
      {
        toursArray.map(tour => (
          <Col lg="3" md="6" sm="6" className='mb-4' key={tour._id}>
            <TourCard tour={tour}/>
          </Col>
        ))
      }
    </>
  );
};

export default FeatruedTourList;
