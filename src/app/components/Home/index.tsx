import OverlayLink from '@components/OverlayLink';
import Tagline from '@components/Tagline';
import classNames from 'classnames';
import config from '@configs/app.json';
import ProjectOverlayLink from 'src/app/components/ProjectOverlayLink';

const { BlogPostsImageUrls, ProjectsImageUrls } = config;
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
        {BlogPostsImageUrls.map(({ href, title, description, icon }) => (
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
          {ProjectsImageUrls.map(
            ({ href, title, description, icon, awards }) => (
              <ProjectOverlayLink
                key={`project-${title.replaceAll(' ', '-')}`}
                href={href}
                title={title}
                description={description}
                awards={awards}
                icon={icon}
              />
            )
          )}
        </div>
      </section>
    </div>
  );
};
export default Home;
