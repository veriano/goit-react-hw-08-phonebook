import React from 'react';
import { Link } from 'react-router-dom';
import s from './NoMatch.module.css';

const NoMatch = () => {
    return (
        <div className={ s.container }>
            <h2 className={ s.title }>Nothing to see here:(</h2>
            <p>
                <Link to="/" className={ s.text }><b>&#8594;  Go to the home page!</b></Link>
            </p>
        </div>
    )

}
export default NoMatch;