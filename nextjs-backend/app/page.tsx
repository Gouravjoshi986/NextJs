import axios from 'axios'

async function getUserDetails() {
  try {
    const response = await axios.get("http://localhost:3000/api/user")
	  return response.data;
  }  catch(e) {
    console.log(e);
  }
}

export default async function Home() {
  const response = await getUserDetails();
  return (
    <div>
      {response.email}
      <br/>
      {response.username}
    </div>  
  );
}
