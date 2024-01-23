import DateAndTime from "../DateAndTime/DateAndTime";
import MouseCoordinates from "../MouseCoordinates/MouseCoordinates";
import UserAgent from "../UserAgent/UserAgent";
import ViewPortInfo from "../ViewPortInfo/ViewPortInfo";

const Home = () => {
  return (
    <>
      <div>
        <h1>Добро пожаловать!</h1>
        <DateAndTime/>
        <UserAgent/>
        <ViewPortInfo/>
        <MouseCoordinates/>
      </div>
    </>
  );
};

export default Home;
