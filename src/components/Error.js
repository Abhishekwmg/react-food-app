import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err)
    return (
        <div>
            <h3>Oops! something wen't wrong!</h3>
            <h2>404!💀</h2>
            <p>{err.data}</p>
            <p>Page {err.statusText}</p>
        </div>
    )
}

export default Error;