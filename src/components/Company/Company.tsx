import './Company.scss';

type Props = {
    icon: string;
}

const Company = ({icon}: Props) => {
  return (
    <div className="company">
        <img src={icon} alt="company Icon" />
    </div>
  )
}

export default Company