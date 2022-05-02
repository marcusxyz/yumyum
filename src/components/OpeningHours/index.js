import React, { useState } from 'react';
import {
  HoursContainer,
  HoursWrapper,
  SectionTitle,
  HoursContent,
  HoursText,
  HoursTitle,
} from './styles';
import client from '../../contentful';

const OpeningHours = () => {
  const [hours, setHours] = useState(null);

  React.useEffect(() => {
    client
      .getEntries({
        content_type: 'openingHours',
        order: 'sys.createdAt',
      })
      .then((entries) => {
        setHours(entries.items);
      });
  }, []);

  return (
    <HoursContainer>
      <HoursWrapper>
        <SectionTitle>Opening hours</SectionTitle>
        {hours &&
          hours.map((hour, i) => {
            return (
              <HoursContent key={i}>
                <HoursTitle>{hour.fields.title}</HoursTitle>
                <HoursText>{hour.fields.hours}</HoursText>
              </HoursContent>
            );
          })}
      </HoursWrapper>
    </HoursContainer>
  );
};

export default OpeningHours;
