import './sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img
        src={require('./images/menuIcon.jpg')}
        alt="home Icon"
        width={'30px'}
      />
      <img
        src={require('./images/homeIcon.png')}
        alt="home Icon"
        width={'36px'}
        height={'36px'}
        className="homeIcon"
      />
      <img
        src={require('./images/messageIcon.png')}
        alt="home Icon"
        width={'30px'}
      />
      <img
        src={require('./images/ntIcon.png')}
        alt="home Icon"
        width={'30px'}
        className="ntIcon"
      />
    </div>
  );
};

export default Sidebar;
