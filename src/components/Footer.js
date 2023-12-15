import React from "react";
// import { footer } from '../data';
import LogoImage from '../assets/img/MainLogo.png';


const Footer = () => {
    return (
        <>
            <section className="bg-[#27ae60] py-10 text-white">
                <div className="max-w-[85%] mx-auto">
                    <div className="flex justify-between items-center">
                        <div className="text">
                            <h1 className="text-4xl font-semibold">Do You Have Questions ?</h1>
                            <p>We'll help you find the best and affordable apartment.</p>
                        </div>
                        <button className="px-5 py-2 rounded-full border-4 border-black-800 border-opacity-25 text-green-500 text-lg font-normal bg-white">
                            Contact Us Today
                        </button>
                    </div>
                </div>
            </section>

            <footer className="bg-[#1d2636] py-4 text-white ">
                <div className="grid grid-cols-2 gap-5 max-w-[85%] mx-auto">
                    <div className="box">
                        <div className="logo">
                            <img src={ LogoImage } alt='' className="w-16 rounded-full object-scale-down"/>
                            <h2 className="font-medium">Do You Need Help With Anything?</h2>
                            <p className="text-gray-500 my-5">Receive updates, hot deals, tutorials, discounts sent straignt in your inbox every month</p>
                            <div className="flex">
                                <input type="text" placeholder="Email Address" className="bg-white p-4 w-full rounded-md"/>
                                <button className="px-6 py-3 rounded-md bg-green-500 border-none text-white cursor-pointer font-semibold">Subscribe</button>
                            </div>
                        </div>
                    </div>

                    {/* {footer.map((val) => (
                    <div className="box flex flex-col items-center">
                            <h3 className="mr-[20px]">{val.title}</h3>
                            <ul>
                                {val.text.map((items) => (
                                    <li className="block text-gray-500 mb-5"> {items.list} </li>
                                ))}
                            </ul>
                    </div> 
                    ))} */}
                </div>
            </footer>
            <div className="text-center py-5 bg-[#1d2636] text-gray-500 border-t border-opacity-10">
                <span>© 2023 ComfortQuarters. Designd By TrippleCoders.</span>
            </div>
        </>
    )
}

export default Footer;