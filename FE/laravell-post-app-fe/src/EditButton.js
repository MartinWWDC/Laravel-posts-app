import { Link } from 'react-router-dom';

function EditButton(props) {

    return (
        <div>
            <Link to={{
                pathname: '/edit',
                state: {
                    id: props.id,
                    data: props.data}
            }}>Edit</Link>

        </div>
    );
}
export default EditButton;
