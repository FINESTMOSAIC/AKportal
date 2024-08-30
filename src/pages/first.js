import { useState, useEffect } from "react"

// import config from "../../postcss.config.mjs";
// import { headers } from "next/headers";

export default function First() {

    // const [Test, setTest] = useState([{
    //     code:'',
    //     description:'',
    //     title:'' ,
    //     uri:''
    // }]);
    const [Test, setTest] = useState("");
    // const [response, setresponse] = useState(false);
    const testt = async () => {
        const config = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            // body : ""
        }
    
    const res = await fetch('/api/hello', config);
    const res_val = await res.json();
    if (res.ok) {
        
        setTest(res_val.message);
        // const s= JSON.parse(res_val.message);
        // let i=0;


        // for (i;i<s.length;i++){
        //     setTest([
        //         ...Test,
        //         {
        //             code:i.code,
        //             description:i.description,
        //             title:i.title ,
        //             uri:i.uri
        //         }
        //     ])
        // }
        // setTest([...Test].map(x=>{
        //     x.code=s
        // }
        // ))
        // setTest(s)
        // setresponse(true)
    }
    else {
        setTest("error")
        // setresponse(true)
    }
    }


useEffect(() => {
    testt();
    // if (response){
        
        // const s= JSON
        console.log(Test);

    // }
    
    
    
})
// testt();
// console.log(Test)

return (

    <>

        Inside the first component
        {
            Test
        }

    </>

)
}
