const SocialLink = ({ link }) => {
  const { id, href, icon } = link;
  return (
    <li key={id}>
      <a href={href} target="_blank" rel="noreferrer" className="nav-icon">
        <i className={icon}></i>
      </a>
    </li>
  );
};
export default SocialLink;
