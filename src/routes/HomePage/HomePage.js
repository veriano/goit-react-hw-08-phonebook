import React from "react";
import { motion, AnimatePresence } from 'framer-motion';
import s from './HomePage.module.css';
import { variants } from 'utils/motion';

function HomePage() {
     return (
          <>
               <AnimatePresence>
                    <motion.h1 className={s.home}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition="transition"
                    variants={variants}
                    >
                    Добро пожаловать в приложение для создания<br />книги контактов!
                    </motion.h1>
               </AnimatePresence>
               <AnimatePresence>
                    <motion.h2 className={s.home}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition="transition"
                    variants={variants}
                    >
                    Для получения доступа к вашей книге контактов пожалуйста зарегистрируйтесь или выполните вход.
                    </motion.h2>
               </AnimatePresence>
               </>
     )
          
}
export default HomePage;