import OverlayLink from '@components/OverlayLink';
import Tagline from '@components/Tagline';
import classNames from 'classnames';
import config from '@configs/app.json';

const { BlogPostsImageUrls } = config;
const Home = () => {
  return (
    <div
      className={classNames(
        'text-primary py-4 mx-8 my-8',
        'w-full flex flex-col gap-y-16',
        'md:my-12 md:mx-16',
        'lg:mx-20 lg:gap-y-24'
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
    </div>
  );
};
export default Home;
