import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface AddNewJobPostingData {
  jobPosting_insert: JobPosting_Key;
}

export interface AddNewJobPostingVariables {
  employerId: UUIDString;
  description: string;
  hoursPerWeek: number;
  payRate: number;
  status: string;
  title: string;
}

export interface Application_Key {
  id: UUIDString;
  __typename?: 'Application_Key';
}

export interface ApplyForJobData {
  application_insert: Application_Key;
}

export interface ApplyForJobVariables {
  jobPostingId: UUIDString;
  studentId: UUIDString;
  applicationDate: TimestampString;
  coverLetter?: string | null;
  resumeLink?: string | null;
  status: string;
}

export interface Department_Key {
  id: UUIDString;
  __typename?: 'Department_Key';
}

export interface GetJobPostingsByDepartmentData {
  jobPostings: ({
    id: UUIDString;
    title: string;
    description: string;
    hoursPerWeek: number;
    payRate: number;
    status: string;
  } & JobPosting_Key)[];
}

export interface GetJobPostingsByDepartmentVariables {
  departmentId: UUIDString;
}

export interface GetWorkStudyEligibilityForStudentData {
  workStudyEligibilities: ({
    id: UUIDString;
    eligibleAmount: number;
    endDate?: DateString | null;
    financialAidYear: number;
    remainingAmount: number;
    startDate?: DateString | null;
  } & WorkStudyEligibility_Key)[];
}

export interface JobPosting_Key {
  id: UUIDString;
  __typename?: 'JobPosting_Key';
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

export interface WorkStudyEligibility_Key {
  id: UUIDString;
  __typename?: 'WorkStudyEligibility_Key';
}

interface AddNewJobPostingRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: AddNewJobPostingVariables): MutationRef<AddNewJobPostingData, AddNewJobPostingVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: AddNewJobPostingVariables): MutationRef<AddNewJobPostingData, AddNewJobPostingVariables>;
  operationName: string;
}
export const addNewJobPostingRef: AddNewJobPostingRef;

export function addNewJobPosting(vars: AddNewJobPostingVariables): MutationPromise<AddNewJobPostingData, AddNewJobPostingVariables>;
export function addNewJobPosting(dc: DataConnect, vars: AddNewJobPostingVariables): MutationPromise<AddNewJobPostingData, AddNewJobPostingVariables>;

interface GetJobPostingsByDepartmentRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetJobPostingsByDepartmentVariables): QueryRef<GetJobPostingsByDepartmentData, GetJobPostingsByDepartmentVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetJobPostingsByDepartmentVariables): QueryRef<GetJobPostingsByDepartmentData, GetJobPostingsByDepartmentVariables>;
  operationName: string;
}
export const getJobPostingsByDepartmentRef: GetJobPostingsByDepartmentRef;

export function getJobPostingsByDepartment(vars: GetJobPostingsByDepartmentVariables): QueryPromise<GetJobPostingsByDepartmentData, GetJobPostingsByDepartmentVariables>;
export function getJobPostingsByDepartment(dc: DataConnect, vars: GetJobPostingsByDepartmentVariables): QueryPromise<GetJobPostingsByDepartmentData, GetJobPostingsByDepartmentVariables>;

interface ApplyForJobRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: ApplyForJobVariables): MutationRef<ApplyForJobData, ApplyForJobVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: ApplyForJobVariables): MutationRef<ApplyForJobData, ApplyForJobVariables>;
  operationName: string;
}
export const applyForJobRef: ApplyForJobRef;

export function applyForJob(vars: ApplyForJobVariables): MutationPromise<ApplyForJobData, ApplyForJobVariables>;
export function applyForJob(dc: DataConnect, vars: ApplyForJobVariables): MutationPromise<ApplyForJobData, ApplyForJobVariables>;

interface GetWorkStudyEligibilityForStudentRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetWorkStudyEligibilityForStudentData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetWorkStudyEligibilityForStudentData, undefined>;
  operationName: string;
}
export const getWorkStudyEligibilityForStudentRef: GetWorkStudyEligibilityForStudentRef;

export function getWorkStudyEligibilityForStudent(): QueryPromise<GetWorkStudyEligibilityForStudentData, undefined>;
export function getWorkStudyEligibilityForStudent(dc: DataConnect): QueryPromise<GetWorkStudyEligibilityForStudentData, undefined>;

