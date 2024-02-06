import localization from '@/localization';

type Props = {
  className?: string;
  short?: boolean;
};

export default function Localization({ className = '', short = true }: Props) {
  const locale = localization?.language;
  const locales = localization?.options?.supportedLngs as string[];
  const localesMap = (k: string) =>
    ({
      en: 'English',
      tr: 'Türkçe',
    }[k] || '');

  return locales?.length > 1 ? (
    <div className={`whitespace-nowrap ${className}`}>
      <select
        defaultValue={locale}
        className='border-none outline-none focus:ring-0 uppercase pr-6 bg-transparent'
        onChange={(e) => localization.changeLanguage(e.currentTarget.value)}
      >
        {(locales || [])
          .filter((i: string) => i != 'cimode')
          .map((i: string) => (
            <option key={i} value={i}>
              {short ? i : localesMap(i)}
            </option>
          ))}
      </select>
    </div>
  ) : (
    <></>
  );
}
