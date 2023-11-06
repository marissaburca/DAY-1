import { useSelector, useDispatch } from 'react-redux';
import { Col, Row, Button } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Favorites = () => {
    const favorites = useSelector((state) => state.favorites.content)
    const dispatch = useDispatch()
    return ( 
        <Row>
        <Col sm={12}>
          <ul style={{ listStyle: 'none'}} className='fs-4'>
            {favorites.map((company, i) => (
              <li key={i} className="my-4">
                <Button
                className='me-5'
                  variant="danger"
                  onClick={() => {
                    dispatch({
                      type: 'REMOVE_FROM_FAV',
                      payload: i,
                    })
                  }}
                >
                  <FaTrash />
                </Button>
                {company.company_name}
              </li>
            ))}
          </ul>
          <Link className='ms-4' to='/'>Torna alla home</Link>
        </Col>
      </Row>
  );
}
 
export default Favorites;