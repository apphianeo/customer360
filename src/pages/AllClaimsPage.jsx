import ClaimsKpiGrid from '../components/claims/ClaimsKpiGrid.jsx';
import AllClaimsTable from '../components/claims/AllClaimsTable.jsx';

export default function AllClaimsPage() {
  return (
    <div className="shell page visible" id="page-claims">
      <div className="page-title"><h1>All Claims</h1></div>
      <ClaimsKpiGrid />
      <AllClaimsTable />
    </div>
  );
}
