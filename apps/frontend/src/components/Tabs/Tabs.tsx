import React, { useState } from 'react';
import { Container, TabMenu, TabContent, TabButton } from './Tabs.styled';

interface Tab {
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Container>
      <TabMenu>
        {tabs.map((tab, index) => (
          <TabButton
            key={tab.label}
            data-cy={`tab-${index}`}
            onClick={() => setActiveTab(index)}
            selected={index === activeTab}
          >
            {tab.label}
          </TabButton>
        ))}
      </TabMenu>
      <TabContent>{tabs[activeTab].content}</TabContent>
    </Container>
  );
};

export default Tabs;
