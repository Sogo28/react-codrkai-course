import { useUserInfos } from "../context/GlobalContext"
function Home() {
  const { userName } = useUserInfos();
  return (
    <div>Welcome {userName}</div>
  )
}

export default Home