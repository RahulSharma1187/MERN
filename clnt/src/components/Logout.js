import React, {useEffect, useContext} from "react";
import {useHistory} from 'react-router-dom';

import {userContext} from '../App';

const Logout = () => {
    
    const {state, dispatch} = useContext(userContext);

    const history = useHistory();

    // promises

    useEffect(() => {
        fetch('./logout', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/josn',
                Accept : 'application/json'
            },
            credentials: "include"
        }).then((res) => {
            dispatch({type:"USER", payload:false})
            history.push('/login', {replace: true});
            if(!res.status === 200){
                const error = new Error(res.error);
                throw error;
            }

        }).catch((error) => {
            console.log(error);
        })
    }, []);
    
    return(
        <>
            <h1>This is Logout Page</h1>
        </>
    )
};

export default Logout;