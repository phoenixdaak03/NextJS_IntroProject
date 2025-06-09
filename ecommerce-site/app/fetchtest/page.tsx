export default async function FetchTest(){
    const response = await fetch('https://vigilant-spoon-qrpqq9wr56vc44qv-3000.app.github.dev//api/hello');
    
    const data = await response.json();



    return <h1>{data.message}</h1>
}