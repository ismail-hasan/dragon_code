import React from 'react';
import Navbar from '../Navbar';
import RightNav from './RightNav';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';

const NewsDetails = () => {
    const data = useLoaderData()
    const navigate = useNavigate()

    const detailsData = data.data[0]

    const { author, details, image_url } = detailsData
    console.log("my", author)
    return (

        <div>
            <header className='w-10/12 mx-auto py-5'>
                <Navbar></Navbar>
            </header>
            <main className='grid grid-cols-12 w-10/12 mx-auto gap-10'>
                <section className=' col-span-9'>
                    <div className="card bg-base-100 shadow-xl">
                        <figure>
                            <img src={image_url} />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{author.name}</h2>
                            <p >{details.slice(0, 500)}</p>
                            <div className="card-actions justify-end">
                                <Link onClick={() => navigate(-1)} className="btn btn-primary">Back to catagory</Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='col-span-3'>
                    <RightNav></RightNav>
                </section>
            </main>
        </div>

    );
};

export default NewsDetails;