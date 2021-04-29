import Link from 'next/link';

import classes from './MainNavigation.module.css';

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>อาบอบนวด</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>สาวๆ ทั้งหมด</Link>
          </li>
         
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
