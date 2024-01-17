import { Outlet } from "react-router-dom";
import Nav from "../components/Pokemon/Nav/Nav";
function Root() {
    return (
        <>
        <Nav></Nav>
     <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
       </>
    )
}

export default Root