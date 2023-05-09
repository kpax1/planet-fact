import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Root from "./Root";
import Mercury from "./Planets/Mercury";
import Venus from "./Planets/Venus";
import Earth from "./Planets/Earth";
import Jupiter from "./Planets/jupiter";
import Mars from "./Planets/Mars";
import Saturn from "./Planets/saturn";
import Neptun from "./Planets/neptune";
import Neptune from "./Planets/neptune";
import Uranus from "./Planets/uranus";
import { useState } from "react";


export default function PlanetApp() {

  const [state, setState] = useState(0);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root state={state} setState={setState}/>}>
          <Route path='venus' element={<Venus state={state} setState={setState}/>}/> 
          <Route path="mercury" element={<Venus state={state} setState={setState} />} />
          <Route path="earth" element={<Venus state={state} setState={setState} />} />
          <Route path="mars" element={<Venus state={state} setState={setState} />} />
          <Route path="jupiter" element={<Venus state={state} setState={setState} />} />
          <Route path="saturn" element={<Venus state={state} setState={setState} />} />
          <Route path="uranus" element={<Venus state={state} setState={setState} />} />
          <Route path="neptune" element={<Venus state={state} setState={setState} />}
          loader={async()=>{ return fetch('https://jsonplaceholder.typicode.com/posts')}} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}
