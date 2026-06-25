import PoliciesKpiGrid from '../components/policies/PoliciesKpiGrid.jsx';
import AllPoliciesTable from '../components/policies/AllPoliciesTable.jsx';

export default function AllPoliciesPage() {
  return (
    <div className="shell page visible" id="page-policies">
      <div className="page-title"><h1>All Policies</h1></div>
      <PoliciesKpiGrid />
      <AllPoliciesTable />
    </div>
  );
}
