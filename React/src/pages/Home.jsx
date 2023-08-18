import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div style={{display:'flex', justifyContent:'center'}}>
            <Link to={'/memo'}>UseMemo</Link>
        </div>
    );
};

export default Home;