export function Test(){
    return (
        <>
        <p>in the test function</p>
        </>
    )
}


export default function Test2() {
    return (
        <>
        in test 2
        <Test />
        </>

    )
    
}


