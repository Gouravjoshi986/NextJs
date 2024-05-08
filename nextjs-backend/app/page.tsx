import axios from 'axios'

async function getUserDetails() {
  const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
  return response.data;
}

export default async function Home() {
  const response = await getUserDetails();
  return (
    <div>
      {response.email}
      {response.name}
    </div>  
  );
}
