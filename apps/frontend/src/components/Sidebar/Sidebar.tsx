import { Aside, Container, Content } from './Sidebar.styles';

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
          <li key={label}>
            <img src={logo} alt={label} />
            {label}
          </li>
        ))}
      </ul>
    </Aside>
    <Content>
      {children}
    </Content>
  </Container>
);

export default Sidebar;
