import RestroCard from "./RestroCard.js";
import resList from "../utils/mockData.js";



// Body
const Body = () => {
    return (
      <div className="body">
        <div className="search">Search</div>
  
        {/* restro container */}
        <div className="res-container">
          {/* RestroCard */}
          {/* <RestroCard resData={resList[2]} /> */}
          
          { resList.map((item)=>{
            return(
              <RestroCard key={item.info.id} resData = {item} />
            )
          })}
        </div>
      </div>
    );
  };

  export default Body;