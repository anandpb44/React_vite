// import { useState } from "react"



// function App(){
//   const [count,setCount]=useState(0)
//   return (
//     <>
//     <h1>function components</h1>
//     <h2>{count}</h2>
//     </>
//   )
// }
// export default App


// function App(){
//   const [data,setData]=useState("")
//   return (
//     <>
//     <form action="">
//       <input type="text" name="name" id="name" value={data} onChange={(e)=>setData(e.target.value)}/>
//     </form>
//     <h1>{data}</h1>
//     </>
//   )
// }
// export default App


//        FORM APPLICATION

import { useState } from "react"

function App(){
    const [data,setData]=useState([])
    const [formData,setFormData]=useState({name:"",age:""})


const handleChange=(e)=>{
  const{name,value}=e.target
  setFormData((prv)=>({...prv,[name]:value}))
  console.log(formData);
  
}

const handlesubmit=(e)=>{
  e.preventDefault()
  setData((prv)=>[...prv,formData])
  setFormData({name:"",age:""})
  console.log(data);
  
}



    return(
      <>
      <form onSubmit={handlesubmit} >
        <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} />
        <input type="number" name="age" id="age" value={formData.age} onChange={handleChange}/>
        <input type="submit" value="Add" />
      </form>
      <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
        {data.map((value,index)=>(
          <tr key={index}>
            <td>{value.name}</td>
            <td>{value.age}</td>
          </tr>
        ))}
      </table>
      </>
    )
}

export default App  