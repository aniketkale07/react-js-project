import { useState } from "react";

export function FormV(){
const [name, setName] = useState("");
const [password, setPassword]= useState("");

const saveForm=(e)=>{
    e.preventDefault();
    if(name==="") alert("Name required");
    if(password==="") alert("password required");

    console.log(`name :${name} \n password : ${password}`);

}
return(
    <>
    <form onSubmit={saveForm} >
        <label htmlFor="name">Name</label>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />

        <label htmlFor="password">Password</label>
        <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} />
        <button type="submit">submit</button>
    </form>
    </>
)
}