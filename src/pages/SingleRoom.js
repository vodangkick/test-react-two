import React, { Component } from 'react';
import defaultBcg from '../images/room-1.jpeg';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { RoomContext } from '../Context';
import StyledHero from '../components/StyledHero';



export default class SingleRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg
        }

    }
    static contextType = RoomContext;

    componentDidMount() {

    }

    render() {
        const { getRoom } = this.context;
        const room = getRoom(this.state.slug);
        if (!room) {
            return <div className="error">
                <h3>
                    no such room could be room
                </h3>
                <Link to="/rooms" className="btn-primary">
                    Back to Room
                </Link>
            </div>
        }
        const { name, price, description, capacity, size, extras, breakfast, pets, images } = room;
        const [mainImg, ...defaultImg] = images;
        return (
            <div>
                <StyledHero img={images[0] || this.state.defaultBcg}>
                    <Banner title={` ${name} room`}>
                        <Link to='/rooms' className="btn-primary">
                            Back to rooms
                        </Link>
                    </Banner>
                </StyledHero>
                <section className="single-room">
                    <div className="single-room-images">
                        {defaultImg.map((item, index) => <img key={index} src={item} alt={name} />)}
                    </div>
                    <div class="single-room-info">
                        <article class="desc">
                            <h3>details</h3>
                            <p>{description}</p>
                        </article>
                        <article>
                            <h3>info</h3>
                            <h6>price : ${price}</h6>
                            <h6>size : ${size} SQFT</h6>
                            <h6>
                                max capacity : {
                                    capacity > 1 ? `${capacity} people` : `${capacity} person`}
                            </h6>
                            <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
                            <h6>{breakfast && "free breakfast included"}</h6>
                        </article>
                    </div>
                </section>
                <section className="room-extras">
                    <h6>extras</h6>
                    <ul className="extras">
                        {extras.map((item, index) => <li key={index}>- {item}
                        </li>)}
                    </ul>
                </section>
            </div>
        )
    }
}
