import React from 'react';

const Services = () => {
    return (
			<section className="py-20">
				<div className="container md:px-4 mx-auto">
					<div className="max-w-2xl mx-auto mb-16 text-center">
						<span className="font-bold tracking-wider uppercase dark:text-violet-400">
							Pricing
						</span>
						<h2 className="text-4xl font-bold lg:text-5xl">
							Services We Provide
						</h2>
					</div>
					<div className="flex flex-wrap items-stretch -mx-4 mt-16">
						<div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
							<div className="flex flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-yellow-200">
								<div className="space-y-2">
									<h4 className="text-2xl font-bold">Problem Solving</h4>
									<span className="text-6xl font-bold">Free</span>
								</div>
								<p className="mt-3 leading-relaxed dark:text-gray-400">
									Anyone can practicing problem solving through our app. Why are
									you waiting for?
								</p>

								<button
									type="button"
									className="inline-block px-5 py-3 font-semibold tracking-wider text-center rounded bg-white">
									Get Started
								</button>
							</div>
						</div>
						<div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
							<div className="flex flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-gray-300">
								<div className="space-y-2">
									<h4 className="text-2xl font-bold">Premium Courses</h4>
									<span className="text-6xl font-bold">
										$24
										<span className="text-sm tracking-wide">/month</span>
									</span>
								</div>
								<p className="leading-relaxed">
									Our monthly plan grants access to all premium features, the
									best plan for short-term subscribers.
								</p>

								<button
									type="button"
									className="inline-block px-5 py-3 font-semibold tracking-wider text-center rounded bg-white">
									Subscribe
								</button>
							</div>
						</div>
						<div className="w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
							<div className="p-6 space-y-6 rounded shadow sm:p-8 bg-yellow-200">
								<div className="space-y-2">
									<h4 className="text-2xl font-bold">Pro Courses</h4>
									<span className="text-6xl font-bold">
										$72
										<span className="text-sm tracking-wide">/month</span>
									</span>
								</div>
								<p className="leading-relaxed dark:text-gray-400">
									This plan saves you over 60% in comparison to the monthly
									plan.
								</p>
								<button
									type="button"
									className="inline-block px-5 py-3 font-semibold w-full text-center rounded bg-white">
									Subscribe
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
};

export default Services;