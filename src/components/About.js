import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  return (
    <div className="m-3 p-2 border border-gray-600">
      <heading className="font-bold text-base">About us</heading>
      <User name="Senthil Kumari Paul Sami" location="Mississauga, Ontario" />
    </div>
  );
};
export default About;
