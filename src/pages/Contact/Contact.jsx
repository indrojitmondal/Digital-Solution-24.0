import React from 'react';
import contactImage from '../../icon/contactme.svg'

import { Helmet } from 'react-helmet-async';
import ContactUs from './ContactUs';
const Contact = () => {
    return (
        <div>
            <Helmet>
              <title>Contact – Digital Solution 24.0 </title>
              </Helmet>
            <section className="">
                <div className="w-10/12 mx-auto text-center flex flex-col lg:flex-row gap-8 pt-9 lg:px-14 pb-9">
                    <img src={contactImage} className="block h-40" alt="Contact Icon" />
                    <div className="text-center">
                        <h1 className="font-bold text-primary pt-5">
                            <span className="text-primary"></span>OUR CONTACT
                        </h1>
                        <p className="">
                        At Digital Solution 24.0, we’re always ready to connect and assist you with your web development needs. Whether you have a project in mind, need a consultation, or have questions about our services, we're here to help. Reach out to us, and let’s discuss how we can collaborate to bring your digital ideas to life with high-quality solutions
                            
                        </p>
                    </div>
                </div>
                <hr className="md:hidden border-gray-400" />
            </section>
            <ContactUs></ContactUs>
              
        </div>
    );
};

export default Contact;