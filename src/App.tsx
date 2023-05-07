function App() {
	return (
		<div className="imgbg grid place-items-center h-screen">
			<div className="card flex flex-row justify-between">
				<img src="./assets/react.svg" className="w-1/2" />
				<form className="w-1/2 flex flex-col gap-4 items-center justify-center">
					<input />
					<input />
					<button>login</button>
				</form>
			</div>
		</div>
	);
}

export default App;
