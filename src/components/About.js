import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  return (
    <div className="m-3 p-2 border border-gray-600">
      <h1 className="font-bold text-base">About us</h1>
      <User name="Senthil Kumari Paul Sami" location="Mississauga, Ontario" />
      <UserClass name="PSK" location="Bengaluru" />
    </div>
  );
};
export default About;
