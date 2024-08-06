 import { useRouteError } from "react-router";
 
 const Error = () => {
    const err = useRouteError();
    console.log(err);
  return (
    <div>
      <h1> Opps Error</h1>
      <h2>{err.status} : {err.statusText}</h2>
      <p>
        {err.data}
      </p>
    </div>
  );
};

export default Error;
