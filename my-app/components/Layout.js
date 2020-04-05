import Navbar from './Navbar'
const Layout = (props) =>
    <div className="App">
        <header>
            <Navbar />
        </header>
        {props.children}
    </div>

export default Layout