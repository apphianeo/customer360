export const CLAIMS_ALL = [
  ['UniCar','UOI-MTR-40563','JT','b1','John Tan','Claim own damage','CLM-2026-0147','11 Jun 2026','Success','green','$120','p1_jt'],
  ['UniTravel','UOI-TRV-10422','JT','b1','John Tan','Travel — baggage delay','CLM-2026-0098','25 May 2026','Processing','amber','$0','p1_jt'],
  ['UniCar','UOI-MTR-40701','RH','b2','Rizal Hakim','Accident along PIE towards Changi','CLM-2024-0098','03 Sep 2024','Closed','grey','$0','rh'],
  ['UniTravel','UOI-TRV-10510','AT','b2','Aisyah Tan','Trip curtailment due to family medical emergency','CLM-2026-0201','08 Mar 2026','Processing','amber','$0',null],
  ['UniTravel','UOI-TRV-10510','AT','b2','Aisyah Tan','Trip curtailment due to family medical emergency','CLM-2026-0188','12 Feb 2026','Draft','grey','$0',null],
  ['UniHome','UOI-HME-30119','JT','b1','John Tan','Water damage — burst pipe','CLM-2025-0412','20 Nov 2025','Success','green','$850','p1_jt'],
  ['UniCar','UOI-MTR-40855','AR','b5','Arjun Rao','Windscreen crack','CLM-2026-0055','14 Jan 2026','Success','green','$280',null],
  ['UniCar','UOI-MTR-40701','BC','b2','Brandon Chua','Claim own damage','CLM-2025-0310','05 Aug 2025','Draft','grey','$0',null],
  ['UniTravel','UOI-TRV-10688','DT','b1','Daniel Teo','Flight delay >6hrs','CLM-2026-0176','28 Apr 2026','Success','green','$150',null],
  ['UniHome','UOI-HME-30255','GS','b5','Gopal Subram','Theft — household items','CLM-2026-0220','15 May 2026','Processing','amber','$0',null],
  ['UniCar','UOI-MTR-40563','JT','b1','John Tan','Minor collision — rear bumper','CLM-2025-0289','12 Jul 2025','Success','green','$420','p1_jt'],
  ['UniPA','UOI-PA-20871','JT','b1','John Tan','Fracture — sports injury','CLM-2026-0310','02 Jun 2026','Draft','grey','$0','p1_jt'],
  ['UniTravel','UOI-TRV-10720','PD','b4','Priya Devi','Lost luggage','CLM-2026-0265','30 May 2026','Success','green','$200',null],
  ['UniHome','UOI-HME-30410','MH','b2','Muhd Hafiz','Storm damage — roof tiles','CLM-2025-0445','10 Dec 2025','Closed','grey','$650',null],
  ['UniCar','UOI-MTR-40280','FT','b6','Felicia Tan','Third party claim','CLM-2026-0120','22 Feb 2026','Processing','amber','$0',null],
];

export function claimObj(c) {
  const [product,polNo,ini,av,name,desc,ref,date,status,statusPill,amount,link] = c;
  return { product,polNo,ini,av,name,desc,ref,date,status,statusPill,amount,link: link || null };
}
