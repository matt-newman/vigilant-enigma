import { Table } from "./components/table/Table"

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.tailwind file.
   */
  return (
    <div>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>
              Dashboard
            </h1>
          </div>

          <div id="orders">
            <Table headerText="Accepted Orders" data='' />
          </div>

          <div id="demand">
            <Table headerText="Live Demand" data='' />
          </div>

          <div id="activity">
            <Table headerText="Recent Activity" data='' />
          </div>
        </div>
        
      </div>
    </div>
  );
}
