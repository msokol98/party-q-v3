import { get } from 'api/xhr';
import { useQuery } from 'react-query';

const useCurrentUser = () => {
    const { data: user, error, loading } = useQuery('currentUser', () => get('/auth/users/me'));
    console.log(user)
    return { user, error, loading };
};

export default useCurrentUser;