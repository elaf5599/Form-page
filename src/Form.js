import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from './logo2.svg'
import { faUser , faEnvelope , faPhone, faLock} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { Link } from 'react-router-dom'
import { useRoutes } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
function Formm(){
      const Naviagte=useNavigate()

  const [action, setAction] = useState('');

  const [message, setMessage] = useState('');

  const handleChange = event => {
    const result = event.target.value.replace(/[^a-z]/gi, '');

    setMessage(result);
  };
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleOnChange = (value, country) => {
      // 'value' will contain the phone number input
      // 'country' will contain the selected country information
      setPhoneNumber(value);
    };
    const [input, setInput] = useState({
        username: '',
        password: '',
        confirmPassword: '',
      });
    
      const [error, setError] = useState({
        username: '',
        password: '',
        confirmPassword: '',
      });
    
      const onInputChange = (e) => {
        const { name, value } = e.target;
        setInput((prev) => ({
          ...prev,
          [name]: value,
        }));
        validateInput(e);
      };
    
      const validateInput = (e) => {
        let { name, value } = e.target;
        setError((prev) => {
          const stateObj = { ...prev, [name]: '' };
    
          switch (name) {
            case 'password':
              if (!value) {
                stateObj[name] = 'أدخل كلمة المرور.';
              } else if (input.confirmPassword && value !== input.confirmPassword) {
                stateObj['confirmPassword'] =
                  'الأرقام السرية لا تتطابق';
              } else {
                stateObj['confirmPassword'] = input.confirmPassword
                  ? ''
                  : error.confirmPassword;
              }
              break;
    
            case 'confirmPassword':
              if (!value) {
                stateObj[name] = 'ادخل تأكيد كلمة المرور.';
              } else if (input.password && value !== input.password) {
                stateObj[name] =  'الأرقام السرية لا تتطابق';
              }
              break;
              case 'username3':
                if (!value) {
                  stateObj[name] = 'ادخل اسم المستخدم';
                }
                break;
                case 'username':
                if (!value) {
                  stateObj[name] = 'ادخل اسم المستخدم';
                }
                break;
                case 'email':
                  if (!value) {
                    stateObj[name] = 'ادخل البريد الالكتروني';
                  }
                 else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
                  stateObj[name] = 'بريد غير صحيح'
                  }
                break;
            default:
              break;
          }
    
          return stateObj;
        });
      };
    return(
      <div className='parent'>
      <div className='child1' > 
  
      </div>
      
      <div className='child2'>
  <img src={logo} style={{marginTop:'0px'}}/>
  <div style={{width:'50%', backgroundColor:'#FCFCFC', borderRadius:'15px', height:'88%' , boxShadow: '0px 0px 4px 0.2px  lightblue'
  }}>
        <div style={{direction:'rtl', padding:'20%',paddingTop:'7%'}}>
<h2 class="droid-arabic-naskh" style={{textAlign:'center', color:'#40B3BF', fontSize:'160%'}}> {action}
</h2>
<p class="droid-arabic-naskh" style={{fontSize:'80%', lineHeight:'1.25rem', color:'#9CA3AF'}}>
  المعلومات الشخصية
</p>
<form  >
    <div style={{display:'grid', gap:'50px'}}>
    <div style={{display:'grid',gridTemplateColumns:'auto'}}>
  <label class="droid-arabic-naskh" style={{fontSize:'90%', fontWeight:'700'}}>الأسم الأول</label>
  <div className="input">
  <FontAwesomeIcon icon={ faUser} style={{color: "#40B3BF",}} className='image'/>
  <input className='Form' type='text'
   name="username"
   value={message}
        onChange={handleChange}
   onBlur={validateInput}
  />
  </div>
  {error.username && <span style={{paddingTop:'10%'}} className="err">{error.username}</span>}

  </div>

  <div style={{display:'grid',gridTemplateColumns:'auto'}}>
  <label class="droid-arabic-naskh" style={{fontSize:'90%', fontWeight:'700'}}>الأسم الأخير</label>
  <div className="input">
  <FontAwesomeIcon icon={ faUser} style={{color: "#40B3BF",}} className='image'/>

  <input className='Form' type='text'
   name="username2"
   value={input.username2}
   onChange={onInputChange}
   onBlur={validateInput}
  />
  </div>
  </div>

  

  <div style={{display:'grid',gridTemplateColumns:'auto'}}>
  <label class="droid-arabic-naskh" style={{fontSize:'90%', fontWeight:'700'}} >البريد الالكتروني</label>
  <div className="input">
  <FontAwesomeIcon icon={ faEnvelope} style={{color: "#40B3BF",}} className='image'/>
  <input className='Form' type='email'
   name="email"
   value={input.email}
   onChange={onInputChange}
   onBlur={validateInput}
  />
  </div>
  {error.email && <span style={{paddingTop:'10%'}} className="err">{error.email}</span>}

  </div>

  <div style={{display:'grid',gridTemplateColumns:'auto'}}>
  <label class="droid-arabic-naskh" style={{fontSize:'90%', fontWeight:'700'}}>رقم الجوال</label>
  <div >
 <div>
  <PhoneInput style={{direction:'ltr', marginRight:'-9%'
}}
        country={'us'} // default country
        value={phoneNumber}
        onChange={handleOnChange}
        inputStyle={{
            width: '90%',

            // Add more styles as needed
          }}
          dropdownStyle={{
            width: '300px',
            // Add more styles as needed
          }}
      />
    </div> 
 
  </div>
 
  </div>
  </div>


<p class="droid-arabic-naskh" style={{fontSize:'80%', lineHeight:'1.25rem', color:'#9CA3AF',marginTop:'30%'}}>
  معلومات التسجيل
</p>


    <div style={{display:'grid', gap:'50px'}}>
    <div style={{display:'grid',gridTemplateColumns:'auto'}}>
  <label class="droid-arabic-naskh" style={{fontSize:'90%', fontWeight:'700'}}>اسم المستخدم </label>
  <div className="input">
  <FontAwesomeIcon icon={ faUser} style={{color: "#40B3BF",}} className='image'/>
  <input className='Form' type='text'
    name="username3"
    value={input.username3}
    onChange={onInputChange}
    onBlur={validateInput}
  />
  </div>
  {error.username3 && <span style={{paddingTop:'10%'}} className="err">{error.username3}</span>}

  </div>

  <div style={{display:'grid',gridTemplateColumns:'auto'}}>
  <label class="droid-arabic-naskh" style={{fontSize:'90%', fontWeight:'700'}}>كلمة المرور</label>
  <div className="input">
  <FontAwesomeIcon icon={ faLock} style={{color: "#40B3BF",}} className='image'/>

  <input className='Form' type='password'
    name="password"
    value={input.password}
    onChange={onInputChange}
    onBlur={validateInput}
  />
  </div>
  {error.password && <span style={{paddingTop:'10%'}} className="err">{error.password}</span>}

  </div>


  <div style={{display:'grid',gridTemplateColumns:'auto'}}>
  <label class="droid-arabic-naskh" style={{fontSize:'90%', fontWeight:'700'}} >تأكيد كلمة المرور </label>
  <div className="input">
  <FontAwesomeIcon icon={ faLock} style={{color: "#40B3BF",}} className='image'/>
  <input className='Form' type='password'
   name="confirmPassword"
   value={input.confirmPassword}
   onChange={onInputChange}
   onBlur={validateInput}
  />
 
  </div>
  {error.confirmPassword && (
          <span style={{paddingTop:'10%'}} className="err">{error.confirmPassword}</span>
        )}
  </div>
<div style={{display:'flex', justifyContent:'space-between'}}> 
<div to='/Form' style={{fontSize:'100%'}} className='submit'>Sign Up</div>
<div to='/login' style={{fontSize:'100%' }} className='submit' onClick={()=> Naviagte('login')}>Login </div>
  </div>

  </div>

</form>

</div>
</div>


    </div>
  </div>
    );
}
export default Formm;
