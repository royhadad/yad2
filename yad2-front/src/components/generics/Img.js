import React, { useState } from 'react';
import ClipLoader from "react-spinners/ClipLoader";

export default (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const preLoadClassName = (props.className ? `${props.className} generic-img-preload` : `generic-img-preload`);
    const afterLoadClassName = (props.className ? `${props.className} generic-img-loaded` : `generic-img-loaded`);
    return (
        <React.Fragment>
            {isLoading && (
                <div className='generic-img__spinner'>
                    <ClipLoader
                        color={"#ff7100"}
                        size={props.spinnerSize || 50}
                    />
                </div>
            )}
            <img
                alt='default alt text'
                {...props}
                className={(isLoading ? preLoadClassName : afterLoadClassName)}
                onLoad={() => setIsLoading(false)}
                onError={() => setIsLoading(false)}
            />
        </React.Fragment>
    )
}