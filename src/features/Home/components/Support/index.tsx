import { randomUUID } from 'crypto';
import Card from '@components/Card';
import config from '@configs/app.json';

const { HelpAndSupport } = config;
const Support = () => {
  return (
    <ul className="flex flex-col lg:flex-row lg:gap-x-4">
      {HelpAndSupport.map(({ title, description, href, label }) => (
        <li
          className="flex-1 border-t lg:border-r lg:border-t-0 border-medium lg:last:border-r-0 h-80"
          key={`support-${randomUUID()}`}
        >
          <Card
            title={title}
            description={description}
            href={href}
            label={label}
          />
        </li>
      ))}
    </ul>
  );
};

export default Support;
