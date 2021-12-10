import { useEffect, useState } from "react";
import { Work } from "./costum";

const See = () => {
	const [state, setstate] = useState("loading..");
	const [user, setuser] = useState("");
	const [email, setemail] = useState("");
	const [pass, setpass] = useState(0);

	useEffect(() => {
		function solve() {
			setTimeout(() => {
				console.log("hello its 5 sec done");
				setstate("hey after 5 sec");
			}, 5000);
		}
		solve();
	}, []);
	function handel(e) {
		e.preventDefault();
		Work(user, email, pass);
		// console.log(user);
		// console.log(email);
		// console.log(pass);

		// console.log("hery");
	}

	return (
		<>
			<h1>hey its working</h1>
			<h1>{state}</h1>
			<form>
				<input
					type="string"
					placeholder="username"
					onChange={(e) => setuser(e.target.value)}
				></input>
				<br />
				<input
					type="email"
					placeholder="email"
					onChange={(e) => setemail(e.target.value)}
				></input>
				<br />

				<input
					type="password"
					placeholder="password"
					onChange={(e) => setpass(e.target.value)}
				></input>
				<br />
				<input type="submit" onClick={handel}></input>
			</form>
		</>
	);
};

export { See };
