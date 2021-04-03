import React, { useCallback, useState } from 'react';
import { BiUserVoice, BiLike, BiHappyAlt } from 'react-icons/bi';

import {
  Container,
  PostHeader,
  PostMessage,
  PostFooter,
  LikeButton,
} from './styles';

import { usePost } from '../../../hooks/post';

const Post: React.FC<any> = (data: any) => {
  const { addLike, getAllPosts } = usePost();
  const [loading, setLoading] = useState(false);
  const { post } = data;

  const handleLike = useCallback(async () => {
    setLoading(true);
    await addLike({
      message: post.message,
      likes: post.likes + 1,
      userId: post.userId,
      id: post.id,
    });
    getAllPosts();
    setTimeout(() => setLoading(false), 3000);
  }, [addLike, getAllPosts, post.id, post.message, post.likes, post.userId]);

  return (
    <Container>
      <PostHeader>
        <BiUserVoice size={35} color="#848484" />
        <strong>{post.userName}</strong>
      </PostHeader>
      <PostMessage>
        <p>{post.message}</p>
      </PostMessage>
      <PostFooter>
        <div>
          <span>{`${post.likes} Likes`}</span>
          <BiLike size={20} />
        </div>
        <LikeButton disabled={loading} onClick={handleLike}>
          <BiHappyAlt size={20} />
          Curtir
        </LikeButton>
      </PostFooter>
    </Container>
  );
};

export default Post;
