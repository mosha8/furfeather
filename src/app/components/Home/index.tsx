import OverlayLink from '@components/OverlayLink';
import Tagline from '@components/Tagline';
import classNames from 'classnames';
import config from '@configs/app.json';
import ProjectOverlayLink from 'src/app/components/ProjectOverlayLink';
import Service from '../Service';
import { randomUUID } from 'crypto';

const { BlogPosts, Projects, Services } = config;
const Home = () => {
  return (
    <div
      className={classNames(
        'text-primary py-4 px-8 my-8',
        'w-full flex flex-col gap-y-16',
        'md:py-12 md:px-16',
        'lg:px-20 lg:gap-y-32'
      )}
    >
      <Tagline />
      <section
        className={classNames(
          'w-full flex flex-col items-start gap-y-6',
          'md:flex-row md:gap-x-12 md:flex-wrap'
        )}
      >
        {BlogPosts.map(({ href, title, description, icon }) => (
          <OverlayLink
            key={`blogPost-overlayLink-${href}`}
            href={href}
            title={title}
            description={description}
            icon={icon}
          />
        ))}
      </section>
      <section className={classNames('w-full space-y-8 lg:space-y-16')}>
        <h3 className={classNames('font-semibold text-4xl lg:text-5xl')}>
          Selected work.
        </h3>
        <div className="flex flex-col gap-y-16">
          {Projects.map(({ href, title, description, icon, awards }) => (
            <ProjectOverlayLink
              key={`project-${title.replaceAll(' ', '-')}`}
              href={href}
              title={title}
              description={description}
              awards={awards}
              icon={icon}
            />
          ))}
        </div>
      </section>
      <section className={classNames('w-full space-y-8 mt-8')}>
        <h3 className={classNames('font-semibold text-4xl lg:text-5xl')}>
          Services.
        </h3>
        {Services.map(({ title, description, icons }) => (
          <Service
            title={title}
            description={description}
            icons={icons}
            key={`service-${randomUUID()}`}
          />
        ))}
      </section>
    </div>
  );
};
export default Home;
