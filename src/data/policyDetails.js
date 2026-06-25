export const HOLDER = [['Salutation','Mr'],['Name','John Tan'],['NRIC/FIN','S8812345A'],['Date of Birth','24 Oct 1988'],['Email','john.tan88@gmail.com'],['Mobile Number','+65 9653 7735'],['Address','Blk 825 Tampines St 81, #12-340, Singapore 520825']];
export const INSURED = [['Name','John Tan'],['NRIC/FIN','S8812345A'],['Date of Birth','24 Oct 1988']];
export const CONTACT = [['Contact Number','+65 9653 7735'],['Email Address','john.tan88@gmail.com'],['Mailing Address','Blk 825 Tampines St 81, #12-340, Singapore 520825']];
export const OTHERS_DIRECT = [['Acquired Via','Direct — Digital Marketing'],['Agent-in-Charge','Not applicable (direct purchase)'],['Servicing Team','UOI Direct Care']];

export const ST = {
  ok: {cls:'green', t:'Success'},
  err: {cls:'red', t:'Error'},
  warn: {cls:'amber', t:'Warning'},
};

export const POLICIES_FULL = {
  p1: {title:'UniTravel (Annual)',policyNo:'UOI-TRV-10422',status:'In Force',
    plan:'Plus Plan (Area 2) &nbsp;·&nbsp; <b>03 Mar 2024 – 03 Mar 2027</b>',
    banner:{t:'Register your flight details for complimentary lounge access during delays!',d:'Applicable for eligible departure delays.'},
    details:[['Product','UniTravel'],['Policy Number','UOI-TRV-10422'],['Plan','Plus'],['Group Type','Individual'],['Trip Type','Annual Multi-trip'],['Destination','Worldwide (incl. USA & Canada)'],['Policy Effective Date','03 Mar 2024'],['Policy Expiry Date','03 Mar 2027'],['Payment Method','Mastercard ****9111'],['Payment Terms','Annual'],['Premium Amount','$280.00'],['Promo Code','None'],['Add-On','None']],
    payments:[['03 Mar 2026','Card','S$280.00','Mastercard ****9111',ST.ok],['03 Mar 2025','Card','S$280.00','Mastercard ****9111',ST.ok],['03 Mar 2024','Card','S$280.00','Mastercard ****9111',ST.ok]],
    documents:[['Tax Invoice','Payment','03 Mar 2026'],['Renewal Notice','Payment','01 Feb 2026'],['Policy Schedule','Statement','03 Mar 2025'],['Welcome Letter','Statement','03 Mar 2024']],
    contact:CONTACT,others:OTHERS_DIRECT},
  p2: {title:'UniPA',policyNo:'UOI-PA-20871',status:'In Force',
    plan:'Personal Accident · Individual &nbsp;·&nbsp; <b>15 Jul 2024 – 15 Jul 2026</b>',
    details:[['Product','UniPA'],['Policy Number','UOI-PA-20871'],['Plan','Classic'],['Group Type','Individual'],['Sum Assured','$300,000'],['Coverage','Accidental death & dismemberment'],['Policy Effective Date','15 Jul 2024'],['Policy Expiry Date','15 Jul 2026'],['Payment Method','GIRO'],['Payment Terms','Monthly'],['Premium Amount','$320.00 / yr'],['Promo Code','None'],['Add-On','Medical reimbursement $5k']],
    payments:[['01 Jun 2026','GIRO','S$26.67','GIRO ****2233',ST.ok],['01 May 2026','GIRO','S$26.67','GIRO ****2233',ST.ok],['01 Apr 2026','GIRO','S$26.67','GIRO ****2233',ST.warn]],
    documents:[['Renewal Notice','Payment','12 Jun 2026'],['Policy Schedule','Statement','15 Jul 2024'],['Welcome Letter','Statement','15 Jul 2024']],
    contact:CONTACT,others:OTHERS_DIRECT},
  p3: {title:'UniHome',policyNo:'UOI-HME-30119',status:'In Force',
    plan:'Home Contents & Renovation &nbsp;·&nbsp; <b>01 Jan 2025 – 01 Jan 2027</b>',
    details:[['Product','UniHome'],['Policy Number','UOI-HME-30119'],['Plan','Plus'],['Group Type','Individual'],['Insured Address','Blk 825 Tampines St 81, #12-340'],['Sum Assured','$180,000 (contents $80k · reno $100k)'],['Policy Effective Date','01 Jan 2025'],['Policy Expiry Date','01 Jan 2027'],['Payment Method','Mastercard ****9111'],['Payment Terms','Annual'],['Premium Amount','$450.00'],['Promo Code','HOME10'],['Add-On','None']],
    payments:[['01 Jan 2026','Card','S$450.00','Mastercard ****9111',ST.ok],['01 Jan 2025','Card','S$500.00','Mastercard ****9111',ST.ok]],
    documents:[['Tax Invoice','Payment','01 Jan 2026'],['Renewal Notice','Payment','01 Dec 2025'],['Welcome Letter','Statement','01 Jan 2025']],
    contact:CONTACT,others:OTHERS_DIRECT},
  p4: {title:'UniCar',policyNo:'UOI-MTR-40563',status:'In Force',
    plan:'Motor — Comprehensive &nbsp;·&nbsp; <b>20 Sep 2025 – 20 Sep 2026</b>',
    details:[['Product','UniCar'],['Policy Number','UOI-MTR-40563'],['Plan','Comprehensive'],['Vehicle','Toyota Corolla Altis 1.6'],['Vehicle No.','SLR 8821K'],['NCD','30%'],['Policy Effective Date','20 Sep 2025'],['Policy Expiry Date','20 Sep 2026'],['Payment Method','GIRO'],['Payment Terms','Annual'],['Premium Amount','$950.00'],['Promo Code','None'],['Add-On','Windscreen cover · 24h towing']],
    payments:[['20 Sep 2025','GIRO','S$950.00','GIRO ****2233',ST.ok]],
    documents:[['Certificate of Insurance','Statement','20 Sep 2025'],['Policy Schedule','Statement','20 Sep 2025'],['Welcome Letter','Statement','20 Sep 2025']],
    contact:CONTACT,others:OTHERS_DIRECT},
};
