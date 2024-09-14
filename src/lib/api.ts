import { JobApplication } from '@/types/JobAplication';
import { db } from './firebase';
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';

const jobsCollection = collection(db, 'jobs');

export const addJob = async (job: JobApplication) => {
  await addDoc(jobsCollection, job);
};

export const getJobs = async (): Promise<JobApplication[]> => {
  const snapshot = await getDocs(jobsCollection);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as JobApplication));
};

export const updateJob = async (id: string, job: Partial<JobApplication>) => {
  const jobDoc = doc(db, 'jobs', id);
  await updateDoc(jobDoc, job);
};

export const deleteJob = async (id: string) => {
  const jobDoc = doc(db, 'jobs', id);
  await deleteDoc(jobDoc);
};
