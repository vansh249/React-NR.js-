import { User, UserClass } from "./User";

const About = () => {
  return (
    <div>
      <h1>About Us : </h1>

      <User
        name={"Vansh Verma"}
        location={"New Delhi, Delhi"}
        email={"vanshvansh249@gmail.com"}
      />
      <UserClass
        name={"Cheshire Verma"}
        location={"New Delhi, Delhi"}
        email={"cheshire007@gmail.com"}
      />
      <User
        name={"Jazz Verma"}
        location={"New Delhi, Delhi"}
        email={"jazz420@gmail.com"}
      />
    </div>
  );
};

export default About;
