import Link from '@components/Link';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { FC } from 'react';
import { AboutUsProps } from './@types';

const AboutUs: FC<AboutUsProps> = ({ title, description }) => {
  return (
    <div className="space-y-16 lg:space-y-36 lg:w-1/2">
      <div className="space-y-12 lg:pr-16">
        <h5 className="text-2xl font-medium lg:text-5xl leading-relaxed">
          {title}
        </h5>
        <p className="font-light text-light lg:text-lg">{description}</p>
      </div>
      <Link variant="outlined" href="/">
        Go to about us <ArrowRightIcon className="ml-2 w-4 h-4" />
      </Link>
    </div>
  );
};

export default AboutUs;
