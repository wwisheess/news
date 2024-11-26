import { useState, useEffect } from 'react';
import s from './Header.module.scss';
import Link from './NavLink/NavLink';
import Search from './Search/Search';
import DropdownBtn from './DropdownBtn/DropdownBtn';
import SettingsBtn from './SettingsBtn/SettingsBtn';
import SettingsModal from './SettingsModal/SettingsModal';
import BurgerBtn from './BurgerBtn/BurgerBtn';

const navLinks = [
  { name: 'Home', url: '/' },
  { name: 'Latest', url: '/news/latest' },
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleSettingsClick() {
    setIsModalOpen(true);
  }

  const renderNavLinks = () => (
    <>
      {navLinks.map((link, index) => {
        if (link.dropdownLinks) {
          return (
            <DropdownBtn
              key={index}
              url={link.url}
              name={link.name}
              dropdownLinks={link.dropdownLinks}
            />
          );
        }
        return <Link key={index} url={link.url} name={link.name} />;
      })}
    </>
  );

  return (
    <header className={s.header}>
      <div className={s.header_inner}>
        <nav>
          <div className={s.nav_links}>{renderNavLinks()}</div>
          <div className={s.search_settings}>
            <BurgerBtn
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              isMenuOpen={isMenuOpen}
            />
            <Search />
            <SettingsBtn onClick={() => handleSettingsClick()} />
            <SettingsModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
            />
          </div>
        </nav>
        {isMenuOpen && (
          <div
            onClick={(e) => !e.target.closest('button') && setIsMenuOpen(false)}
            className={s.mobile_menu}
          >
            {renderNavLinks()}
          </div>
        )}
      </div>
    </header>
  );
}
