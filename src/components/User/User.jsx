import { Link, useNavigate } from "react-router-dom";


const User = ({user}) => {
    const {id, name, email, phone} = user;
    

    const userStyle = {
        border: '2px solid purple',
        padding: '10px',
        borderRadius: '20px'
    }
    

    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>email:{email}</p>
            <p>phone:{phone}</p>
            <Link to = {`/user/${id}`}>Show Details</Link>
            <Link to={`/user/${id}`}>
            <button className="btn " style={{marginLeft :'10px'}}>Click Me</button>
            </Link>

        </div>
    );
};

export default User;