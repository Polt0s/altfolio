import React from 'react';
import { ExchangesContainer } from '../../Containers';

import { Accordion } from '../../Shared';

const accordionItems = [
  { title: 'TEST-1', body: 'sadfasd asdfasdf asdfasdf asdfasdf asdf', status: false, id: 0 },
  { title: 'TEST-2', body: 'Скрытый блок туда-сюда!', status: false, id: 1 },
  { title: 'TEST-3', body: '123 sdf asdf 234234 ', status: false, id: 2 },
];

export const ExchangesPage: React.FC = () => {
  return (
    <>
      <ExchangesContainer />
    </>
  );
};
