export const server = "https://jobscape-backend1.onrender.com";

const apiList = {
  login: `${server}/auth/login`,
  signup: `${server}/auth/signup`,
  jobs: `${server}/api/jobs`,
  applications: `${server}/api/applications`,
  rating: `${server}/api/rating`,
  user: `${server}/api/user`,
  applicants: `${server}/api/applicants`,
};

export default apiList;
