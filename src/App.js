import React from 'react';
import Main from "./Component/Main";
import Mac from "./Component/Pages/Mac/Mac";
import TestIphone from './Component/Pages/TestIphone';
import Ipad from "./Component/Pages/Ipad/Ipad";
import Watch from "./Component/Pages/Watch/Watch";
import Tv from "./Component/Pages/Tv/Tv";
import Music from "./Component/Pages/Music/Music";
import Support from "./Component/Pages/Support/Support";
import { Route, Routes } from "react-router-dom";
import Four04 from "./Component/Footer/Four04/Four04";
import SharedLayaout from "./Component/Pages/SharedLayaout";
import SingleAppleProduct from './Component/Pages/SingleAppleProduct';
import Store from './Component/Pages/Store/Store';
import Vision from './Component/Pages/Vision/Vision';
import Accssories from './Component/Pages/Accssories/Accssories';


function App() {
  return (
<div> 
<Routes>
      <Route path="/" element={<SharedLayaout/>}>

      
      <Route path="/" element={<Main />}/>
      <Route path="store" element={<Store/>}/>
      <Route path="mac" element={<Mac/>}/>
      <Route path="iphone" element={<TestIphone />}/>
      <Route path="iphones/:pid" element={<SingleAppleProduct/>}/>
      <Route path="ipad" element={<Ipad />}/>
      <Route path="watch" element={<Watch />}/>
      <Route path="vision" element={<Vision />}/>
      <Route path="tv" element={<Tv />}/>
      <Route path="music" element={<Music />}/>
      <Route path="accssories" element={<Accssories />}/>
      <Route path="support" element={<Support />}/>
      <Route path="*" element={<Four04 />}/>
      </Route>
    </Routes>
</div>
  );
}

export default App;
