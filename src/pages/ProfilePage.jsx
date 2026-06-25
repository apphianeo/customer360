import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { PROFILES } from '../data/profiles.js';
import Hero from '../components/profile/Hero.jsx';
import ProfileKpis from '../components/profile/ProfileKpis.jsx';
import { PersonalParticularsCard, AcquisitionCard, VocCard } from '../components/profile/InfoCards.jsx';
import StatBand from '../components/profile/StatBand.jsx';
import ProfilePolicyTable from '../components/profile/ProfilePolicyTable.jsx';
import ProfileClaimsTable from '../components/profile/ProfileClaimsTable.jsx';
import ServiceTable from '../components/profile/ServiceTable.jsx';
import AiSummaryCard from '../components/profile/AiSummaryCard.jsx';
import ClaimModal from '../components/claims/ClaimModal.jsx';

function demoProfileAction() {
  alert('Demo: the full policy and claim detail views are wired for John Tan in this prototype.');
}

export default function ProfilePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [claimOpen, setClaimOpen] = useState(false);
  const p = PROFILES[id] || PROFILES.jt;

  return (
    <div className="shell page visible" id="page-profile">
      <div id="profile-root">
        <div className="crumbs">
          <a onClick={() => navigate('/')}>Overview</a><span>›</span>
          <span>Customer Profile ({p.name})</span>
        </div>

        <Hero p={p} />
        <ProfileKpis p={p} />

        <div className="grid">
          <PersonalParticularsCard p={p} />
          <AcquisitionCard p={p} />
          <VocCard p={p} />

          <div className="card span-3">
            <div className="card-head">
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none"><path d="M3 7a2 2 0 012-2h3.5l2 2H19a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" /></svg>
              </div>
              <h3>Policy &amp; Portfolio Value</h3>
              <span className="hint">Click a policy to view full details</span>
            </div>
            <StatBand stats={p.polStats} />
            <ProfilePolicyTable policies={p.policies} onDemoAction={demoProfileAction} />
          </div>

          <div className="card span-3">
            <div className="card-head">
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="13" r="8" stroke="currentColor" strokeWidth="1.7" /><path d="M12 9v4l2.5 1.5M9.5 3h5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
              <h3>Claims Lifecycle &amp; SLA</h3>
              <span className="hint">View timeline for the full SLA breakdown</span>
            </div>
            <StatBand stats={p.claimStats} />
            <ProfileClaimsTable claims={p.claims} onOpenClaim={() => setClaimOpen(true)} onDemoAction={demoProfileAction} />
          </div>

          <div className="card span-3">
            <div className="card-head">
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M5 13v-1a7 7 0 0114 0v1" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                  <rect x="3.5" y="13" width="3.5" height="6" rx="1.6" stroke="currentColor" strokeWidth="1.7" />
                  <rect x="17" y="13" width="3.5" height="6" rx="1.6" stroke="currentColor" strokeWidth="1.7" />
                  <path d="M20.5 18.5v.5a3 3 0 01-3 3h-2.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                </svg>
              </div>
              <h3>Servicing &amp; Interaction History</h3>
            </div>
            <StatBand stats={p.svcStats} />
            <ServiceTable svc={p.svc} />
          </div>
        </div>

        <AiSummaryCard p={p} />
      </div>
      <ClaimModal open={claimOpen} onClose={() => setClaimOpen(false)} />
    </div>
  );
}
