import React from 'react'
import { Container } from '@material-ui/core'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';


const App = () => {


    return (
        <BrowserRouter>
            <Container maxwidth="lg">
                <Navbar />
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/auth" exact element={<Auth />} />
                </Routes>
            </Container>
        </BrowserRouter>
    )
}

export default App




// import React, { useState, useRef } from "react";
// import { useScript } from "./hooks/useScript";
// import jwt_deocde from "jwt-decode";

// const App = () => {
//     const googlebuttonref = useRef();
//     const [user, setuser] = useState(false);
//     const onGoogleSignIn = (user) => {
//         let userCred = user.credential;
//         let payload = jwt_deocde(userCred);
//         console.log(payload);
//         setuser(payload);
//     };
//     useScript("https://accounts.google.com/gsi/client", () => {
//         window.google.accounts.id.initialize({
//             client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID, // here's your Google ID
//             callback: onGoogleSignIn,
//             auto_select: false,
//         });

//         window.google.accounts.id.renderButton(googlebuttonref.current, {
//             size: "medium",
//         });
//     });
//     return (
//         <div
//             style={{
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 height: "100vh",
//             }}
//         >
//             {!user && <div ref={googlebuttonref}></div>}
//             {user && (
//                 <div>
//                     <h1>{user.name}</h1>
//                     <img src={user.picture} alt="profile" />
//                     <p>{user.email}</p>

//                     <button
//                         onClick={() => {
//                             setuser(false);
//                         }}
//                     >
//                         Logout
//                     </button>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default App;