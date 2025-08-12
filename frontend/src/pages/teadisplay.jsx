import'./display.css';
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function TeacherDisplay()
{
    const[update,setData]=useState([])
    const navigate=useNavigate()
    useEffect(()=>{
     axios.get('http://localhost:4004/teacher')
     .then((response)=>{
        setData(response.data)
     })
     .catch((err)=>console.log("Api link is error",err))
    },[])
    const click=(id)=>{
        navigate(`/teaupdate/${id}`)
    }
    const dclick=(id)=>{
    console.log(id)
        axios.delete(`http://localhost:4004/teacher/${id}`)
        .then((response)=>{
            setData(response.data);
            
        })
        location.reload()
        .catch((err)=>console.log("axios error in delete api",err));

    }
   
   
   
   const inclick=()=>{
    navigate(`/teainsert`)
    
    }
    
    return(
        <>
        <body className='tab'>
        <div className='container'>
        <h1 className='head'>Teacher Display</h1>
        
         <button className='btn btn-secondary insert' onClick={inclick}>Insert</button><br /><br />
        
        <table className='table table-striped '>
             <thead>
          <tr>
           
            <th className='id2'>Id</th>
            <th className='name'>Name</th>
            <th className='age'>Age</th>
            <th className='actions'>Actions</th>
            
          </tr>
           </thead>
            <tbody>
                {

            update.map((datas)=>(
               <tr key={datas._id}>
                    
                    <td><p className=' id ms-2'>{datas.id}</p></td>
                    <td><p className=' nam ms-2'>{datas.name}</p></td>
                    <td><p className=' age ms-2'>{datas.age}</p></td>
                    <td  className='actions' ><button className="btn btn-info " onClick={()=>click(datas._id)}>Update</button><br></br><br></br>
                   <button className="btn btn-warning" onClick={()=>dclick(datas._id)}>Delete</button></td>
                   
                    </tr>
            ))
            
        }
        </tbody>

        </table><br />
         
        </div>

        </body>
        </>
    )
}