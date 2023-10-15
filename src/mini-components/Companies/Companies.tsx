import Company from '../../components/Company/Company';
import './Companies.scss';
import Shopify from '../../assets/company/shopify.svg';
import Coinbase from '../../assets/company/coinbase.svg';
import DropBox from '../../assets/company/dropbox.svg';
import Intercom from '../../assets/company/intercom.svg';
import Marvel from '../../assets/company/marvel.svg';
import Automatic from '../../assets/company/automatic.svg';

type CompanyType = {
    id: number;
    name: string;
}

const Companies = () => {
    const companyLists: CompanyType[] = [
        {
            id: 1, 
            name: Shopify
        }, 
        {
            id: 2, 
            name: Coinbase
        },
        {
            id: 3, 
            name: DropBox
        }, 
        {
            id: 4, 
            name: Intercom
        },
        {
            id: 5, 
            name: Marvel
        }, 
        {
            id: 6, 
            name: Automatic
        }
    ]
  return (
    <div className="companies">
        <p className="companies__header">Join 1,500+ companies already video conferencing the ClearLink way</p>

        <div className="companies__list">
            {
                companyLists.map((company: CompanyType) => (
                    <Company 
                        icon={company.name}
                        key={company.id}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default Companies