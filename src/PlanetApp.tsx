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
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
        
        <Route path='venus' element={<Venus/>}/> 
        <Route path="mercury" element={<Mercury />} />
        <Route path="earth" element={<Earth />} />
        <Route path="mars" element={<Mars />} />
        <Route path="jupiter" element={<Jupiter />} />
        <Route path="saturn" element={<Saturn />} />
        <Route path="uranus" element={<Uranus />} />
        <Route path="neptune" element={<Neptune />}
        loader={async()=>{ return fetch('https://jsonplaceholder.typicode.com/posts')}} />
    </Route>
  )
);

export default function PlanetApp() {
  return <RouterProvider router={router} />;
}
