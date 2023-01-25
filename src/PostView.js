import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./postView.css";
const PostView = () => {

    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://insta-backend-gg94.onrender.com/all')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error))
            .finally(() => setLoading(false));
    }, []);
    if (isLoading) {
        return <div>Loading...</div>
    }
    console.log(data)
    const renData = data.map((item, index) => {
        return (
            <section key={index} className="card">
                <section className="card-header">
                    <div>
                        <div className="card-header__name">{item.name}</div>
                        <div className="card-header__place">{item.address}</div>
                    </div>
                    <span>
                        <i className="f1" aria-hidden="true"></i>
                    </span>
                </section>
                <section className="card-image">
                    <img src={`https://insta-backend-gg94.onrender.com/images/${item.image}`} alt="place" />
                </section>
                <section className="card-actions">
                    <span>
                        <i className="f2" aria-hidden="true"></i>
                    </span>
                    <span>
                        <i className="f3" aria-hidden="true"></i>
                    </span>
                    <span>
                        {item.date}
                    </span>
                </section>
                <section className="likes">
                    {item.likes} likes
                </section>
                <section className="description">
                    {item.description}
                </section>
            </section>
        )
    })
    return (
        <>
            <nav className="header">
                <section className="logo">
                    <img src={require("./images/clone.png")} alt="log" />
                </section>
                <section className="camera-icon">
                    <Link to="/upload">
                        <img src={require('./images/cam.png')} alt="camera" />
                    </Link>
                </section>
            </nav>

            {renData}
        </>
    )
}
export default PostView;