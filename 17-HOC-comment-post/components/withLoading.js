import React from 'react'
export default function withLoading(Component) {
    return function WithLoadingComponent({loading,error,data}) {
        console.log(loading,error);
       if(loading) return <p>loading...</p> 
       if(error) return <p>error</p>
        return <Component data={data}/>
    }
    // 
}
