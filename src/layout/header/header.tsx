import React from 'react';
import cn from 'classnames';
import styles from './header.module.scss';

export function Header(): JSX.Element {
  return (
    <header>
      <nav className={cn(styles.nav, 'blue-grey darken-2')}>
        <div className="nav-wrapper">
          <a href="/#" className="brand-logo">React Movies</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a
                href="https://github.com/limestormrage/video-list"
                target="_blank"
                rel="noreferrer"
              >
                Repo
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
