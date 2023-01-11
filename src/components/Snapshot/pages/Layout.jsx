import { Outlet, Link } from "react-router-dom"

const Layout = () => {
  return (
    <>
    <div>
        <ul>
          <li>
            <Link to="/">Mountain</Link>
          </li>
          <li>
            <Link to="/Food">Food</Link>
          </li>
          <li>
            <Link to="/Bird">Bird</Link>
          </li>
          <li>
            <Link to="/Flower">Flower</Link>
          </li>
        </ul>
    </div>
      {/* <Outlet /> */}
    </>
  )
};

export default Layout;