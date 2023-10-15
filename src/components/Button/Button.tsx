import './Button.scss'

type Prop = {
    text: string;
    defaultColor?: string; 
    defaultBgColor?: string;
    logo?:  string;
    border?: boolean;
}

const Button = ({ text, defaultBgColor, defaultColor, border, logo }: Prop) => {
  let content;

  if(logo){
    content = (
      <>
        <img src={logo} alt="AI Picture" />
        <p style={{ marginLeft: '0.75rem' }}>{text}</p>
      </>
    )
  } else {
    content = (
      <>
        {text}
      </>
    )
  }
  return (
    <button
      id='button'
      className={`${border ? 'addBorder' : 'noBorder'}`}
      style={{
        background: defaultBgColor || '#fff', 
        color: defaultColor || '#101828', 
        display: 'flex', 
        alignItems: 'center'
      }}
    >
      {content}
    </button>
  )
}

export default Button