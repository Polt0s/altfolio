import React from 'react';
import styles from './Accordion.module.css';

import cn from 'classnames';

import type { Dispatch, ReactNode, SetStateAction } from 'react';

interface IAccordion {
  items: IItems[];
}

interface IAccordionItem {
  panels: IItems;
  setPanels: Dispatch<SetStateAction<IItems[]>>;
}

const AccordionItem = ({ panels, setPanels }: IAccordionItem) => {
  const handleClick = (id: number) => {
    setPanels((prev: IItems[]) =>
      prev.map((item: IItems) => {
        if (item.id === id) {
          return { ...item, status: !item.status };
        }
        return item;
      })
    );
  };

  return (
    <div style={{ marginTop: 20 }}>
      <div className={styles.Accordion} onClick={() => handleClick(panels.id)}>
        <p>{panels.title}</p>

        <span className={cn(styles.Arrow, panels.status ? styles.Arrow__down : styles.Arrow__up)}></span>
      </div>

      <div className={panels.status ? styles.ShowBlock : styles.ShowBlock__close}>
        {panels.body}
      </div>
    </div>
  );
};

export const Accordion: React.FC<IAccordion> = ({ items }) => {
  const [panels, setPanels] = React.useState(items);

  return (
    <>
      {panels.map((panel, index) => (
        <AccordionItem panels={panel} setPanels={setPanels} key={index} />
      ))}
    </>
  );
};

interface IItems {
  title: string;
  body: ReactNode;
  status: boolean;
  id: number;
}
