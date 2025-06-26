import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <Link to="/addCoffee"><button>add coffee</button></Link>
        </div>
        
    );
};

export default Home;