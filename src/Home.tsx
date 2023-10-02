import { FormEvent, useEffect, useState } from 'react';
import './home.css';
import { type } from 'os';

type FormData = {
  firstName: string;
  lastName: string;
  emailId: string;
  phoneNumber: string;
  nationality: string;
  currentResidence: string;
  idNumber: string;
  dateOfBirth: string;
  gender: string;
};

const INITIAL_DATA = {
  firstName: '',
  lastName: '',
  emailId: '',
  phoneNumber: '',
  nationality: '',
  currentResidence: '',
  idNumber: '',
  dateOfBirth: '',
  gender: '',
};
type Input = {
  inputType: '';
  question: '';
};

const Home = () => {
  const [checkHide, setCheckHide] = useState<boolean>(false);
  const [question, setQuestion] = useState(INITIAL_DATA);
  const [type, setType] = useState('');
  const [add, setAdd] = useState<string[]>([]);
  const [addChild, setAddChild] = useState<{}[]>([]);
  const [file, setFile] = useState<File | undefined>();

  // .value?: string | number | readonly string[] | undefined

  useEffect(() => {
    fetchApiData();
  }, []);

  async function fetchApiData() {
    const mockData = await fetch(
      'http://127.0.0.1:4010/api/232.67651049266541/programs/reiciendis/application-form'
    );

    // setAddChild(mockData)
    console.log(mockData);
  }

  // add: [],
  //     addChild: []

  // const addInputField = (event:FormEvent) => {
  //   const addItem = add;
  //   let size = addItem.length + 1;
  //   addItem.push(size);
  //   setAdd(addItem);
  //   event.preventDefault();
  // };

  // const addChildInputField = (event:React.SyntheticEvent) => {
  //   // const addChild = addChild;
  //   const size = addChild.length + 1;
  //   addChild.push(size);
  //   setAddChild({
  //     addChild,
  //   });
  //   event.preventDefault();
  // };

  // const handleChange = (event:FormEvent) => {
  //   this.setState({
  //     [event.target.name]: event.target.value,
  //   });
  // };

  const handleTofuChange = (): void => {
    setCheckHide(!checkHide);
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleSubmitFile = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (typeof file === 'undefined') return;
    console.log('file before::', file);

    const bitSize = (1024 * 104).toFixed(2);
    const size = file.size / +bitSize;
    if (size >= 1) return;

    const data = {
      id: '497f6eca-6276-4993-bfeb-53cbbbba6f08',
      type: 'applicationForm',
      attributes: {
        coverImage: file,
        personalInformation: {
          firstName: { internalUse: false, show: true },
          lastName: { internalUse: false, show: true },
          emailId: { internalUse: false, show: true },
          phoneNumber: { internalUse: false, show: true },
          nationality: { internalUse: false, show: true },
          currentResidence: { internalUse: false, show: true },
          idNumber: { internalUse: false, show: true },
          dateOfBirth: { internalUse: false, show: true },
          gender: { internalUse: false, show: true },
          personalQuestions: [
            {
              id: '497f6eca-6276-4993-bfeb-53cbbbba6f08',
              type: 'Paragraph',
              question: 'string',
              choices: ['string'],
              maxChoice: 0,
              disqualify: false,
              other: false,
            },
          ],
        },
        profile: {
          education: { mandatory: true, show: true },
          experience: { mandatory: true, show: true },
          resume: { mandatory: true, show: true },
          profileQuestions: [
            {
              id: '497f6eca-6276-4993-bfeb-53cbbbba6f08',
              type: 'Paragraph',
              question: 'string',
              choices: ['string'],
              maxChoice: 0,
              disqualify: false,
              other: false,
            },
          ],
        },
        customisedQuestions: [
          {
            id: '497f6eca-6276-4993-bfeb-53cbbbba6f08',
            type: 'Paragraph',
            question: 'string',
            choices: ['string'],
            maxChoice: 0,
            disqualify: false,
            other: false,
          },
        ],
      },
    };
    try {
      const result = await fetch(
        'http://127.0.0.1:4010/api/65.12663432994489/programs/dolor/application-form',
        {
          method: 'PUT',
          body: file,
          headers: {
            'Content-type': 'application/json',
          },
        }
      );
      console.log('result::', result);
    } catch (error) {
      console.log('Error::', error);
    }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement & { files: FileList };
    console.log('Target file::', target.files[0]);

    setFile(target.files[0]);
  };
  return (
    <div className="home">
      <div className="imageUpload">
        <h6>Upload Cover Image</h6>
        <form action="" onSubmit={handleSubmitFile}>
          <div className="uploadIcon">
            <img
              src={require('./images/uploadIcon.png')}
              alt="home Icon"
              width={'30px'}
            />
            <input
              type="file"
              id="file-input"
              name="image"
              //  value={file}
              onChange={handleOnChange}
            />

            <label id="file-input-label" htmlFor="file-input">
              upload cover image
            </label>
            <p className="imageSize">
              16:9 ratio is recommended. Max image size 1mb
            </p>
          </div>
          <div className="buttonControl">
            <button className="btn save">Save</button>
          </div>
        </form>
      </div>
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
              <label className="switch">
                <input
                  type="checkbox"
                  checked={checkHide}
                  onChange={handleTofuChange}
                />
                <span className="slider round"></span>
              </label>
              <label>{checkHide ? 'Show' : 'Hide'}</label>
            </div>
          </div>
          <div className="input_group">
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Nationality"
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

      <div className="profile">
        <h6>Profile</h6>
        <div className="input_group">
          <input type="tel" name="phone" id="phone" placeholder="Education" />
          <div className="group_control">
            <label>
              <input
                type="checkbox"
                id="internal"
                name="checkbox"
                value="value"
              />
              Mandatory
            </label>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            <label>Hide</label>
          </div>
        </div>

        <div className="input_group">
          <input type="tel" name="phone" id="phone" placeholder="Experince" />
          <div className="group_control">
            <label>
              <input
                type="checkbox"
                id="internal"
                name="checkbox"
                value="value"
              />
              Mandatory
            </label>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            <label>Hide</label>
          </div>
        </div>
        <div className="input_group">
          <input type="tel" name="phone" id="phone" placeholder="Resume" />
          <div className="group_control">
            <label>
              <input
                type="checkbox"
                id="internal"
                name="checkbox"
                value="value"
              />
              Mandatory
            </label>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            <label>Hide</label>
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
      </div>

      <div className="question">
        <h6>Questions</h6>
        <form className="container" onSubmit={handleSubmit}>
          <div className="additional__info">
            <label htmlFor="input" className="control-label">
              Type
            </label>
            <select name="pets" id="pet-select" className="form-control">
              <option value="">Multiple Choice </option>
              <option value="">Multiple Choice </option>
              <option value="dog">Paragraph</option>
              <option value="cat">Yes/No</option>
              <option value="hamster">Dropdown</option>
              <option value="parrot">Date</option>
              <option value="spider">Number</option>
              <option value="goldfish">File Upload</option>
              <option value="goldfish">Video Question</option>
            </select>
          </div>

          <div className="additional__info">
            <label htmlFor="">Question </label>
            <input className="nosubmit" type="text" placeholder="Type here" />
          </div>

          <div className="buttonControl">
            <button className="btn delete">
              <img
                src={require('./images/cancelIcon.png')}
                alt="home Icon"
                width={'20px'}
                style={{ marginRight: '10px' }}
              />
              Delete Question
            </button>
            <button className="btn save">Save</button>
          </div>
        </form>
      </div>

      <div className="dropdown">
        <h6>Questions</h6>
        <form className="container">
          <div className="additional__info">
            <label htmlFor="input" className="control-label">
              Type
            </label>
            <select name="pets" id="pet-select" className="form-control">
              <option value="">Multiple Choice </option>
              <option value="">Multiple Choice </option>
              <option value="dog">Paragraph</option>
              <option value="cat">Yes/No</option>
              <option value="hamster">Dropdown</option>
              <option value="parrot">Date</option>
              <option value="spider">Number</option>
              <option value="goldfish">File Upload</option>
              <option value="goldfish">Video Question</option>
            </select>
          </div>

          <div className="additional__info">
            <label htmlFor="">Question </label>
            <input className="nosubmit" type="text" placeholder="Type here" />
          </div>

          <div className="buttonControl">
            <button className="btn delete">
              <img
                src={require('./images/cancelIcon.png')}
                alt="home Icon"
                width={'20px'}
                style={{ marginRight: '10px' }}
              />
              Delete Question
            </button>
            <button className="btn save">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
