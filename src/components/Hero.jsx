// Hero.jsx
// Full-page hero section for index.html.
// Composed from Tags, Article, Button sub-components.

import Tags from './Tags';
import Article from './Article';
import Button from './Button';

export default function Hero({ heroData = {}, siteBigImage = null }) {
  const image = heroData?.image || { src: siteBigImage , alt: '', width: 400 };
  const eyebrow = heroData?.eyebrow || '';
  const title = heroData?.title || '';
  const description = heroData?.description || '';
  const actions = heroData?.actions || [];

  // tags are optional — keep a small default
  const tags = (heroData && heroData.tags) || [{ href: './index.html', label: '#index', active: true }];

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-inner">
          <div>
            <Tags iconId="icon-home" items={tags} />

            <img src={image.src} alt={image.alt} width={image.width} className="hero-image" />

            <p className="hero-eyebrow">{eyebrow}</p>
            <h1 className="hero-title" dangerouslySetInnerHTML={{ __html: title.replace(/\n/g, '<br />') }} />

            <p className="hero-desc">{description}</p>

            <Article title={heroData?.explainer_block?.title}>
              {heroData?.explainer_block?.paragraphs?.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </Article>

            <div className="hero-actions">
              {actions.map((a, i) => (
                <Button key={i} variant={a.type === 'btn-primary' ? 'primary' : 'outline'} href={a.href} iconId={a.icon}>
                  {a.text}
                </Button>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
