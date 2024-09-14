import { JobApplication } from "@/types/JobAplication";


interface JobListProps {
  jobs: JobApplication[];
}

const JobList: React.FC<JobListProps> = ({ jobs }) => {
  return (
    <div>
      {jobs.map((job) => (
        <div key={job.id}>
          <h2>{job.jobTitle}</h2>
          <p>{job.company}</p>
          <p>{job.contactPerson}</p>
          <p>{job.expectedSalary}</p>
          <p>{job.dateApplied.toDateString()}</p>
          <p>{job.status}</p>
          <p>{job.statusDetails}</p>
        </div>
      ))}
    </div>
  );
};

export default JobList;
