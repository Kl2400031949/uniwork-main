# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `React README`, you can find it at [`dataconnect-generated/react/README.md`](./react/README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*GetJobPostingsByDepartment*](#getjobpostingsbydepartment)
  - [*GetWorkStudyEligibilityForStudent*](#getworkstudyeligibilityforstudent)
- [**Mutations**](#mutations)
  - [*AddNewJobPosting*](#addnewjobposting)
  - [*ApplyForJob*](#applyforjob)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## GetJobPostingsByDepartment
You can execute the `GetJobPostingsByDepartment` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getJobPostingsByDepartment(vars: GetJobPostingsByDepartmentVariables): QueryPromise<GetJobPostingsByDepartmentData, GetJobPostingsByDepartmentVariables>;

interface GetJobPostingsByDepartmentRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetJobPostingsByDepartmentVariables): QueryRef<GetJobPostingsByDepartmentData, GetJobPostingsByDepartmentVariables>;
}
export const getJobPostingsByDepartmentRef: GetJobPostingsByDepartmentRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getJobPostingsByDepartment(dc: DataConnect, vars: GetJobPostingsByDepartmentVariables): QueryPromise<GetJobPostingsByDepartmentData, GetJobPostingsByDepartmentVariables>;

interface GetJobPostingsByDepartmentRef {
  ...
  (dc: DataConnect, vars: GetJobPostingsByDepartmentVariables): QueryRef<GetJobPostingsByDepartmentData, GetJobPostingsByDepartmentVariables>;
}
export const getJobPostingsByDepartmentRef: GetJobPostingsByDepartmentRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getJobPostingsByDepartmentRef:
```typescript
const name = getJobPostingsByDepartmentRef.operationName;
console.log(name);
```

### Variables
The `GetJobPostingsByDepartment` query requires an argument of type `GetJobPostingsByDepartmentVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetJobPostingsByDepartmentVariables {
  departmentId: UUIDString;
}
```
### Return Type
Recall that executing the `GetJobPostingsByDepartment` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetJobPostingsByDepartmentData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `GetJobPostingsByDepartment`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getJobPostingsByDepartment, GetJobPostingsByDepartmentVariables } from '@dataconnect/generated';

// The `GetJobPostingsByDepartment` query requires an argument of type `GetJobPostingsByDepartmentVariables`:
const getJobPostingsByDepartmentVars: GetJobPostingsByDepartmentVariables = {
  departmentId: ..., 
};

// Call the `getJobPostingsByDepartment()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getJobPostingsByDepartment(getJobPostingsByDepartmentVars);
// Variables can be defined inline as well.
const { data } = await getJobPostingsByDepartment({ departmentId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getJobPostingsByDepartment(dataConnect, getJobPostingsByDepartmentVars);

console.log(data.jobPostings);

// Or, you can use the `Promise` API.
getJobPostingsByDepartment(getJobPostingsByDepartmentVars).then((response) => {
  const data = response.data;
  console.log(data.jobPostings);
});
```

### Using `GetJobPostingsByDepartment`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getJobPostingsByDepartmentRef, GetJobPostingsByDepartmentVariables } from '@dataconnect/generated';

// The `GetJobPostingsByDepartment` query requires an argument of type `GetJobPostingsByDepartmentVariables`:
const getJobPostingsByDepartmentVars: GetJobPostingsByDepartmentVariables = {
  departmentId: ..., 
};

// Call the `getJobPostingsByDepartmentRef()` function to get a reference to the query.
const ref = getJobPostingsByDepartmentRef(getJobPostingsByDepartmentVars);
// Variables can be defined inline as well.
const ref = getJobPostingsByDepartmentRef({ departmentId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getJobPostingsByDepartmentRef(dataConnect, getJobPostingsByDepartmentVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.jobPostings);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.jobPostings);
});
```

## GetWorkStudyEligibilityForStudent
You can execute the `GetWorkStudyEligibilityForStudent` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getWorkStudyEligibilityForStudent(): QueryPromise<GetWorkStudyEligibilityForStudentData, undefined>;

interface GetWorkStudyEligibilityForStudentRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetWorkStudyEligibilityForStudentData, undefined>;
}
export const getWorkStudyEligibilityForStudentRef: GetWorkStudyEligibilityForStudentRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getWorkStudyEligibilityForStudent(dc: DataConnect): QueryPromise<GetWorkStudyEligibilityForStudentData, undefined>;

interface GetWorkStudyEligibilityForStudentRef {
  ...
  (dc: DataConnect): QueryRef<GetWorkStudyEligibilityForStudentData, undefined>;
}
export const getWorkStudyEligibilityForStudentRef: GetWorkStudyEligibilityForStudentRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getWorkStudyEligibilityForStudentRef:
```typescript
const name = getWorkStudyEligibilityForStudentRef.operationName;
console.log(name);
```

### Variables
The `GetWorkStudyEligibilityForStudent` query has no variables.
### Return Type
Recall that executing the `GetWorkStudyEligibilityForStudent` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetWorkStudyEligibilityForStudentData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `GetWorkStudyEligibilityForStudent`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getWorkStudyEligibilityForStudent } from '@dataconnect/generated';


// Call the `getWorkStudyEligibilityForStudent()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getWorkStudyEligibilityForStudent();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getWorkStudyEligibilityForStudent(dataConnect);

console.log(data.workStudyEligibilities);

// Or, you can use the `Promise` API.
getWorkStudyEligibilityForStudent().then((response) => {
  const data = response.data;
  console.log(data.workStudyEligibilities);
});
```

### Using `GetWorkStudyEligibilityForStudent`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getWorkStudyEligibilityForStudentRef } from '@dataconnect/generated';


// Call the `getWorkStudyEligibilityForStudentRef()` function to get a reference to the query.
const ref = getWorkStudyEligibilityForStudentRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getWorkStudyEligibilityForStudentRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.workStudyEligibilities);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.workStudyEligibilities);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## AddNewJobPosting
You can execute the `AddNewJobPosting` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
addNewJobPosting(vars: AddNewJobPostingVariables): MutationPromise<AddNewJobPostingData, AddNewJobPostingVariables>;

interface AddNewJobPostingRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: AddNewJobPostingVariables): MutationRef<AddNewJobPostingData, AddNewJobPostingVariables>;
}
export const addNewJobPostingRef: AddNewJobPostingRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
addNewJobPosting(dc: DataConnect, vars: AddNewJobPostingVariables): MutationPromise<AddNewJobPostingData, AddNewJobPostingVariables>;

interface AddNewJobPostingRef {
  ...
  (dc: DataConnect, vars: AddNewJobPostingVariables): MutationRef<AddNewJobPostingData, AddNewJobPostingVariables>;
}
export const addNewJobPostingRef: AddNewJobPostingRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the addNewJobPostingRef:
```typescript
const name = addNewJobPostingRef.operationName;
console.log(name);
```

### Variables
The `AddNewJobPosting` mutation requires an argument of type `AddNewJobPostingVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface AddNewJobPostingVariables {
  employerId: UUIDString;
  description: string;
  hoursPerWeek: number;
  payRate: number;
  status: string;
  title: string;
}
```
### Return Type
Recall that executing the `AddNewJobPosting` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `AddNewJobPostingData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface AddNewJobPostingData {
  jobPosting_insert: JobPosting_Key;
}
```
### Using `AddNewJobPosting`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, addNewJobPosting, AddNewJobPostingVariables } from '@dataconnect/generated';

// The `AddNewJobPosting` mutation requires an argument of type `AddNewJobPostingVariables`:
const addNewJobPostingVars: AddNewJobPostingVariables = {
  employerId: ..., 
  description: ..., 
  hoursPerWeek: ..., 
  payRate: ..., 
  status: ..., 
  title: ..., 
};

// Call the `addNewJobPosting()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await addNewJobPosting(addNewJobPostingVars);
// Variables can be defined inline as well.
const { data } = await addNewJobPosting({ employerId: ..., description: ..., hoursPerWeek: ..., payRate: ..., status: ..., title: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await addNewJobPosting(dataConnect, addNewJobPostingVars);

console.log(data.jobPosting_insert);

// Or, you can use the `Promise` API.
addNewJobPosting(addNewJobPostingVars).then((response) => {
  const data = response.data;
  console.log(data.jobPosting_insert);
});
```

### Using `AddNewJobPosting`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, addNewJobPostingRef, AddNewJobPostingVariables } from '@dataconnect/generated';

// The `AddNewJobPosting` mutation requires an argument of type `AddNewJobPostingVariables`:
const addNewJobPostingVars: AddNewJobPostingVariables = {
  employerId: ..., 
  description: ..., 
  hoursPerWeek: ..., 
  payRate: ..., 
  status: ..., 
  title: ..., 
};

// Call the `addNewJobPostingRef()` function to get a reference to the mutation.
const ref = addNewJobPostingRef(addNewJobPostingVars);
// Variables can be defined inline as well.
const ref = addNewJobPostingRef({ employerId: ..., description: ..., hoursPerWeek: ..., payRate: ..., status: ..., title: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = addNewJobPostingRef(dataConnect, addNewJobPostingVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.jobPosting_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.jobPosting_insert);
});
```

## ApplyForJob
You can execute the `ApplyForJob` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
applyForJob(vars: ApplyForJobVariables): MutationPromise<ApplyForJobData, ApplyForJobVariables>;

interface ApplyForJobRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: ApplyForJobVariables): MutationRef<ApplyForJobData, ApplyForJobVariables>;
}
export const applyForJobRef: ApplyForJobRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
applyForJob(dc: DataConnect, vars: ApplyForJobVariables): MutationPromise<ApplyForJobData, ApplyForJobVariables>;

interface ApplyForJobRef {
  ...
  (dc: DataConnect, vars: ApplyForJobVariables): MutationRef<ApplyForJobData, ApplyForJobVariables>;
}
export const applyForJobRef: ApplyForJobRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the applyForJobRef:
```typescript
const name = applyForJobRef.operationName;
console.log(name);
```

### Variables
The `ApplyForJob` mutation requires an argument of type `ApplyForJobVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface ApplyForJobVariables {
  jobPostingId: UUIDString;
  studentId: UUIDString;
  applicationDate: TimestampString;
  coverLetter?: string | null;
  resumeLink?: string | null;
  status: string;
}
```
### Return Type
Recall that executing the `ApplyForJob` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ApplyForJobData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ApplyForJobData {
  application_insert: Application_Key;
}
```
### Using `ApplyForJob`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, applyForJob, ApplyForJobVariables } from '@dataconnect/generated';

// The `ApplyForJob` mutation requires an argument of type `ApplyForJobVariables`:
const applyForJobVars: ApplyForJobVariables = {
  jobPostingId: ..., 
  studentId: ..., 
  applicationDate: ..., 
  coverLetter: ..., // optional
  resumeLink: ..., // optional
  status: ..., 
};

// Call the `applyForJob()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await applyForJob(applyForJobVars);
// Variables can be defined inline as well.
const { data } = await applyForJob({ jobPostingId: ..., studentId: ..., applicationDate: ..., coverLetter: ..., resumeLink: ..., status: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await applyForJob(dataConnect, applyForJobVars);

console.log(data.application_insert);

// Or, you can use the `Promise` API.
applyForJob(applyForJobVars).then((response) => {
  const data = response.data;
  console.log(data.application_insert);
});
```

### Using `ApplyForJob`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, applyForJobRef, ApplyForJobVariables } from '@dataconnect/generated';

// The `ApplyForJob` mutation requires an argument of type `ApplyForJobVariables`:
const applyForJobVars: ApplyForJobVariables = {
  jobPostingId: ..., 
  studentId: ..., 
  applicationDate: ..., 
  coverLetter: ..., // optional
  resumeLink: ..., // optional
  status: ..., 
};

// Call the `applyForJobRef()` function to get a reference to the mutation.
const ref = applyForJobRef(applyForJobVars);
// Variables can be defined inline as well.
const ref = applyForJobRef({ jobPostingId: ..., studentId: ..., applicationDate: ..., coverLetter: ..., resumeLink: ..., status: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = applyForJobRef(dataConnect, applyForJobVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.application_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.application_insert);
});
```

