import s from './Header.module.scss';

import Link from './NavLink/NavLink';
import Search from './Search/Search';
import Dropdown from './Dropdown/Dropdown';
import Settings from '../Settings/Settings';

const navLinks = [
  { name: 'Home', url: '/' },
  { name: 'Latest News', url: '/news/latest' },
  {
    name: 'Categories',
    url: '/categories',
    dropdownLinks: [
      {
        name: 'Politics',
        url: '/news/politics',
      },
      {
        name: 'Business',
        url: '/news/business',
      },
      {
        name: 'Sports',
        url: '/news/sports',
      },
      {
        name: 'See all...',
        url: '/categories',
      },
    ],
  },
];

export default function Header() {
  return (
    <header className={s.header}>
      <div className={s.header_inner}>
        <nav>
          <div className={s.nav_links}>
            {navLinks.map((link, index) => {
              if (link.dropdownLinks) {
                return (
                  <Dropdown
                    key={index}
                    url={link.url}
                    name={link.name}
                    dropdownLinks={link.dropdownLinks}
                  />
                );
              }

              return <Link key={index} url={link.url} name={link.name} />;
            })}
          </div>
          <div className={s.search_settings}>
            <Search />
            <Settings />
          </div>
        </nav>
      </div>
    </header>
  );
}
