import { AddNewJobPostingData, AddNewJobPostingVariables, GetJobPostingsByDepartmentData, GetJobPostingsByDepartmentVariables, ApplyForJobData, ApplyForJobVariables, GetWorkStudyEligibilityForStudentData } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useAddNewJobPosting(options?: useDataConnectMutationOptions<AddNewJobPostingData, FirebaseError, AddNewJobPostingVariables>): UseDataConnectMutationResult<AddNewJobPostingData, AddNewJobPostingVariables>;
export function useAddNewJobPosting(dc: DataConnect, options?: useDataConnectMutationOptions<AddNewJobPostingData, FirebaseError, AddNewJobPostingVariables>): UseDataConnectMutationResult<AddNewJobPostingData, AddNewJobPostingVariables>;

export function useGetJobPostingsByDepartment(vars: GetJobPostingsByDepartmentVariables, options?: useDataConnectQueryOptions<GetJobPostingsByDepartmentData>): UseDataConnectQueryResult<GetJobPostingsByDepartmentData, GetJobPostingsByDepartmentVariables>;
export function useGetJobPostingsByDepartment(dc: DataConnect, vars: GetJobPostingsByDepartmentVariables, options?: useDataConnectQueryOptions<GetJobPostingsByDepartmentData>): UseDataConnectQueryResult<GetJobPostingsByDepartmentData, GetJobPostingsByDepartmentVariables>;

export function useApplyForJob(options?: useDataConnectMutationOptions<ApplyForJobData, FirebaseError, ApplyForJobVariables>): UseDataConnectMutationResult<ApplyForJobData, ApplyForJobVariables>;
export function useApplyForJob(dc: DataConnect, options?: useDataConnectMutationOptions<ApplyForJobData, FirebaseError, ApplyForJobVariables>): UseDataConnectMutationResult<ApplyForJobData, ApplyForJobVariables>;

export function useGetWorkStudyEligibilityForStudent(options?: useDataConnectQueryOptions<GetWorkStudyEligibilityForStudentData>): UseDataConnectQueryResult<GetWorkStudyEligibilityForStudentData, undefined>;
export function useGetWorkStudyEligibilityForStudent(dc: DataConnect, options?: useDataConnectQueryOptions<GetWorkStudyEligibilityForStudentData>): UseDataConnectQueryResult<GetWorkStudyEligibilityForStudentData, undefined>;
