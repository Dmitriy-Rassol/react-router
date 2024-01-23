import { useNavigate } from "react-router-dom";

const Redirect = () => {
  const history = useNavigate();

  const handleRedirect = () => {
    history("/");
  };
  return (
    <>
      <div>
        <button onClick={handleRedirect}>Редирект</button>
      </div>
    </>
  );
};

export default Redirect;
