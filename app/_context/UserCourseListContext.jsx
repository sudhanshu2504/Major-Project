"use client";
import { createContext, useState } from "react";
export const UserCourseListContext = createContext();

export const UserCourseListContextProvider = ({children})=>{
    const [userCourseList, setUserCourseList] = useState([]);
    return (
        <UserCourseListContext.Provider value={{userCourseList,setUserCourseList}}>
            {children}
        </UserCourseListContext.Provider>
    );
};