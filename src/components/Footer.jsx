// Footer.jsx
// Site footer with icon-button blocks grouped by category.

import Card from './Card';
import List from './List';

// ─── Footer block data ─────────────────────────────────────────
const timetableItems = [
  { iconId: 'icon-docs',       variant: 'set' },
  { iconId: 'icon-british-fl', variant: 'routine', className: 'create__mode' },
  { iconId: 'icon-ukr-fl',     variant: 'routine', className: 'create__mode' },
  { iconId: 'icon-it',         variant: 'routine', className: 'create__mode' },
  { iconId: 'icon-physics',    variant: 'routine', className: 'create__mode' },
];

const bloomItems = [
  { iconId: 'icon-flower',    variant: 'set' },
  { iconId: 'icon-head',      variant: 'routine', className: 'remember__mode' },
  { iconId: 'icon-gears',     variant: 'routine', className: 'understand__mode' },
  { iconId: 'icon-steps',     variant: 'routine', className: 'apply__mode' },
  { iconId: 'icon-planning',  variant: 'routine', className: 'analize__mode' },
  { iconId: 'icon-estimate',  variant: 'routine', className: 'evaluate__mode' },
  { iconId: 'icon-portfolio', variant: 'routine', className: 'create__mode' },
];

const itSkillItems = [
  { iconId: 'icon-it',         variant: 'set' },
  { iconId: 'icon-exlamation', variant: 'routine', className: 'create__mode' },
  { iconId: 'icon-input',      variant: 'routine', className: 'create__mode' },
  { iconId: 'icon-processing', variant: 'routine', className: 'create__mode' },
  { iconId: 'icon-output',     variant: 'routine', className: 'create__mode' },
];

const timeItems = [
  { iconId: 'icon-clock',     variant: 'time' },
  { iconId: 'icon-second',    variant: 'time' },
  { iconId: 'icon-calendar',  variant: 'time' },
  { iconId: 'icon-timetable', variant: 'time' },
];

const langItems = [
  { iconId: 'icon-british-fl',     variant: 'set' },
  { iconId: 'icon-listening-skill',variant: 'routine', className: 'remember__mode' },
  { iconId: 'icon-reading-skill',  variant: 'routine', className: 'understand__mode' },
  { iconId: 'icon-speaking-skill', variant: 'routine', className: 'apply__mode' },
  { iconId: 'icon-writing-skill',  variant: 'routine', className: 'analize__mode' },
  { iconId: 'icon-vocab-skill',    variant: 'routine', className: 'evaluate__mode' },
  { iconId: 'icon-gears',          variant: 'routine', className: 'create__mode' },
];

const funcItems = [
  { iconId: 'icon-done',       variant: 'symbol' },
  { iconId: 'icon-exlamation', variant: 'symbol' },
  { iconId: 'icon-question',   variant: 'symbol' },
  { iconId: 'icon-minus',      variant: 'symbol' },
  { iconId: 'icon-multiply',   variant: 'symbol' },
  { iconId: 'icon-divide',     variant: 'symbol' },
  { iconId: 'icon-arrow',      variant: 'symbol' },
];
// ───────────────────────────────────────────────────────────────

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-container">

          <Card title="School Timetable. Subjects">
            <List listClass="skills__list" items={timetableItems} />
          </Card>

          <Card title="Learning skill levels (Bloom taxonomy)">
            <List listClass="mob-menu-list" items={bloomItems} />
          </Card>

          <Card title="IT skills and tools">
            <List listClass="skills__list" items={itSkillItems} />
          </Card>

          <Card title="Planning. Time management">
            <List listClass="mob-menu-list" items={timeItems} />
          </Card>

          <Card title="Language skills">
            <List listClass="mob-menu-list" items={langItems} />
          </Card>

          <Card title="Function Icons">
            <List listClass="mob-menu-list" items={funcItems} />
          </Card>

        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="footer-copy">
            <span>SkoolTimez</span> · Освітній проєкт · Open source · <span>2024–2025</span>
          </p>
          <p className="footer-copy" style={{ color: '#2a3240' }}>
            icon.svg sprite · Unbounded + Geologica · Dark theme
          </p>
        </div>

      </div>
    </footer>
  );
}
