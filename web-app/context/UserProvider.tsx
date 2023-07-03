"use client";

import React, { Dispatch, createContext, useContext, useEffect, useReducer, useState } from "react";
import { User } from "../common/types";

const initialState: User = {
	username: '',
	userPassword: ''
};

const UserContext = createContext<{
	user: User,
	setUser: React.Dispatch<React.SetStateAction<User>>
}>({ user: initialState, setUser: () => {} });

export const UserProvider = ({ children }: any) => {
	// const [state, dispatch] = useReducer(reducer, initialState);
	const [user, setUser] = useState<User>(initialState);

	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	)
}

export const useUserContext = () => useContext(UserContext);