// Hero.jsx
// Full-page hero section. Receives content from st.json via App.

import Tags from './Tags';
import Article from './Article';
import Button from './Button';

export default function Hero({ heroData = {}, lessonTags = {}, siteBigImage = null }) {
  const image = heroData.image || { src: siteBigImage || '/images/layout/study.png', alt: 'Hero illustration', width: 400 };
  const eyebrow = heroData.eyebrow || '';
  const title = heroData.title || '';
  const description = heroData.description || '';
  const actions = heroData.actions || [];
  const explainer = heroData.explainer_block || {};
  const tags = lessonTags.tags || heroData.tags || [{ href: './index.html', label: '#index', active: true }];
  const tagIcon = lessonTags.category_icon || (heroData.tags ? heroData.tags.iconId || 'icon-home' : 'icon-home');

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-inner">
          <div>
             <p className="hero-code">{eyebrow}</p>
            
            <h1 className="hero-title" dangerouslySetInnerHTML={{ __html: title.replace(/\n/g, '<br />') }} />
            <p className="hero-eyebrow">{description}</p>
         
             <Tags iconId={tagIcon} items={tags} />
            <img src={image.src} alt={image.alt} width={image.width} className="hero-image" />

           <div className="hero-actions" className="container" style={{ backgroundColor: '#0d1117', backgroundImage: 'url(./images/layout/background-action.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'left top' , backgroundSize: '40px 40px', padding: '1rem 0' }}>
              <div className="lesson-tags">
        <p className="hero-eyebrow" style={{width: '100%', textAlign: 'right' }}>Дій</p>
      
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
          {explainer.title && (
              <Article title={explainer.title}>
                {(explainer.paragraphs || []).map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </Article>
            )}
        </div>
      </div>
    </section>
  );
}
