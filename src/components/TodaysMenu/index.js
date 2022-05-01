import React, { useState } from 'react';
import {
  LunchContainer,
  LunchContent,
  LunchCategory,
  LunchPrice,
  LunchTitle,
  LunchDescription,
  LunchContentContainer,
  SectionTitle,
  SectionSubtitle,
  SectionTitleWrapper,
} from './styles';
import client from '../../contentful';

const TodaysMenu = () => {
  const [lunchItems, setLunchItems] = useState(null);

  React.useEffect(() => {
    client
      .getEntries({
        content_type: 'todaysMenu',
      })
      .then((entries) => {
        setLunchItems(entries.items);
        // console.log(entries.items);
      });
  }, []);

  return (
    <LunchContainer>
      <SectionTitleWrapper>
        <SectionTitle>Todays Lunch</SectionTitle>
        <SectionSubtitle>11:30 – 13:00</SectionSubtitle>
      </SectionTitleWrapper>
      <LunchContentContainer>
        {lunchItems &&
          lunchItems.map((lunchItem, i) => {
            return (
              <LunchContent key={i}>
                <LunchCategory>{lunchItem.fields.category}</LunchCategory>
                <LunchPrice>{lunchItem.fields.price}</LunchPrice>
                <LunchTitle>{lunchItem.fields.name}</LunchTitle>
                <LunchDescription>
                  {lunchItem.fields.ingredients}
                </LunchDescription>
              </LunchContent>
            );
          })}
      </LunchContentContainer>
    </LunchContainer>
  );
};

export default TodaysMenu;
