interface SidebarProps {
  children: React.ReactNode
  items: {
    logo: string,
    label: string,
  }[]
}

const Sidebar = ({ children, items }: SidebarProps) => (
  <div>
    <aside>
      <ul>
        {items.map(({ label, logo }) => (
          <li key={label}>
            <img src={logo} alt={label} />
            {label}
          </li>
        ))}
      </ul>
    </aside>
    {children}
  </div>
);

export default Sidebar;
