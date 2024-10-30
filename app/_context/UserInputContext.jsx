'use client';
import React from 'react';
import { createContext, useState } from "react";

export const UserInputContext=createContext();

export const UserInputContextProvider=({children})=>{ 
  const [userCourseInput,setUserCourseInput]=useState([]);
    return (
        <UserInputContext.Provider value={{userCourseInput,setUserCourseInput}}>
            {children}
        </UserInputContext.Provider>
    );
};