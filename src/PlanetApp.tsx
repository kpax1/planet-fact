import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Root from "./Root";
import Venus from "./Planets/Venus";
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
          <Route path="neptune" element={<Venus state={state} setState={setState} />}/>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}
