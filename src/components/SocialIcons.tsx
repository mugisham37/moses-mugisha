import { XLogo, InstagramLogo, DribbbleLogo } from '@phosphor-icons/react';

interface Props {
  direction?: 'vertical' | 'horizontal';
}

export default function SocialIcons({ direction = 'vertical' }: Props) {
  const icons = [
    { Icon: XLogo, href: 'https://x.com', label: 'X' },
    { Icon: InstagramLogo, href: 'https://instagram.com', label: 'Instagram' },
    { Icon: DribbbleLogo, href: 'https://dribbble.com/', label: 'Dribbble' },
  ];

  return (
    <div className={`flex gap-2 ${direction === 'vertical' ? 'flex-col' : 'flex-row'}`}>
      {icons.map(({ Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          aria-label={label}
        >
          <Icon size={18} weight="regular" />
        </a>
      ))}
    </div>
  );
}
