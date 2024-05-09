import client from '../db'

async function getUserDetails() {
  try {
    const user = await client.user.findFirst({});
	  return {
      username: user?.username,
      email: user?.username
    }
  }  catch(e) {
    console.log(e);
  }
}

export default async function Home() {
  const response = await getUserDetails();
  return (
    <div>
      {response?.email}
      <br/>
      {response?.username}
    </div>  
  );
}
