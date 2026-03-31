import { rawData } from './load-data-and-make-groups.js';

addMdToPage(`
  ## Om datasetet
  Det här datasetet utgår från ett [verkligt dataset](https://www.statsuncovered.com/courses/rs-930/ttests), om än med något oklart ursprung.
  
  Men vi har modifierat det - hittat på nya värden för en variabel - **general_health**, så att den ska bli mera normalfördelad inom olika grupper.

  Anledningen är att T-test bara är tillförlitliga på normalfördelad data (detta är dock mindre viktigt om vi har >30, helst >100 mätvärden, så kanske det var onödigt att modifiera) och syftet med detta exempel är att visa hur **Shapiro-Wilks-test** och **tvåsidiga T-test** fungerar!

  Det finns många fler variabler i datasetet än de enda två vi har tittat på - **smoking_status** och **general_health**.

  [Du kan ladda ner den modifierade versionen vi använder här](smokinghealth.csv).
`);

tableFromData({ data: rawData, fixedHeader: true });