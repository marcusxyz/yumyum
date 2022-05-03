import React, { useState } from 'react';
import {
  MenuContainer,
  MenuContent,
  MenuPrice,
  MenuTitle,
  MenuDescription,
  MenuContentContainer,
  SectionTitle,
  SectionTitleWrapper,
} from './styles';
import client from '../../contentful';

const Menu = () => {
  const [ramenItems, setRamenItems] = useState(null);

  React.useEffect(() => {
    client
      .getEntries({
        content_type: 'menu',
        order: 'sys.createdAt',
      })
      .then((entries) => {
        setRamenItems(entries.items);
      });
  }, []);

  const [baoItems, setBaoItems] = useState(null);

  React.useEffect(() => {
    client
      .getEntries({
        content_type: 'baoMenu',
        order: 'sys.createdAt',
      })
      .then((entries) => {
        setBaoItems(entries.items);
      });
  }, []);

  const [sideItems, setSideItems] = useState(null);

  React.useEffect(() => {
    client
      .getEntries({
        content_type: 'sideMenu',
        order: 'sys.createdAt',
      })
      .then((entries) => {
        setSideItems(entries.items);
      });
  }, []);

  return (
    <div>
      <MenuContainer color='light-tan'>
        <SectionTitleWrapper>
          <SectionTitle>
            {ramenItems && ramenItems[0].fields.category}
          </SectionTitle>
        </SectionTitleWrapper>
        <MenuContentContainer>
          {ramenItems &&
            ramenItems.map((ramenItem, i) => {
              return (
                <MenuContent key={i}>
                  <MenuTitle>{ramenItem.fields.name}</MenuTitle>
                  <MenuPrice>{ramenItem.fields.price}</MenuPrice>
                  <MenuDescription>
                    {ramenItem.fields.ingredients}
                  </MenuDescription>
                </MenuContent>
              );
            })}
        </MenuContentContainer>
      </MenuContainer>

      <MenuContainer color='tan'>
        <SectionTitleWrapper>
          <SectionTitle>{baoItems && baoItems[0].fields.category}</SectionTitle>
        </SectionTitleWrapper>
        <MenuContentContainer>
          {baoItems &&
            baoItems.map((baoItem, i) => {
              return (
                <MenuContent key={i}>
                  <MenuTitle>{baoItem.fields.name}</MenuTitle>
                  <MenuPrice>{baoItem.fields.price}</MenuPrice>
                  <MenuDescription>
                    {baoItem.fields.ingredients}
                  </MenuDescription>
                </MenuContent>
              );
            })}
        </MenuContentContainer>
      </MenuContainer>

      <MenuContainer color='pink'>
        <SectionTitleWrapper>
          <SectionTitle>
            {sideItems && sideItems[0].fields.category}
          </SectionTitle>
        </SectionTitleWrapper>
        <MenuContentContainer>
          {sideItems &&
            sideItems.map((sideItem, i) => {
              return (
                <MenuContent key={i}>
                  <MenuTitle>{sideItem.fields.name}</MenuTitle>
                  <MenuPrice>{sideItem.fields.price}</MenuPrice>
                  <MenuDescription>
                    {sideItem.fields.ingredients}
                  </MenuDescription>
                </MenuContent>
              );
            })}
        </MenuContentContainer>
      </MenuContainer>
    </div>
  );
};

export default Menu;
