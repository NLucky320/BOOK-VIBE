import React from 'react';
import image from '../../src/assets/images.jpg'
const AboutUs = () => {
    return (
        <section className="py-12 bg-[#13131308]">
<h1 className="text-4xl font-bold leading-none sm:text-5xl text-center pb-4">About Book Vibe
		</h1>
            
               <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12 pb-4 md:pb-12 ">
		<div className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
			<img src={image} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
			<div className="p-6 space-y-2 lg:col-span-5">
				<h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Our core focus is building a bridge between authors and readers through active book selections. </h3>
				
				<p>The man who does not read good books has no advantage over the man who cannot read them. - Mark Twain.
Tired of all the strange suggestions from phony sources to fulfill your cravings for just a good book?

If that happens, get ready to unleash the bookworm within at this gateway to book discovery!

Welcome to Book Vibe!</p>
			</div>
		</div> 
                </div>
                
			<div className='p-6 space-y-2'>
				<h2 className="text-4xl font-bold">Our Services & Functions</h2>
				<p> A digital amalgamation of a bookstore, library, and book club, Book Vibe reflects our vision for a comprehensive, user-friendly platform. It makes discovering books an enriching and effortless journey.</p>
				<p>
					We offer a personalized experience for readers of every genre, age, and experience level. Our core focus is building a bridge between authors and readers through active book selections. You may ask, “How do we do that?”
				</p>
				<p>
					Well, our active team responds to all queries and comments as our parents do. They review the desired book to direct the readers to the next captivating read.

Adding to this, the all-knowing algorithm of Book Vibe scours the interwebs and spies on social media.
				</p>
</div>
	<div className="grid grid-cols-1 mx-auto lg:px-8 md:grid-cols-2 md:divide-x p-6 rounded-lg">
		<div className="py-6 md:py-0 md:px-6">
			<h1 className="text-4xl font-bold">Get in touch</h1>
			<p className="pt-2 pb-4">Fill in the form to start a conversation</p>
			<div className="space-y-4">
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
					</svg>
					<span>Fake address, 9999 City</span>
				</p>
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
					</svg>
					<span>123456789</span>
				</p>
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
						<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
					</svg>
					<span>contact@business.com</span>
				</p>
			</div>
		</div>
		<form novalidate="" className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
			<label className="block">
				<span className="mb-1">Full name</span>
				<input type="text" placeholder="Leroy Jenkins" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100" />
			</label>
			<label className="block">
				<span className="mb-1">Email address</span>
				<input type="email" placeholder="leroy@jenkins.com" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100" />
			</label>
			<label className="block">
				<span className="mb-1">Message</span>
				<textarea rows="3" className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100"></textarea>
			</label>
			<button type="button" className="self-center px-8 py-3 text-lg focus:ring hover:ring focus:ring-opacity-75 bg-[#23BE0A] text-white p-4 rounded-[30px]">Submit</button>
		</form>
	</div>
</section>
    );
};

export default AboutUs;