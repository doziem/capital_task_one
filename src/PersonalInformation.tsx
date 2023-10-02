const PersonalInformation = ({}) => {
  return (
    <div className="personal__data ">
      <h6>Personal Information</h6>
      <form action="" className="personal_info">
        <input type="text" name="firstName" placeholder="First Name" />
        <input type="text" name="firstName" placeholder="Last Name" />
        <input type="email" name="firstName" placeholder="Email" />
        <div className="input_group">
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Phone (without dial code)"
          />
          <div className="group_control">
            <label>
              <input
                type="checkbox"
                id="internal"
                name="checkbox"
                value="value"
              />
              Internal
            </label>
            {/* <label className="switch">
          <input
            type="checkbox"
            checked={checkHide}
            onChange={handleTofuChange}
          />
          <span className="slider round"></span>
        </label>
        <label>{checkHide ? 'Show' : 'Hide'}</label> */}
          </div>
        </div>
        <div className="input_group">
          <input type="tel" name="phone" id="phone" placeholder="Nationality" />
          <div className="group_control">
            <label>
              <input
                type="checkbox"
                id="internal"
                name="checkbox"
                value="value"
              />
              Internal
            </label>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            <label>Hide</label>
          </div>
        </div>

        <div className="input_group">
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Current Residence"
          />
          <div className="group_control">
            <label>
              <input
                type="checkbox"
                id="internal"
                name="checkbox"
                value="value"
              />
              Internal
            </label>

            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            <label>Hide</label>
          </div>
        </div>
        <div className="input_group">
          <input type="tel" name="phone" id="phone" placeholder="ID Number" />
          <div className="group_control">
            <label>
              <input
                type="checkbox"
                id="internal"
                name="checkbox"
                value="value"
              />
              Internal
            </label>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            <label>Hide</label>
          </div>
        </div>

        <div className="input_group">
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Date of Birth "
          />
          <div className="group_control">
            <label>
              <input
                type="checkbox"
                id="internal"
                name="checkbox"
                value="value"
              />
              Internal
            </label>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            <label>Hide</label>
          </div>
        </div>
        <div className="input_group">
          <input type="tel" name="phone" id="phone" placeholder="Gender" />
          <div className="group_control">
            <label>
              <input
                type="checkbox"
                id="internal"
                name="checkbox"
                value="value"
              />
              Internal
            </label>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            <label>Hide</label>
            {/* <Switch checked={checkHide} onChange={handleTofuChange} /> */}
          </div>
        </div>

        <div className="input_button">
          <img
            src={require('./images/addIcon.png')}
            alt="home Icon"
            width={'20px'}
          />
          <button className="btn">Add Question</button>
        </div>
      </form>
    </div>
  );
};

export default PersonalInformation;
