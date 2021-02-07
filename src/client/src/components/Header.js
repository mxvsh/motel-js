import { Image, TopNav, Button } from "bumbag";

export default (props) => {
  return (
    <TopNav style={{ margin: 2 }}>
      <TopNav.Section>
        <TopNav.Item fontWeight="semibold">
          <Image src="/favicon.ico" height="44px" />
        </TopNav.Item>
        <TopNav.Item href="/dashboard">Dashboard</TopNav.Item>
        <TopNav.Item href="/process">Apps</TopNav.Item>
        <TopNav.Item href="/settings">Settings</TopNav.Item>
      </TopNav.Section>
      <TopNav.Section>
        <TopNav.Item>
          <Button variant="ghost" palette="primary">
            Support
          </Button>
        </TopNav.Item>
      </TopNav.Section>
    </TopNav>
  );
};
