// import { useState } from 'react';
// import './App.css';
// function App() {
//   const [data,setData]=useState({
//     Email:"",
//     Password:""
//   });

//   const{Email,Password}=data
//   // const handleChange=(e)=>{
//   //   setData({...data,[e.target.Email]:e.target.value})
//   // }
//   const handleSubmit=async(e)=>{
//     e.preventDefault();

//     try{
//       const response=await fetch('https://sheetdb.io/api/v1/m44p7k4sfgf75',
//       {
//         method:'Post',
//         headers:
//         {"Content-Type":"application/json"
//       },
//       body:JSON.stringify([[Email,Password,new Date().toLocaleString],])

//       });
//       await response.json();
//       setData({...data,Email:"",Password:""})
//     }
//     catch(err){
//       console.log(err)
//     }
//   }
//   return (
//     <form onSubmit={handleSubmit}>
//     <div>
//       <div>
//       <h1> Hello World</h1>
//       <div>
//         <label>Email</label>
//         <input 
//         type='text' 
//         placeholder='Enter your value '
//         // name='Email'
//         value={Email}
//         onChange={(e)=>setData(e.target.value)}
//         />
//       </div>
//       <div>
//         <label>Password </label>
//         <input 
//         type='text' 
//         placeholder='Enter your Email '
//         // name='Password'
//         value={Password}
//         onChange={(e)=>setData(e.target.value) }
//         />
//       </div>
//      </div>
//      <button>Submit</button>
//     </div>
//     </form>
//   );
// }

// export default App;


import { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState({
    Email: "",
    Password: ""
  });

  const { Email, Password } = data;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://v1.nocodeapi.com/faisal2000/google_sheets/xIAxbZsdWgsWcbCt?tabId=Sheet1', {
        method: 'Post',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify([[Email, Password, new Date().toLocaleString()]])
      });
      
      await response.json();
      setData({ Email: "", Password: "" });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <h1>Hello World</h1>
          <div>
            <label>Email</label>
            <input 
              type='text' 
              placeholder='Enter your Email' 
              name='Email' 
              value={Email} 
              onChange={handleChange} 
            />
          </div>
          <div>
            <label>Password</label>
            <input 
              type='text' 
              placeholder='Enter your Password' 
              name='Password' 
              value={Password} 
              onChange={handleChange} 
            />
          </div>
        </div>
        <button>Submit</button>
      </div>
    </form>
  );
}

export default App;
