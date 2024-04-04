import Button from '@components/Button';
import config from '@configs/app.json';

const { FooterMenu } = config;
const Menus = () => {
  return (
    <div className="w-full flex space-x-32">
      {FooterMenu.map(({ label, values }) => {
        return (
          <div className="flex flex-col" key={`footer-${label}`}>
            <label className="text-sm text-light px-4 py-2">{label}</label>
            <ul className="flex flex-col gap-y-2">
              {values.map(({ title, href }) => (
                <li key={`footer-sub-menu-${title}`}>
                  <Button href={href} variant="text">
                    {title}
                  </Button>
                </li>
              ))}
            </ul>
            ;
          </div>
        );
      })}
    </div>
  );
};
export default Menus;
