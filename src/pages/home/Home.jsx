import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const Home = () => {
  const {sidebar} = useContext(DarkModeContext)

  console.log(sidebar)

  const active = {  
    paddingLeft: '200px',
  }

  const unactive = {
    paddingLeft: '0px',
  }
  
  return (
    <div className="admin" >
      <Sidebar />
      <div className="homeContainer" style={sidebar ? active : unactive}>
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
