
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const templateParams = {
            ...formData,
            from_name: formData.name, // Utiliza el nombre del remitente proporcionado por el usuario
            reply_to: formData.email // Utiliza la dirección de correo electrónico proporcionada por el usuario para la respuesta
        };

        emailjs.send('service_0q3f6uq', 'template_mxtkz87', templateParams, '8eUA_smTGCM9pjgiO')
            .then((result) => {
                console.log('Correo electrónico enviado correctamente:', result.text);
            }, (error) => {
                console.error('Error al enviar el correo electrónico:', error.text);
            });
    };


    return (
        <section className=" body-font relative">
            <div className="container px-5 pt-6 pb-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="text-3xl font-bold  mb-4 ">
                        Es hora de ponernos en contacto
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed">
                        Mandame un <span className='text-yellow-300'>correo</span> para poder brindarte una <span className='text-yellow-300'>atencion personalizada</span>
                    </p>
                </div>
                <form onSubmit={handleSubmit} className="lg:w-1/2 md:w-2/3 mx-auto">
                    <div className="flex flex-wrap -m-2">
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label
                                    htmlFor="name"
                                    className="leading-7 text-sm "
                                >
                                    Nombre
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    onChange={handleInputChange}
                                    className="w-full bg-[#DFDFE0] bg-opacity-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                        </div>
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label
                                    htmlFor="email"
                                    className="leading-7 text-sm"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    onChange={handleInputChange}
                                    className="w-full bg-[#DFDFE0] bg-opacity-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <div className="relative">
                                <label
                                    htmlFor="message"
                                    className="leading-7 text-sm"
                                >
                                    Mensaje
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    onChange={handleInputChange}
                                    className="w-full bg-[#DFDFE0] bg-opacity-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                ></textarea>
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <button type='submit'
                                className="flex mx-auto text-white bg-[#1F2937] border-0 py-2 px-8 focus:outline-none hover:bg-[#111827] rounded text-lg">
                                Enviar
                            </button>
                        </div>
                        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                            <a className="text-yellow-300">alanopk328@gmail.com</a>
                            <p className="leading-normal my-5">
                                Espero tu mensaje
                                <br />
                                Para darte un producto de calidad.
                            </p>
                            <span className="inline-flex">
                                <a className="text-gray-500">
                                    <svg
                                        fill="currentColor"
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                </a>
                                <a className="ml-4 text-gray-500">
                                    <svg
                                        fill="currentColor"
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                    </svg>
                                </a>
                                <a className="ml-4 text-gray-500">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                    >
                                        <rect
                                            width="20"
                                            height="20"
                                            x="2"
                                            y="2"
                                            rx="5"
                                            ry="5"
                                        ></rect>
                                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                    </svg>
                                </a>
                                <a className="ml-4 text-gray-500">
                                    <svg
                                        fill="currentColor"
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                    </svg>
                                </a>
                            </span>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;