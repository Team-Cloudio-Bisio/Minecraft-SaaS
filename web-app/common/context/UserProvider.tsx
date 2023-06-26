"use client";

import React, { Dispatch, createContext, useEffect, useReducer, useState } from "react";
import { User } from "../types";

type ActionType = {
	type: string;
	user: User;
};

const initialState: User = {
	username: '',
	password: ''
};

const reducer = (state: User, action: ActionType) => {
	switch(action.type) {
		case "SET":
			return {
				...state,
				username: action.user.username,
				password: action.user.password
			};
		default:
			return state;
	}
}

export const UserContext = createContext<{
	state: User;
	dispatch: Dispatch<ActionType>;
}>({ state: initialState, dispatch: () => null });

export const UserProvider = ({ children, }: { children: React.ReactNode; }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<UserContext.Provider value={{state, dispatch}} >
			{children}
		</UserContext.Provider>
	)
}
