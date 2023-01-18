import React from 'react';

const Service = () => {
    return (
			<div className="flex flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-yellow-200">
				<div className="space-y-2">
					<h4 className="text-2xl font-bold">Problem Solving</h4>
					<span className="text-6xl font-bold">Free</span>
				</div>
				<p className="mt-3 leading-relaxed dark:text-gray-400">
					Anyone can practicing problem solving through our app. Why are you
					waiting for?
				</p>

				<button
					type="button"
					className="inline-block px-5 py-3 font-semibold tracking-wider text-center rounded bg-white">
					Get Started
				</button>
			</div>
		);
};

export default Service;