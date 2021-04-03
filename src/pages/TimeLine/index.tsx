import React, { useCallback, useState, useEffect } from 'react';
import Post from './Post';
import NewComment from './NewComment';
import {
  Container,
  ContainerPost,
  ContainerComments,
  Comment,
  LoadingMessage,
  NoDataMessage,
} from './styles';

import { usePost, PostProps } from '../../hooks/post';

const Home: React.FC = () => {
  const { getAllPosts, posts } = usePost();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      await getAllPosts();
      setLoading(false);
    }

    fetchData();
  }, [getAllPosts]);

  const renderPosts = useCallback((listPosts: PostProps[]) => {
    if (listPosts?.length === 0) {
      return <NoDataMessage>Nenhuma postagem até o momento...</NoDataMessage>;
    }

    return listPosts.map(post => (
      <ContainerPost>
        <Post key={post.id as string} post={post} />
        {(post.comments as []).length > 0 && (
          <ContainerComments>
            {post.comments?.map(comment => (
              <Comment key={comment.id as string}>
                <strong>{`${comment.userName}: `}</strong>
                <span>{comment.message}</span>
              </Comment>
            ))}
          </ContainerComments>
        )}
        <NewComment postId={post.id as string} />
      </ContainerPost>
    ));
  }, []);

  return (
    <Container>
      {loading ? (
        <LoadingMessage>Carregando...</LoadingMessage>
      ) : (
        renderPosts(posts)
      )}
    </Container>
  );
};

export default Home;
