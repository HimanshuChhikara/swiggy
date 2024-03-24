import UserCard from '../components/UserCard';
import UserClass from '../components/UserCardClass';

let user = new UserClass('Himanshu','Delhi');
console.log("User ---- ",user);
const About = () => {
    console.log("THis is About us -- ")
    return (
        <div>
            <h1>About Page</h1>
            <UserCard />

            {/* <UserClass name={'Himanshu'} location={'Delhi'}/> */}
        </div>
    )
}

export default About;