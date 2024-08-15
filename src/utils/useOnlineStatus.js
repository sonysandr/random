import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  
    // state variable for holding the state variable
    const [onlineStatus,setOnlineStatus] = useState(true);
  
  
    // check if online

  useEffect(() => {
    window.addEventListener("offline", ()=>{
        setOnlineStatus(false);
    });

    window.addEventListener("online",()=>{
        setOnlineStatus(true);
    })

  }, []);

//   retuyrn boolean
  return onlineStatus;
};

export default useOnlineStatus;
