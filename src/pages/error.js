import React from 'react';

const ErrorPage =()=>{

    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return <div>
        Error: 404
    </div>
}

export default ErrorPage