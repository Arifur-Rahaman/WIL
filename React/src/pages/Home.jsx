import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div style={{display:'flex', justifyContent:'center'}}>
            <Link to={'/memo'}>UseMemo</Link>
            <Link style={{marginLeft:'16px'}} to={'/hoc'}>Hoc</Link>
        </div>
    );
};

export default Home;