import { useEffect, useState } from 'react';
import { getWorks } from '../helpers/getWorks';


export const useGetInfo = () => {
    
    const [state, setState] = useState({
        data: []
    });


    useEffect( ()=> {

        getWorks()
            .then( info => {

                  setState({
                      data: info
                  })         
            
            })
    }, [ ]);

    return state;
}


