import { Input, PublicationsCounter, SearchBarContainer } from "./styles";

export function SearchBar() {
  return (
    <SearchBarContainer>
      <PublicationsCounter>
        <strong>Publications</strong>
        <span>2 publications</span>
      </PublicationsCounter>
      <form>
        <Input placeholder="Search for content"/>
      </form>
    </SearchBarContainer>
  )
}