import {IoBan} from 'react-icons/io5'

const NotFound = ({notFound}) => {
    return ( 
        <div className={`${notFound}`}>
            <span className='icon'><IoBan/></span>
            <span className='text'>invalid query</span>
        </div>
    );
}
 
export default NotFound;