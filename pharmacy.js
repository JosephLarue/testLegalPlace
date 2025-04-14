export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  
updateBenefitValue() {
  const updateBenefit = (drug, benefitVariance) => {
    const newBenefit = drug.benefit + benefitVariance;
    if (newBenefit > 50) { console.log(`New Benefit would exceeds maximum limit of 50 for ${drug.name}`); }
    if (newBenefit < 0) { console.log(`New Benefit would be below minimum limit of 0 for ${drug.name}`); }
    const cappedBenefit = Math.min(50, newBenefit);
    drug.benefit = Math.max(0, cappedBenefit);
  };

  const processHerbalTea = (drug) => {
    if (drug.expiresIn <= 0) { updateBenefit(drug, 1); }
    updateBenefit(drug, 1);
    drug.expiresIn -= 1;
  };

  const processFervex = (drug) => {
    if (drug.expiresIn > 10) { updateBenefit(drug, 1); } 
    else if (drug.expiresIn > 5) { updateBenefit(drug, 2); } 
    else if (drug.expiresIn > 0) { updateBenefit(drug, 3); } 
    else { updateBenefit(drug, -drug.benefit); }
    drug.expiresIn -= 1;
  };

  const processMagicPill = () => {};

  const processOtherDrugs = (drug) => {
    if (drug.expiresIn <= 0) { updateBenefit(drug, -2); }
    else { updateBenefit(drug, -1); }
    drug.expiresIn -= 1;
  };
  
  const processDafalgan = (drug) => {
    if (drug.expiresIn <= 0) { updateBenefit(drug, -4); }
    else { updateBenefit(drug, -2); }
    drug.expiresIn -= 1;
  };

  for (const drug of this.drugs) {
    switch (drug.name) {
      case "Herbal Tea":
        processHerbalTea(drug);
        break;
      case "Fervex":
        processFervex(drug);
        break;
      case "Magic Pill":
        processMagicPill(drug);
        break;
      case "Dafalgan":
        processDafalgan(drug);
        break;
      default:
        processOtherDrugs(drug);
    }
  }
  return this.drugs;
}
}
