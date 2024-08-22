import { useEffect, useState } from "react";
import { MENU_API } from "./constants";


const useRestaurantMenu = (resId) =>{

    const[resInfo,setResInfo] = useState(null);
// useEffect hook has two arguments 
// 1st argument is a callback function
// 2nd is a dependency array
    useEffect(()=>{
        fetchData();
    },[]);

    // function to make an api call
    const fetchData = async () => {
        const data = await fetch(MENU_API + resId  );
        const json = await data.json();
        setResInfo(json.data);
    }

    return resInfo;
}

export default useRestaurantMenu;