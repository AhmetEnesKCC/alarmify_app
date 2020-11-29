import BackgroundJob from 'react-native-background-job';

const backgroundJob = {
  jobKey: 'alarms',
  job: () => console.log('Running Background'),
};

BackgroundJob.register(backgroundJob);

export default backgroundJob;
