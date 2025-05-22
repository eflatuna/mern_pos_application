const AuthCarousel = ({ img, title, desc }) => {
	return (
		<div>
			<div className="!flex flex-col items-center justify-center h-full mb-10">
				<img
					src={img}
					alt="responsive"
					className="w-[600px] h-[500px]"
				/>
				<h3 className="text-4xl text-center font-bold text-white">
					{title}
				</h3>
				<p className="mt-5 text-xl text-center text-white">{desc}</p>
			</div>
		</div>
	);
};

export default AuthCarousel;
