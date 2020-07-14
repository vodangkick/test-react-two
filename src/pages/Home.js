import React from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import Services from '../components/Services';
import FeatureRooms from '../components/FeatureRooms';

export default function Home() {
    return (
        <>
            <Hero >
                <Banner title="luxurious" subtitle="deluxe rooms starting at $299">
                    <Link to="/rooms" className="btn-primary">Our Rooms</Link>
                </Banner>
            </Hero>
            <Services />
            <FeatureRooms />
        </>
    )

}
