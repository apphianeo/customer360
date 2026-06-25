import { CUSTOMERS } from './customers.js';
import { POLICIES_ALL } from './policies.js';
import { CLAIMS_ALL } from './claims.js';

export function highlightMatch(text, q) {
  const re = new RegExp('(' + q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
  return text.replace(re, '<b>$1</b>');
}

export function getSearchResults(q) {
  const lq = q.toLowerCase();
  const results = [];
  CUSTOMERS.forEach((c) => {
    if (c[2].toLowerCase().includes(lq)) {
      results.push({ type: 'Customer', cat: 'cat-cust', title: c[2], sub: c[3] + ' · ' + c[5] + ' · LTV ' + c[7], pid: c[12] || null });
    }
  });
  POLICIES_ALL.forEach((p) => {
    if ((p[0] + ' ' + p[3] + ' ' + p[4]).toLowerCase().includes(lq)) {
      results.push({ type: 'Policy', cat: 'cat-pol', title: p[4] + ' ' + p[0], sub: p[3] + ' · ' + p[5] + ' – ' + p[6] + ' · ' + p[7], pid: p[10] || null, cust: p[3] });
    }
  });
  CLAIMS_ALL.forEach((c) => {
    if ((c[4] + ' ' + c[5] + ' ' + c[6] + ' ' + c[0]).toLowerCase().includes(lq)) {
      results.push({ type: 'Claim', cat: 'cat-claim', title: c[5], sub: c[4] + ' · ' + c[6] + ' · ' + c[7] + ' · ' + c[8], link: c[11] || null });
    }
  });
  return results;
}
