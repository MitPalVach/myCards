import React from 'react';
import {useNavigate} from 'react-router-dom';
import s from './Page404.module.css';
import {Button} from "antd";


export const Page404 = () => {
  let navigate = useNavigate();

  return (
    <div className={s.wrapper}>
      <h2>404: Page not found <i>😕</i></h2>
      <Button
        onClick={() => navigate(-1)}
        shape={'round'}
        size={"large"}
        type={'primary'}
      >Back
      </Button>
    </div>
  );
};


