export type PropType = {
  titles: string[];
  values: string[];
};

export type ReturnType = {
  diseases: PropType[];
  medications: PropType[];
  procedures: PropType[];
  diagnoses: PropType[];
  policies: PropType[];
  transactions: PropType[];
  claims: PropType[];
};

const initialiseResult = (): ReturnType => {
  const tmp: ReturnType = {
    diagnoses: [],
    diseases: [],
    procedures: [],
    medications: [],
    policies: [],
    transactions: [],
    claims: [],
  };

  return tmp;
};

const newEmptyProp = (): PropType => {
  return {
    titles: [],
    values: [],
  };
};

export const parseResponseHelper = (response: string) => {
  const topics = response.match(/(?<=(\n)*).*(?=:)/gm);
  const result = initialiseResult();
  if (topics?.includes("Diseases")) {
    let regex = /-Disease .-/gm;
    let resArr = response.match(regex);

    if (!!resArr && resArr.length > 0) {
      resArr.forEach(() => {
        result.diseases.push(newEmptyProp());
      });
    }

    // Disease Name
    regex = /(?<=Disease name: ).*(?=\n)/gm;
    resArr = response.match(regex);
    resArr?.map((item, i) => {
      result.diseases[i].titles.push("Disease Name");
      result.diseases[i].values.push(item);
    });

    // Diagnosis Date
    regex = /(?<=Disease name: .*\n    Diagnosis date: ).*(?=\n)/gm;
    resArr = response.match(regex);
    resArr?.map((item, i) => {
      result.diseases[i].titles.push("Diagnosis Date");
      result.diseases[i].values.push(item);
    });

    // Doctor Name
    regex =
      /(?<=Disease name: .*\n    Diagnosis date: .*\n    Doctor name: ).*(?=\n)/gm;
    resArr = response.match(regex);
    resArr?.map((item, i) => {
      result.diseases[i].titles.push("Doctor Name");
      result.diseases[i].values.push(item);
    });

    // Notes
    regex =
      /(?<=Disease name: .*\n    Diagnosis date: .*\n    Doctor name: .*\n    Notes: ).*(?=\n)/gm;
    resArr = response.match(regex);
    resArr?.map((item, i) => {
      result.diseases[i].titles.push("Notes");
      result.diseases[i].values.push(item);
    });
  }

  if (topics?.includes("Medications")) {
    let regex = /-Medication .-/gm;
    let resArr = response.match(regex);

    if (!!resArr && resArr.length > 0) {
      resArr.forEach(() => {
        result.medications.push(newEmptyProp());
      });
    }

    // Medication Name
    regex = /(?<=Medication name: ).*(?=\n)/gm;
    resArr = response.match(regex);
    resArr?.map((item, i) => {
      result.medications[i].titles.push("Medication Name");
      result.medications[i].values.push(item);
    });

    // Dosage
    regex = /(?<=Dosage: ).*(?=\n)/gm;
    resArr = response.match(regex);
    resArr?.map((item, i) => {
      result.medications[i].titles.push("Dosage");
      result.medications[i].values.push(item);
    });

    // Frequency
    regex = /(?<=Frequency: ).*(?=\n)/gm;
    resArr = response.match(regex);
    resArr?.map((item, i) => {
      result.medications[i].titles.push("Frequency");
      result.medications[i].values.push(item);
    });

    // Start Date
    regex = /(?<=Start date: ).*(?=\n)/gm;
    resArr = response.match(regex);
    resArr?.map((item, i) => {
      result.medications[i].titles.push("Start Date");
      result.medications[i].values.push(item);
    });

    // Doctor Name
    regex = /(?<=End date: ).*(?=\n)/gm;
    resArr = response.match(regex);
    resArr?.map((item, i) => {
      result.medications[i].titles.push("End Date");
      result.medications[i].values.push(item);
    });

    // End Date
    regex = /(?<=Prescribing doctor: ).*(?=\n)/gm;
    resArr = response.match(regex);
    resArr?.map((item, i) => {
      result.medications[i].titles.push("Prescribing Doctor");
      result.medications[i].values.push(item);
    });

    // Notes
    regex = /(?<=Prescribing doctor: .*\n    Notes: ).*(?=\n)/gm;
    resArr = response.match(regex);
    resArr?.map((item, i) => {
      result.medications[i].titles.push("Notes");
      result.medications[i].values.push(item);
    });
  }

  if (topics?.includes("Diagnoses")) {
    let regex = /-Diagnosis .-/gm;
    let resArr = response.match(regex);

    if (!!resArr && resArr.length > 0) {
      resArr.forEach(() => {
        result.diagnoses.push(newEmptyProp());
      });
    }

    // Diagnosis Name
    regex = /(?<=Diagnosis name: ).*(?=\n)/gm;
    resArr = response.match(regex);
    resArr?.map((item, i) => {
      result.diagnoses[i].titles.push("Diagnosis Name");
      result.diagnoses[i].values.push(item);
    });

    // Diagnosis Date
    regex = /(?<=-Diagnosis .-\n    Diagnosis date: ).*(?=\n)/gm;
    resArr = response.match(regex);
    resArr?.map((item, i) => {
      result.diagnoses[i].titles.push("Diagnosis Date");
      result.diagnoses[i].values.push(item);
    });

    // Doctor Name
    regex = /(?<=Diagnosis name: .*\n    Doctor name: ).*(?=\n)/gm;
    resArr = response.match(regex);
    resArr?.map((item, i) => {
      result.diagnoses[i].titles.push("Doctor Name");
      result.diagnoses[i].values.push(item);
    });

    // Notes
    regex =
      /(?<=Diagnosis name: .*\n    Doctor name: .*\n    Notes: ).*(?=\n)/gm;
    resArr = response.match(regex);
    resArr?.map((item, i) => {
      result.diagnoses[i].titles.push("Notes");
      result.diagnoses[i].values.push(item);
    });
  }

  if (topics?.includes("Procedures")) {
    let regex = /-Procedure .-/gm;
    let resArr = response.match(regex);

    if (!!resArr && resArr.length > 0) {
      resArr.forEach(() => {
        result.procedures.push(newEmptyProp());
      });
    }

    // Procedure Name
    regex = /(?<=Procedure name: ).*(?=\n)/gm;
    resArr = response.match(regex);
    resArr?.map((item, i) => {
      result.procedures[i].titles.push("Procdure Name");
      result.procedures[i].values.push(item);
    });

    // Procedure Date
    regex = /(?<=Procedure date: ).*(?=\n)/gm;
    resArr = response.match(regex);
    resArr?.map((item, i) => {
      result.procedures[i].titles.push("Procedure Date");
      result.procedures[i].values.push(item);
    });

    // Doctor Name
    regex = /(?<=Procedure date: .*\n    Doctor name: ).*(?=\n)/gm;
    resArr = response.match(regex);
    resArr?.map((item, i) => {
      result.procedures[i].titles.push("Doctor Name");
      result.procedures[i].values.push(item);
    });

    // Notes
    regex =
      /(?<=Procedure date: .*\n    Doctor name: .*\n    Notes: ).*(?=\n)/gm;
    resArr = response.match(regex);
    resArr?.map((item, i) => {
      result.procedures[i].titles.push("Notes");
      result.procedures[i].values.push(item);
    });
  }

  if (topics?.includes("Past Policies")) {
    let regex = /-Policy .-/gm;
    let resArr = response.match(regex);

    if (!!resArr && resArr.length > 0) {
      resArr.forEach(() => {
        result.policies.push(newEmptyProp());
      });
    }

    // Policy Type
    regex = /(?<=Policy type: ).*(?=\n)/gm;
    resArr = response.match(regex);
    resArr?.map((item, i) => {
      result.policies[i].titles.push("Policy Type");
      result.policies[i].values.push(item);
    });

    // Coverage Amount
    regex = /(?<=Coverage amount: ).*(?=\n)/gm;
    resArr = response.match(regex);
    resArr?.map((item, i) => {
      result.policies[i].titles.push("Coverage Amount");
      result.policies[i].values.push(item);
    });

    // Doctor Name
    regex = /(?<=Premium amount: ).*(?=\n)/gm;
    resArr = response.match(regex);
    resArr?.map((item, i) => {
      result.policies[i].titles.push("Premium Amount");
      result.policies[i].values.push(item);
    });

    // Notes
    regex = /(?<=Premium amount: .*\n    Start date: ).*(?=\n)/gm;
    resArr = response.match(regex);
    resArr?.map((item, i) => {
      result.policies[i].titles.push("Start Date");
      result.policies[i].values.push(item);
    });

    // Notes
    regex =
      /(?<=Premium amount: .*\n    Start date: .*\n    End date: ).*(?=\n)/gm;
    resArr = response.match(regex);
    resArr?.map((item, i) => {
      result.policies[i].titles.push("End Date");
      result.policies[i].values.push(item);
    });
  }

  if (topics?.includes("Transaction History")) {
    let regex = /-Transaction .-/gm;
    let resArr = response.match(regex);

    if (!!resArr && resArr.length > 0) {
      resArr.forEach(() => {
        result.transactions.push(newEmptyProp());
      });
    }

    // Transaction Date
    regex = /(?<=Transaction date: ).*(?=\n)/gm;
    resArr = response.match(regex);
    resArr?.map((item, i) => {
      result.transactions[i].titles.push("Transaction Date");
      result.transactions[i].values.push(item);
    });

    // Transaction Type
    regex = /(?<=Transaction type: ).*(?=\n)/gm;
    resArr = response.match(regex);
    resArr?.map((item, i) => {
      result.transactions[i].titles.push("Transaction Type");
      result.transactions[i].values.push(item);
    });

    // Amount
    regex = /(?<=Transaction type: .*\n    Amount: ).*(?=\n)/gm;
    resArr = response.match(regex);
    resArr?.map((item, i) => {
      result.transactions[i].titles.push("Amount");
      result.transactions[i].values.push(item);
    });

    // Method
    regex = /(?<=Method: ).*(?=\n)/gm;
    resArr = response.match(regex);
    resArr?.map((item, i) => {
      result.transactions[i].titles.push("Method");
      result.transactions[i].values.push(item);
    });

    // Invoice Number
    regex = /(?<=Invoice number: ).*(?=\n)/gm;
    resArr = response.match(regex);
    resArr?.map((item, i) => {
      result.transactions[i].titles.push("Invoice Number");
      result.transactions[i].values.push(item);
    });
  }

  if (topics?.includes("Claims History")) {
    let regex = /-Claim .-/gm;
    let resArr = response.match(regex);

    if (!!resArr && resArr.length > 0) {
      resArr.forEach(() => {
        result.claims.push(newEmptyProp());
      });
    }

    // Claim Date
    regex = /(?<=Claim date: ).*(?=\n)/gm;
    resArr = response.match(regex);
    resArr?.map((item, i) => {
      result.claims[i].titles.push("Claim Date");
      result.claims[i].values.push(item);
    });

    // Claim Type
    regex = /(?<=Claim type: ).*(?=\n)/gm;
    resArr = response.match(regex);
    resArr?.map((item, i) => {
      result.claims[i].titles.push("Claim Type");
      result.claims[i].values.push(item);
    });

    // Claim Status
    regex = /(?<=Claim status: ).*(?=\n)/gm;
    resArr = response.match(regex);
    resArr?.map((item, i) => {
      result.claims[i].titles.push("Claim status");
      result.claims[i].values.push(item);
    });

    // Amount
    regex = /(?<=Claim status: .*\n    Amount: ).*(?=\n)/gm;
    resArr = response.match(regex);
    resArr?.map((item, i) => {
      result.claims[i].titles.push("Amount");
      result.claims[i].values.push(item);
    });
  }

  return result;
};

// const ParseResponse = ({response}: {response: string}) => {

// }
