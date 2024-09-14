import { JobApplication } from '@/types/JobAplication';
import { useState } from 'react';

interface JobFormProps {
  onSubmit: (job: JobApplication) => void;
}

const commonStatuses = ['Applied', 'Waiting for Interview', 'Hired'];

const JobForm: React.FC<JobFormProps> = ({ onSubmit }) => {
  const [job, setJob] = useState<JobApplication>({
    id: '',
    jobTitle: '',
    company: '',
    contactPerson: '',
    expectedSalary: 0,
    dateApplied: new Date(),
    status: '',
    statusDetails: '',
  });

  const [isCustomStatus, setIsCustomStatus] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === 'custom') {
      setIsCustomStatus(true);
      setJob({ ...job, status: '' });
    } else {
      setIsCustomStatus(false);
      setJob({ ...job, status: e.target.value });
    }
  };

  const handleSubmit = () => {
    onSubmit(job);
  };

  return (
    <form>
      {/* Other form fields */}
      <div>
        <label htmlFor="status">Status</label>
        <select name="status" value={isCustomStatus ? 'custom' : job.status} onChange={handleStatusChange}>
          <option value="" disabled>Select a status</option>
          {commonStatuses.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
          <option value="custom">Custom Status</option>
        </select>
        {isCustomStatus && (
          <input
            type="text"
            name="status"
            value={job.status}
            onChange={handleChange}
            placeholder="Enter custom status"
            disabled={!isCustomStatus}
          />
        )}
      </div>
      <button type="button" onClick={handleSubmit}>Save Job</button>
    </form>
  );
};

export default JobForm;
