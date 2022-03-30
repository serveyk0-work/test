import React, { FC, useEffect } from 'react';
import styles from './DefaultLayout.module.scss';
import Input from '../../components/UI/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrency, setCurrentValue } from '../../redux/actions/apiActions';
import { useForm } from 'react-hook-form';
import { RootState } from '../../redux/store';
import { IApi } from '../../types/ISymbols';
import { CURRENCIES } from '../../constants/constants';
import Loader from '../../components/UI/Loader/Loader';
import CustomError from '../../components/UI/CustomError/CustomError';

interface Props {
  children: JSX.Element
}

interface IFormData {
  uahValue: number
}

const DefaultLayout: FC<Props> = ({children}): JSX.Element => {
  const dispatch = useDispatch();
  const {register, handleSubmit} = useForm<IFormData>();
  const data: IApi = useSelector((state: RootState) => state?.apiReducer);

  useEffect(() => {
    dispatch(setCurrency(CURRENCIES));
  }, [dispatch])

  const setCurrencyValue = (val: string | number): void => {
    dispatch(setCurrentValue(val));
  }

  const setData = (data: IFormData): void => {
    dispatch(setCurrentValue(data?.uahValue));
  }

  return (
    data?.load ? <Loader/> :
      <div className={styles.layout}>
        <form className={styles.inputWrap} onSubmit={handleSubmit(setData)}>
          <span>UAH</span>
          <Input name={'uahValue'} register={register} setValue={setCurrencyValue} type={'number'}/>
          <button>convert</button>
        </form>
        {children}
        {data?.error ? <CustomError error={data?.error}/> : null}
      </div>
  );
};

export default DefaultLayout;