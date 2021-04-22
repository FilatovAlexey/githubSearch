import { useContext } from 'react';
import { Card } from '../components/Card';
import { Search } from '../components/Search';
import { GithubContext } from '../context/github/githubContext';
import { Loader } from '../Ui/Loader';

export const Home = () => {
  const { loading, users } = useContext(GithubContext);
  return (
    <>
      <Search />
      <div className={'row'}>
        {loading ? (
          <Loader />
        ) : (
          users.map((user) => {
            return (
              <div className={'col-sm-4 mb-4'} key={user.id}>
                <Card user={user} />
              </div>
            );
          })
        )}
      </div>
    </>
  );
};
