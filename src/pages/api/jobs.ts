import type { NextApiRequest, NextApiResponse } from 'next';

import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';

type Job = {
  title: string;
  company: string;
  applicationDate: string;
  contactPerson?: string;
  expectedSalary?: number;
  status: string;
  notes?: string;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const job: Job = req.body;
    await addDoc(collection(db, 'jobs'), job);
    res.status(201).json(job);
  } else if (req.method === 'GET') {
    const querySnapshot = await getDocs(collection(db, 'jobs'));
    const jobs = querySnapshot.docs.map(doc => doc.data());
    res.status(200).json(jobs);
  }
};
