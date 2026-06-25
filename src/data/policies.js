export const POLICIES_ALL = [
  ['UOI-TRV-10422','JT','b1','John Tan','UniTravel','03 Mar 2024','03 Mar 2027','$280','In Force','green','p1'],
  ['UOI-PA-20871','JT','b1','John Tan','UniPA','15 Jul 2024','15 Jul 2026','$320','In Force','green','p2'],
  ['UOI-HME-30119','JT','b1','John Tan','UniHome','01 Jan 2025','01 Jan 2027','$450','In Force','green','p3'],
  ['UOI-MTR-40563','JT','b1','John Tan','UniCar','20 Sep 2025','20 Sep 2026','$950','In Force','green','p4'],
  ['UOI-TRV-10510','AT','b2','Aisyah Tan','UniTravel','12 Feb 2025','12 Feb 2026','$190','Lapsing','amber',null],
  ['UOI-PA-20990','MK','b3','Marcus Koh','UniPA','05 May 2024','05 May 2026','$300','In Force','green',null],
  ['UOI-HME-30231','CL','b3','Clara Leong','UniHome','22 Aug 2024','22 Aug 2026','$480','In Force','green',null],
  ['UOI-MTR-40701','BC','b2','Brandon Chua','UniCar','18 Nov 2024','18 Nov 2025','$1,120','Expired','grey',null],
  ['UOI-TRV-10812','LP','b4','Li Ping','UniTravel','09 Jun 2025','09 Jun 2026','$260','In Force','green',null],
  ['UOI-HME-30255','GS','b5','Gopal Subram','UniHome','30 Mar 2025','30 Mar 2027','$420','In Force','green',null],
  ['UOI-TRV-10688','DT','b1','Daniel Teo','UniTravel','14 Jan 2026','14 Jan 2027','$210','In Force','green',null],
  ['UOI-PA-21044','SM','b3','Siti Mariam','UniPA','01 Apr 2025','01 Apr 2026','$280','Lapsing','amber',null],
  ['UOI-PA-21390','WN','b6','Wei Ning','UniPA','27 Oct 2024','27 Oct 2026','$340','In Force','green',null],
  ['UOI-MTR-40855','AR','b5','Arjun Rao','UniCar','03 Jul 2025','03 Jul 2026','$880','In Force','green',null],
  ['UOI-MTR-40280','FT','b6','Felicia Tan','UniCar','19 Feb 2025','19 Feb 2026','$1,040','In Force','green',null],
  ['UOI-HME-30410','MH','b2','Muhd Hafiz','UniHome','25 Dec 2024','25 Dec 2025','$390','Lapsing','amber',null],
  ['UOI-TRV-10720','PD','b4','Priya Devi','UniTravel','08 Aug 2025','08 Aug 2026','$175','In Force','green',null],
  ['UOI-PA-21190','JL','b5','Jonathan Lim','UniPA','11 Mar 2024','11 Mar 2026','$260','Expired','grey',null],
];

export function policyObj(p) {
  const [no,ini,av,name,product,start,renewal,premium,status,statusPill,link] = p;
  return { no,ini,av,name,product,start,renewal,premium,status,statusPill,link: link || null };
}
