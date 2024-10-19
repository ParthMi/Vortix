"use client"; // This marks the component as a Client Component

import { useParams } from 'next/navigation';
import Data from "../../SubTypeData"; // Ensure correct path
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Breadcrumb from '@/components/Common/Breadcrumb';
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa'; // Example icon
import Image from 'next/image';

export default function ProductDetailsPage() {
    const params = useParams();
    const title = Array.isArray(params?.title) ? params.title[0] : params?.title; // Ensure 'title' is a string

    if (!title) {
        return <div>Title not provided in the URL</div>;
    }

    // Normalize title
    const productTitle = title.replace(/-/g, ' ').toLowerCase();

    // Find the product
    const product = Data.find(
        (item) => item.name.toLowerCase() === productTitle
    );

    // If no product is found, return "Not found"
    if (!product) {
        return <div>Product not found for title: {title}</div>;
    }

    // Product image URLs (replace with actual images from your data)
    const productImages = product.images || [
        "/img1.jpg", // replace with actual URLs
        "/img2.jpg",
        "/img3.jpg",
    ];

    // Render detailed product information
    return (
        <>
            <Breadcrumb
                pageName={product.name}
                mainPage="Our Products"
                description=""
            />
            <section id="about" className="pt-8 md:pt-10 lg:pt-14">
                <div className="container mx-auto p-4">
                    <div className="flex flex-col lg:flex-row">
                        {/* Left side - Image Carousel */}
                        <div className="lg:w-1/2">
                            <Swiper
                                modules={[Navigation, Pagination]}
                                spaceBetween={30}
                                navigation
                                pagination={{ clickable: true }}
                                className="mySwiper"
                            >
                                {productImages.map((img, idx) => (
                                    <SwiperSlide key={idx}>
                                        <div className="relative w-full h-0" style={{ paddingBottom: '75%' }}> {/* Adjust padding here */}
                                            <Image
                                                src={img}
                                                alt={product.name}
                                                layout="fill" // Fill the parent div
                                                objectFit="cover" // Maintain aspect ratio
                                                className="rounded-lg"
                                            />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                        {/* Right side - Product Information */}
                        <div className="lg:w-1/2 lg:pl-8">
                            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                            <p className="text-gray-600 mb-6">{product.description}</p>
                            <div className="mt-10">
                                <h2 className="text-2xl font-semibold mb-3">Applications</h2>
                                <div className="flex flex-wrap gap-2">
                                    {product.applications.map((app, idx) => (
                                        <span
                                            key={idx}
                                            className="bg-gray-200 text-gray-700 text-sm font-medium px-4 py-1 rounded-full"
                                        >
                                            {app}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div><div className='my-4'>
                        <hr></hr></div>
                    <div className='flex flex-wrap justify-evenly'>
                        <div className="mt-6">
                            <div className="overflow-x-auto">
                                <table className="min-w-auto w-auto bg-white border border-gray-300 rounded-lg shadow-md table-auto">
                                    <thead className="bg-gray-100">
                                        <tr>
                                            <th className="py-3 px-4 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">
                                                Parameter
                                            </th>
                                            <th className="py-3 px-4 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">
                                                Value
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Object.entries(product.parameters).map(([key, value], idx) => {
                                            const rowClass = `border-b border-gray-300 ${idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-gray-200 transition-colors`;

                                            return (
                                                <tr key={idx} className={rowClass}>
                                                    <td className="py-3 px-4 text-gray-800 text-sm">{key}</td>
                                                    <td className="py-3 px-4 text-gray-800 text-sm">{Array.isArray(value) ? value.join(', ') : value}</td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {product.acidWashed && (
                            <div className="mt-6">
                                {/* Product acid-washed parameters */}
                                <div className="overflow-x-auto">
                                    <table className="min-w-auto w-auto bg-white border border-gray-300 rounded-lg shadow-md table-auto">
                                        <thead className="bg-gray-100">
                                            <tr>
                                                <th className="py-3 px-4 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">
                                                    Parameter
                                                </th>
                                                <th className="py-3 px-4 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">
                                                    Value
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {Object.entries(product.acidWashed).map(([key, value], idx) => {
                                                const rowClass = `border-b border-gray-300 ${idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-gray-200 transition-colors`;

                                                return (
                                                    <tr key={idx} className={rowClass}>
                                                        <td className="py-3 px-4 text-gray-800 text-sm">{key}</td>
                                                        <td className="py-3 px-4 text-gray-800 text-sm">{Array.isArray(value) ? value.join(', ') : value}</td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className='my-4'>
                        <hr></hr></div>
                    <div className="mt-10">
                        <h2 className="text-2xl font-semibold mb-4">Advantages</h2>
                        <div className="space-y-2">
                            {product.advantages.map((advantage, idx) => (
                                <div key={idx} className="flex items-center text-gray-800 text-sm font-medium">
                                    <FaCheckCircle className="text-green-500 mr-2" />
                                    <p>{advantage}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
