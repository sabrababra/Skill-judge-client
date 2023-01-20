
const Spinner = () => {
    return (
			<div className="h-[100vh] flex items-center justify-center">
				<div
					className="w-16 h-16 absolute rounded-full animate-spin
                            border border-solid border-yellow-500 border-t-transparent"></div>
			</div>
		);
};

export default Spinner;