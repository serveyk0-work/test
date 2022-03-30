import React, { useMemo } from 'react';
import styles from './Home.module.scss';
import { useSelector } from 'react-redux';
import Tabs from '../../components/Tabs/Tabs';
import { RootState } from '../../redux/store';
import Input from '../../components/UI/Input/Input';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

interface IFormData {
  convert: number
}

const Home = () => {
  const {id} = useParams();
  const {register} = useForm<IFormData>();
  const data = useSelector((state: RootState) => state?.apiReducer);

  const value = useMemo(() => {
    const {currentValue, options} = data;
    if (currentValue && id) {
      return (parseFloat(currentValue) * options[id]).toFixed(2);
    }
    return 0;
  }, [data, id])

  return (
    <div className={styles.home}>
      <Tabs/>
      <Input name={'convert'} register={register} type={'number'} controlledValue={value} />
    </div>
  );
};

export default Home;