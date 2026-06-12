// Hero.jsx
// Full-page hero section for index.html.
// Composed from Tags, Article, Button sub-components.

import Tags from './Tags';
import Article from './Article';
import Button from './Button';

// ─── Tag data ──────────────────────────────────────────────────
const homeTagItems = [
  { href: './index.html',    label: '#index',     active: true },
  { href: './it.html',       label: '#IT' },
  { href: './timetable.html',label: '#timetable' },
  { href: './guide.html',    label: '#guide' },
  { href: './storage.html',  label: '#storage' },
  { href: './404.html',      label: '#...' },
];

const itTagItems = [
  { href: './it.html',   label: '#it',             active: true },
  { href: './404.html',  label: '#Facts about IT' },
  { href: './404.html',  label: '#How it works' },
  { href: './404.html',  label: '#Current projects' },
  { href: './404.html',  label: '#Tutorials' },
  { href: './404.html',  label: '#Links' },
];

const subjectTagItems = [
  { href: './lesson1vocabulary.html', label: '#vocabulary', active: true },
  { href: './lesson2grammar.html',    label: '#grammar' },
  { href: './lesson3listening.html',  label: '#listening' },
  { href: './lesson4speaking.html',   label: '#speaking' },
  { href: './lesson5reading.html',    label: '#reading' },
  { href: './lesson6writing.html',    label: '#writing' },
];
// ───────────────────────────────────────────────────────────────

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-inner">
          <div>

            {/* Home tags */}
            <Tags iconId="icon-home" items={homeTagItems} />

            <img
              src="/images/layout/study.png"
              alt="Lesson layout"
              width="400"
              className="hero-image"
            />

            <p className="hero-eyebrow">skoolTimez.some.domain/index.html</p>
            <h1 className="hero-title">
              Домашня сторінка<br />HOMEPAGE
            </h1>

            {/* IT tags */}
            <Tags iconId="icon-it" items={itTagItems} />

            {/* Subject / lesson tags */}
            <Tags iconId="icon-steps" items={subjectTagItems} />

            {/* Explainer article */}
            <p className="hero-desc">
              Вітаю, мандрівцю в web-версії квест SkoolTimez. Наразі проєкт існує в формі
              GitHub репозиторію, і ця сторінка є його стартовою точкою. В горі міститься
              header в якій є логотип та навігація по основних розділах сайту. Внизу — футер
              з іконками та інформацією про проєкт. але щоб дістатися футера та hero секції,
              необхідно дослідити навігаційне меню.
            </p>

            <Article title="Що таке index.html?">
              <p>
                <strong>index.html</strong> — це стандартна сторінка, яка відкривається за
                замовчуванням при переході на веб-сайт. Вона служить точкою входу і зазвичай
                містить загальну інформацію або навігацію по сайту.
              </p>
              <p>
                Внизу містяться кнопки 404, які ведуть на сторінку 404.html та форму для
                пропозицій. Вони є тестовими елементами, які можна використовувати для
                навігації та взаємодії з сайтом.
              </p>
            </Article>

            {/* CTA buttons */}
            <div className="hero-actions">
              <Button variant="primary" href="./404.html" iconId="icon-link">
                На 404.html
              </Button>
              <Button
                variant="outline"
                href="https://docs.google.com/forms/d/e/1FAIpQLSeSAczLAsUP3MjSK8mwxlDhOJ9kIo37gdQLA7DwFT30L7nOwA/viewform?usp=publish-editor"
                iconId="icon-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Форма 404.
              </Button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
