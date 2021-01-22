import React from 'react';
import home from '../home.jpg';
const Ban = ({ title }) => {
	return (
		<div>
			<div className="w-full m-0 p-0 bg-cover bg-bottom" style={{
				backgroundImage: `url(${home})`
				, height: '100vh'
			}}>
				<div className="container max-w-4xl mx-auto pt-16 md:pt-32 text-center break-normal">

					<p className="text-black font-extrabold text-xl">
					Self-Storage and Door-to-Door Storage in Hong Kong

			        </p>
					<p className="text-xl md:text-2xl text-red-500">HAPPY</p>
					<div className="flex items-center justify-center">

					<button class="inline-flex items-center h-10 px-5 m-4 text-white transition-colors duration-150 bg-yellow-500 rounded-lg focus:shadow-outline hover:bg-indigo-800">
						<svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
							<path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
						</svg>
						<span>SEELF-STORAGE</span>
					</button>
					<button class="inline-flex items-center h-10 px-5 m-4 text-white transition-colors duration-150 bg-green-500 rounded-lg focus:shadow-outline hover:bg-indigo-800">
						<span>DOOR-TO-DOOR</span>
						<svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
							<path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
						</svg>						
					</button>
					</div>

				</div>
			</div>


			<div className="container px-4 md:px-0 max-w-6xl mx-auto -mt-32">

				<div className="mx-0 sm:mx-6">




					<div className="bg-gray-200 w-full text-xl md:text-2xl text-gray-800 leading-normal rounded-t">


						<div className="flex h-full bg-white rounded overflow-hidden shadow-lg">
							<a href="post.html" className="flex flex-wrap no-underline hover:no-underline">
								<div className="w-full md:w-2/3 rounded-t">
									<img src="https://school298.spb.ru/images/000/DSC100074913.jpg" className="h-full w-full shadow" />
								</div>

								<div className="w-full md:w-1/3 flex flex-col flex-grow flex-shrink">
									<div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
										<p className="w-full text-gray-600 text-xs md:text-sm pt-6 px-6">GETTING STARTED</p>
										<div className="w-full font-bold text-xl text-gray-900 px-6">👋 Welcome fellow Tailwind CSS</div>
										<p className="text-gray-800 font-serif text-base px-6 mb-5">
											This starter template is an attempt to replicate the default  using Tailwind CSS and vanilla Javascript.

										</p>
									</div>
								</div>

							</a>
						</div>
					</div>
				</div>
			</div>
		</div>

	)
}

export default Ban
