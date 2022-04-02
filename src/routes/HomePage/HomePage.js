import React from "react";
import s from './HomePage.module.css';

function HomePage() {
     return (
          <>
               <h1 className={s.home}>Добро пожаловать в приложение для создания<br />книги контактов!</h1>
               <h2 className={s.home}>Для получения доступа к вашей книге контактов пожалуйста зарегистрируйтесь или выполните вход.</h2>
         </>
     )
}
export default HomePage;