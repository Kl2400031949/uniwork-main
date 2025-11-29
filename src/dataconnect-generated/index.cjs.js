const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'uniwork-main',
  location: 'us-east4'
};
exports.connectorConfig = connectorConfig;

const addNewJobPostingRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AddNewJobPosting', inputVars);
}
addNewJobPostingRef.operationName = 'AddNewJobPosting';
exports.addNewJobPostingRef = addNewJobPostingRef;

exports.addNewJobPosting = function addNewJobPosting(dcOrVars, vars) {
  return executeMutation(addNewJobPostingRef(dcOrVars, vars));
};

const getJobPostingsByDepartmentRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetJobPostingsByDepartment', inputVars);
}
getJobPostingsByDepartmentRef.operationName = 'GetJobPostingsByDepartment';
exports.getJobPostingsByDepartmentRef = getJobPostingsByDepartmentRef;

exports.getJobPostingsByDepartment = function getJobPostingsByDepartment(dcOrVars, vars) {
  return executeQuery(getJobPostingsByDepartmentRef(dcOrVars, vars));
};

const applyForJobRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'ApplyForJob', inputVars);
}
applyForJobRef.operationName = 'ApplyForJob';
exports.applyForJobRef = applyForJobRef;

exports.applyForJob = function applyForJob(dcOrVars, vars) {
  return executeMutation(applyForJobRef(dcOrVars, vars));
};

const getWorkStudyEligibilityForStudentRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetWorkStudyEligibilityForStudent');
}
getWorkStudyEligibilityForStudentRef.operationName = 'GetWorkStudyEligibilityForStudent';
exports.getWorkStudyEligibilityForStudentRef = getWorkStudyEligibilityForStudentRef;

exports.getWorkStudyEligibilityForStudent = function getWorkStudyEligibilityForStudent(dc) {
  return executeQuery(getWorkStudyEligibilityForStudentRef(dc));
};
