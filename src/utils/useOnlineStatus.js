import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(true);
    useEffect(() => {
        window.addEventListener('offline', () => {
            return setOnlineStatus(!onlineStatus);
        })
    }, [onlineStatus])
    return onlineStatus;
}

export default useOnlineStatus;