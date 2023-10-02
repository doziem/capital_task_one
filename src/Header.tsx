import './header.css';

export const Header = () => {
  return (
    <div className="header">
      <ul>
        <li>Program Details</li>
        <li className="application">
          <div className="header__app">
            <p className="header__application"> Application Form</p>
            <img
              src={require('./images/Vector 55.png')}
              alt="home Icon"
              width={'20px'}
              className="vectorImage"
            />
          </div>
        </li>
        <li>Workflow</li>
        <li>Preview</li>
      </ul>
    </div>
  );
};
