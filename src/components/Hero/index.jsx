import React from 'react';
import IMG_HERO from '../../assets/image/img_hero.jpg';
const Hero = () => {
    return (
        <>
            <section className="py-16">
                <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
                    <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
                        <h1 className="text-md text-red-600 font-medium">
                            Sport Field ID
                        </h1>
                        <h2 className="text-4xl text-gray-800 font-extrabold md:text-5xl">
                        Pesan Lapangan Mudah & Cepat
                        </h2>
                        <p>
                        Nikmati kemudahan booking lapangan olahraga secara online. Pilih jenis lapangan, tentukan jadwal, dan amankan slot bermain Anda hanya dalam hitungan menit.
                        </p>
                        <div className="justify-center items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                            <a href="/" className="flex items-center justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg md:inline-flex">
                                Mulai Sekarang
                            </a>
                        </div>
                    </div>
                    <div className="flex-none mt-14 md:mt-0 md:max-w-xl">
                        <img
                            src={IMG_HERO}
                            className=" md:rounded-tl-[108px]"
                            alt=""
                        />
                    </div>
                </div>
                <div className="mt-14 px-4 md:px-8">
                    <p className="text-center text-sm text-gray-700 font-semibold">Category</p>
                    <div className="flex justify-center items-center flex-wrap gap-x-12 gap-y-6 mt-6">
                        <a href="/" className="text-gray-500 hover:text-indigo-600 font-medium duration-150">Lapangan Futsal</a>
                        <a href="/" className="text-gray-500 hover:text-indigo-600 font-medium duration-150">Lapangan Basket</a>
                        <a href="/" className="text-gray-500 hover:text-indigo-600 font-medium duration-150">Lapangan Badminton</a>
                        <a href="/" className="text-gray-500 hover:text-indigo-600 font-medium duration-150">Lapangan Tenis</a>
                        <a href="/" className="text-gray-500 hover:text-indigo-600 font-medium duration-150">Lapangan Golf</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero;