import React, { FC, useMemo } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import styles from './Tabs.module.scss';
import cn from 'classnames';
import { CURRENCIES } from '../../constants/constants';

const Tabs: FC = (): JSX.Element => {
  const {id} = useParams();

  const generateTabs = useMemo(() => {
    return (CURRENCIES?.map((tab: string) =>
      <NavLink className={cn(styles.tab, {[styles.active]: id === `${tab}`})} to={`/${tab}`} key={`tab_${tab}`}>{tab}</NavLink>
    ))
  }, [id])

  return (
    <div className={styles.tabs}>
      {generateTabs}
    </div>
  );
};

export default Tabs;