import { Post } from "./components/Post";
import { Profile } from "./components/Profile";
import { SearchBar } from "./components/SearchBar";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <Profile />
      <SearchBar />
      <Post />
    </HomeContainer>
  )
}