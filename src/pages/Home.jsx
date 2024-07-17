import { useUserInfos } from "../context/GlobalContext"
function Home() {
  const userInfos = useUserInfos();
  return (
    <div>Welcome {userInfos.name}</div>
  )
}

export default Home