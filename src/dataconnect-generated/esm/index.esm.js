import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'example',
  service: 'uniwork-main',
  location: 'us-east4'
};

export const addNewJobPostingRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AddNewJobPosting', inputVars);
}
addNewJobPostingRef.operationName = 'AddNewJobPosting';

export function addNewJobPosting(dcOrVars, vars) {
  return executeMutation(addNewJobPostingRef(dcOrVars, vars));
}

export const getJobPostingsByDepartmentRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetJobPostingsByDepartment', inputVars);
}
getJobPostingsByDepartmentRef.operationName = 'GetJobPostingsByDepartment';

export function getJobPostingsByDepartment(dcOrVars, vars) {
  return executeQuery(getJobPostingsByDepartmentRef(dcOrVars, vars));
}

export const applyForJobRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'ApplyForJob', inputVars);
}
applyForJobRef.operationName = 'ApplyForJob';

export function applyForJob(dcOrVars, vars) {
  return executeMutation(applyForJobRef(dcOrVars, vars));
}

export const getWorkStudyEligibilityForStudentRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetWorkStudyEligibilityForStudent');
}
getWorkStudyEligibilityForStudentRef.operationName = 'GetWorkStudyEligibilityForStudent';

export function getWorkStudyEligibilityForStudent(dc) {
  return executeQuery(getWorkStudyEligibilityForStudentRef(dc));
}

