import { Aside, Container, Content, ListItem, ListIconImage } from './Sidebar.styled';

interface SidebarProps {
  children: React.ReactNode
  items: {
    logo: string,
    label: string,
  }[]
}

const Sidebar = ({ children, items }: SidebarProps) => (
  <Container>
    <Aside>
      <ul>
        {items.map(({ label, logo }) => (
          <ListItem key={label}>
            <ListIconImage src={logo} alt={label} />
            {label}
          </ListItem>
        ))}
      </ul>
    </Aside>
    <Content>
      {children}
    </Content>
  </Container>
);

export default Sidebar;
