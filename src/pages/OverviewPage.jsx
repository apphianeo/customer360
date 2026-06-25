import KpiGrid from '../components/overview/KpiGrid.jsx';
import CustomersTable from '../components/overview/CustomersTable.jsx';

export default function OverviewPage() {
  return (
    <div className="shell page visible" id="page-overview">
      <div className="page-title"><h1>Customer Overview</h1></div>
      <KpiGrid />
      <CustomersTable />
    </div>
  );
}
