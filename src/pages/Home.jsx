import { DashBoardContent } from "../components/DashboardContent/DashboardContent";
import { Sidebar } from "../components/Sidebar/Sidebar";

function Home() {
  return (
    <div className="d-flex">
      <Sidebar />
      <DashBoardContent />
    </div>
  );
}

export default Home;
