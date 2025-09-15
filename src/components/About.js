import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  return (
    <div className="about-container">
      <h2>About us</h2>
      <User name="Cow" location="Library" />
      <UserClass name="Senthil" location="Bengaluru" />
    </div>
  );
};
export default About;
