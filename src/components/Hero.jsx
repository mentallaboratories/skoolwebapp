// Hero.jsx
// Full-page hero section. Receives content from st.json via App.

import Tags from './Tags';
import Article from './Article';
import Button from './Button';

export default function Hero({ heroData = {}, siteBigImage = null }) {
  const image = heroData.image || { src: siteBigImage || '/images/layout/study.png', alt: 'Hero illustration', width: 400 };
  const eyebrow = heroData.eyebrow || '';
  const title = heroData.title || '';
  const description = heroData.description || '';
  const actions = heroData.actions || [];
  const explainer = heroData.explainer_block || {};
  const tags = heroData.tags || heroData.lesson_tags?.tags || [{ href: './index.html', label: '#index', active: true }];
  const tagIcon = heroData.tags ? heroData.tags.iconId || 'icon-home' : heroData.lesson_tags?.category_icon || 'icon-home';

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-inner">
          <div>
            <Tags iconId={tagIcon} items={tags} />

            <img src={image.src} alt={image.alt} width={image.width} className="hero-image" />

            <p className="hero-eyebrow">{eyebrow}</p>
            <h1 className="hero-title" dangerouslySetInnerHTML={{ __html: title.replace(/\n/g, '<br />') }} />
            <p className="hero-desc">{description}</p>

            {explainer.title && (
              <Article title={explainer.title}>
                {(explainer.paragraphs || []).map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </Article>
            )}

            <div className="hero-actions">
              {actions.map((action, index) => (
                <Button
                  key={index}
                  variant={action.type === 'btn-primary' ? 'primary' : 'outline'}
                  href={action.href}
                  iconId={action.icon}
                  target={action.target}
                  rel={action.rel}
                >
                  {action.text}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
