export const CUSTOMERS = [
  ['JT','b1','John Tan','Active','green','Direct',4,'$2,000',9,'No','red','02 Jun 2026','jt'],
  ['AT','b2','Aisyah Tan','Active','green','Agent',2,'$1,450',8,'Yes','green','28 May 2026'],
  ['MK','b3','Marcus Koh','Active','green','Direct',3,'$1,890',7,'Yes','green','30 May 2026'],
  ['PD','b4','Priya Devi','Active','green','Partner',1,'$620',6,'Yes','green','21 May 2026'],
  ['JL','b5','Jonathan Lim','Lapsing','amber','Agent',1,'$980',4,'Yes','green','09 Apr 2026','jl'],
  ['WN','b6','Wei Ning','Active','green','Direct',2,'$1,310',9,'No','red','01 Jun 2026'],
  ['RH','b2','Rizal Hakim','Inactive','grey','Partner',0,'$340',5,'Yes','green','12 Feb 2026','rh'],
  ['CL','b3','Clara Leong','Active','green','Digital Marketing',3,'$2,240',10,'Yes','green','03 Jun 2026'],
  ['DT','b1','Daniel Teo','Active','green','Agent',2,'$1,120',8,'Yes','green','27 May 2026'],
  ['NF','b4','Nurul Farah','Active','green','Direct',1,'$760',7,'No','red','19 May 2026'],
  ['GS','b5','Gopal Subram','Active','green','Partner',3,'$1,540',6,'Yes','green','15 May 2026'],
  ['HY','b6','Hui Yi','Lapsing','amber','Digital Marketing',1,'$430',5,'Yes','green','22 Apr 2026'],
  ['BC','b2','Brandon Chua','Active','green','Direct',2,'$1,680',9,'Yes','green','04 Jun 2026'],
  ['SM','b3','Siti Mariam','Active','green','Agent',2,'$900',8,'Yes','green','11 May 2026'],
  ['KW','b1','Kenneth Wee','Inactive','grey','Direct',0,'$280',4,'No','red','30 Jan 2026'],
  ['LP','b4','Li Ping','Active','green','Digital Marketing',4,'$2,150',9,'Yes','green','05 Jun 2026'],
  ['AR','b5','Arjun Rao','Active','green','Agent',1,'$540',7,'Yes','green','29 Apr 2026'],
  ['FT','b6','Felicia Tan','Active','green','Direct',2,'$1,260',8,'Yes','green','25 May 2026'],
  ['MH','b2','Muhd Hafiz','Active','green','Partner',1,'$830',6,'Yes','green','08 May 2026'],
  ['JO','b3','Joanne Ong','Lapsing','amber','Agent',1,'$710',5,'Yes','green','02 Apr 2026'],
];

export const CUSTOMER_FIELDS = ['ini','av','name','status','statusPill','channel','pol','ltv','nps','consent','consentPill','last','profileId'];

export function customerObj(c) {
  const [ini,av,name,status,statusPill,channel,pol,ltv,nps,consent,consentPill,last,profileId] = c;
  return { ini,av,name,status,statusPill,channel,pol,ltv,nps,consent,consentPill,last,profileId: profileId || null };
}
