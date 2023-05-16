import React, {useState, createContext, useEffect } from 'react';

export const AuthContext = createContext({
	loggedIn: false,
	logOut: () => { },
	logIn: () => { },
	register: () => {},
	token: null,

});



export const AuthContextProvider = (props) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [token, setToken] = useState();

	const logOutHandler = () => {
		setToken("");
		setIsLoggedIn((prevValue) => !prevValue);
	};

	const logInHandler = async (userLoginData) => {
		const response = await fetch("api/auth/login",
		{
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(userLoginData),
		});
		const responseData = await response.json();
		setToken(responseData);
		setIsLoggedIn((prevValue) => !prevValue);
	};
	
	const registerHandler = async (userRegisterData) => {
		const response = await fetch("api/auth/register", 
		{
			method: "POST",
			headers: {
				'Content-Type': 'applicatin/json'
			} ,
			body: JSON.stringify(userRegisterData),
		});
		const responseData = await response.json();
		setToken(responseData);

	}


	// useEffect(() => {
	// 	const fetchListFromApi = async () => {
	// 		const response = await fetch("/api/games");
	// 		const data = await response.json();
	// 		console.log(data);
	// 		setGameList(() => {
	// 			return [...data];
	// 		});
	// 	};
	// 	fetchListFromApi();
	// }, []);

	const contextValue = {
		loggedIn: isLoggedIn,
		logOut: logOutHandler,
		logIn: logInHandler,
		register: registerHandler,
		token: token,
	};

	return (
		<AuthContext.Provider value={contextValue} >
			{props.children}
		</AuthContext.Provider>	
	);

};





export default AuthContext;