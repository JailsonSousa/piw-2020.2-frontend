import React, { createContext, useCallback, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import api from '../services/api';
import { useAuth, UserProps } from './auth';

export interface PostProps {
  id?: string;
  message: string;
  likes: number;
  userId: string;
  userName?: string;
  email?: string;
  comments?: CommentProps[];
}

interface CommentProps {
  id?: string;
  message: string;
  userId?: string;
  postId: string;
  userName?: string;
}

interface PostContextData {
  posts: PostProps[];
  getAllPosts(): Promise<void>;
  createPost(message: string): Promise<void>;
  addComment(comment: CommentProps): Promise<void>;
  addLike(post: PostProps): Promise<void>;
}

const PostContext = createContext<PostContextData>({} as PostContextData);

const PostProvider: React.FC = ({ children }: any) => {
  const { token } = useAuth();
  const history = useHistory();
  const [dataPosts, setDataPosts] = useState<PostProps[]>([] as PostProps[]);

  const getAllPosts = useCallback(async () => {
    const postsResponse = await api.get('/api/posts', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const usersResponse = await api.get('/api/users', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const commentsResponse = await api.get('/api/comments', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const posts = postsResponse.data;
    const users = usersResponse.data;
    const comments = commentsResponse.data;

    const modifiedPosts = posts.map((currentPost: PostProps) => {
      const userPost = users.find(
        (currentUser: UserProps) => currentUser.id === currentPost.userId,
      ) as UserProps;

      const postComments = comments.filter(
        (currentComment: CommentProps) =>
          currentComment.postId === currentPost.id,
      );

      // adiciona o username nos comentários
      const modifiedComments = postComments.map(
        (currentComment: CommentProps) => {
          const userComment = users.find(
            (currentUser: UserProps) =>
              currentUser.id === currentComment.userId,
          ) as UserProps;

          Object.assign(currentComment, { userName: userComment?.name });

          return currentComment;
        },
      );

      Object.assign(currentPost, {
        userName: userPost?.name,
        email: userPost?.email,
        comments: modifiedComments,
      });

      return currentPost;
    });

    setDataPosts(modifiedPosts.reverse());
  }, [token]);

  const createPost = useCallback(
    async (message: string) => {
      await api.post(
        '/api/posts',
        { message },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      toast.success('Postagem criada com sucesso.', {
        onClose: () => history.push('/'),
        autoClose: 2500,
      });
    },
    [token, history],
  );

  const addComment = useCallback(
    async comment => {
      await api.post('/api/comments', comment, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success('Comentário adicionado com sucesso.', {
        autoClose: 2500,
      });
    },
    [token],
  );

  const addLike = useCallback(
    async ({ message, likes, userId, id }: PostProps) => {
      const post = {
        message,
        likes,
        userId,
        id,
      };
      await api.put(
        `/api/posts/${id}`,
        { post },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
    },
    [token],
  );

  return (
    <PostContext.Provider
      value={{
        posts: dataPosts,
        getAllPosts,
        createPost,
        addComment,
        addLike,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

function usePost(): PostContextData {
  const context = useContext(PostContext);

  if (!context) {
    throw new Error('usePost must be used within an PostProvider');
  }

  return context;
}

export { PostProvider, usePost };
