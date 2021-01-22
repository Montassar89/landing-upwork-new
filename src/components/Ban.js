import React from 'react';

const Ban = ({ title }) => {
  return(
	<div>
	<div className="w-full m-0 p-0 bg-cover bg-bottom" style={{backgroundImage:"url('https://www.shipping-boxes.com/wp-content/uploads/2020/06/03-768x402-1.jpg')", height: '100vh'}}>
		<div className="container max-w-4xl mx-auto pt-16 md:pt-32 text-center break-normal">
			
			<p className="text-white font-extrabold text-3xl md:text-5xl">
				👻 Ghostwind CSS
			</p>
			<p className="text-xl md:text-2xl text-gray-500">Welcome to my Blog</p>
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
								<div className="w-full font-bold text-xl text-gray-900 px-6">👋 Welcome fellow Tailwind CSS and Ghost fan</div>
								<p className="text-gray-800 font-serif text-base px-6 mb-5">
									This starter template is an attempt to replicate the default Ghost theme "Casper" using Tailwind CSS and vanilla Javascript.

									<br/><br/>
									<script async type="text/javascript" src="//cdn.carbonads.com/carbon.js?serve=CK7D52JJ&placement=wwwtailwindtoolboxcom" id="_carbonads_js"></script>
								</p>
							</div>

							<div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
								<div className="flex items-center justify-between">
									<img className="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" src="http://i.pravatar.cc/300" alt="Avatar of Author" />
									<p className="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
								</div>
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

export default  Ban
