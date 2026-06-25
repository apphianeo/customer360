import { useState } from 'react';
import { EYE_SHOW, EYE_HIDE } from './Icons.jsx';

export default function NricField({ nric }) {
  const [shown, setShown] = useState(false);
  const vis = nric.slice(0, -4);
  const masked = vis + '••••';
  return (
    <span className="nric-wrap">
      <span className="nric-val">{shown ? nric : masked}</span>
      <button
        type="button"
        className="nric-toggle"
        aria-label={shown ? 'Mask NRIC/FIN' : 'Reveal NRIC/FIN'}
        onClick={() => setShown((s) => !s)}
      >
        {shown ? EYE_HIDE : EYE_SHOW}
      </button>
    </span>
  );
}
