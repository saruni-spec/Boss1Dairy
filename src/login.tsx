import Input from "./input";
import Button from "./button";
import { Link } from "react-router-dom";
import Layout from "./Layout";

const Login = () => {
  const handleButtonClick = () => {
    console.log("login");
  };
  return (
    <Layout>
      <div className=" mb-3 row">
        <Input inputType="text" placeholder="name" />
      </div>
      <div className=" mb-3 row">
        <Input inputType="password" placeholder="password" />
      </div>
      <div className=" mb-3 row">
        <Link to="/viewCustomers">
          <Button buttonName="login" onClick={handleButtonClick} />
        </Link>
      </div>
    </Layout>
  );
};

export default Login;
