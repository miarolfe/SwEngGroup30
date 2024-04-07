const diseases = ["Disease name", "Diagnosis date", "Doctor name", "Notes"];

export type PropType = {
  titles: string[];
  values: string[];
};

export type ReturnType = {
  diseases: PropType[];
  medications: PropType[];
  procedures: PropType[];
  diagnoses: PropType[];
};

const initialiseResult = (): ReturnType => {
  const tmp: ReturnType = {
    diagnoses: [],
    diseases: [],
    procedures: [],
    medications: [],
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
  const topics = response.match(/(?<=\n).*(?=:)/gm);
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

  return result;
};

// const ParseResponse = ({response}: {response: string}) => {

// }
