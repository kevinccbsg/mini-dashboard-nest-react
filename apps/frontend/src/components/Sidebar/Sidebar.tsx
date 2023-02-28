import { Aside, Container, Content, ListItem, ListIconImage } from './Sidebar.styled';

interface SidebarProps {
  children: React.ReactNode;
  items: {
    id: string;
    logo: string;
    label: string;
  }[];
}

const Sidebar = ({ children, items }: SidebarProps) => (
  <Container>
    <Aside>
      <ul>
        {items.map(({ id, label, logo }) => (
          <ListItem key={id} data-cy={`${id}-menu`}>
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
