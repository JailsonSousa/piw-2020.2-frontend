import React, { useCallback, useState } from 'react';
import { Container } from './styles';
import { usePost } from '../../hooks/post';

const NewPost: React.FC = () => {
  const { createPost } = usePost();
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmitPost = useCallback(
    async e => {
      e.preventDefault();

      setLoading(true);
      await createPost(message);
      setLoading(false);
    },
    [message, createPost],
  );

  return (
    <Container>
      <h1>Nova Postagem</h1>
      <form onSubmit={handleSubmitPost}>
        <textarea
          placeholder="Escreva sua mensagem..."
          required
          value={message}
          onChange={e => setMessage(e.currentTarget.value)}
          maxLength={200}
          name="message"
          rows={10}
        />
        <button type="submit" disabled={loading}>
          Publicar
        </button>
      </form>
    </Container>
  );
};

export default NewPost;
