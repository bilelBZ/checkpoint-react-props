import PropTypes from "prop-types";
const Profile = (props) => {
    return (
        <div>
            <h1>{props.fullname}</h1>
            <h3>{props.profession}</h3>
            <h4>{props.bio}</h4>
            <button onClick = {props.greeting} style={{backgroundColor:'Blue',color:'white',border:'none',borderRadius:'5px', padding:'8px 20px'}}>Hello</button>
        </div>
    )
}
Profile.defaultProps={age:27}
Profile.propTypes = {
    fullname: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    age: PropTypes.number,
    greeting: PropTypes.func
   };

export default Profile