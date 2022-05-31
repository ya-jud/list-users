import './getUsersStyles.sass';
import { useDispatch } from 'react-redux';
import store, { getUsers, setUsers } from '../../store';


const getUsersButton = (): JSX.Element => {

	const dispatch = useDispatch();

	return (
		<div className='getUsersButton'>
			<div className='button' onClick={() => {dispatch(getUsers() as any)}}>Get Users</div>
		</div>
	);
};

export default getUsersButton;