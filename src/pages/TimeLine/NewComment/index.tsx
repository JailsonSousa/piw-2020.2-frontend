import React, { useCallback, useState } from 'react';
import { BiSend } from 'react-icons/bi';
import { Container } from './styles';

import { usePost } from '../../../hooks/post';

interface CommentDataProps {
  postId: string;
}

const NewComment: React.FC<CommentDataProps> = ({
  postId,
}: CommentDataProps) => {
  const { addComment, getAllPosts } = usePost();
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmitComment = useCallback(
    async e => {
      e.preventDefault();
      setLoading(true);
      await addComment({ message, postId });
      setMessage('');
      await getAllPosts();
      setLoading(false);
    },
    [addComment, getAllPosts, message, postId],
  );

  return (
    <Container>
      <form onSubmit={handleSubmitComment}>
        <input
          placeholder="Escreva um comentário..."
          required
          value={message}
          onChange={e => setMessage(e.currentTarget.value)}
          maxLength={100}
        />
        <button type="submit" disabled={loading}>
          <BiSend />
        </button>
      </form>
    </Container>
  );
};

export default NewComment;
