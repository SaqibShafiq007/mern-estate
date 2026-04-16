import { supabase } from '../supabase';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function OAuth() {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

useEffect(() => {
  const handleRedirect = async () => {
    const { data: { session } } = await supabase.auth.getSession();

    // ✅ Only proceed if session exists AND currentUser is not already in Redux
    if (session?.user && !currentUser) {
      const user = session.user;

      try {
        const res = await fetch('/api/auth/google', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: user.user_metadata?.full_name,
            email: user.email,
            photo: user.user_metadata?.avatar_url,
          }),
        });

        const data = await res.json();
        dispatch(signInSuccess(data));
        navigate('/');
      } catch (error) {
        console.log('error saving user', error);
      }
    }
  };

  handleRedirect();
}, []);

  const handleGoogleClick = async () => {
    try {
      await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: 'http://localhost:5173', // ✅ redirect back to your app
        },
      });
    } catch (error) {
      console.log('could not sign in with google', error);
    }
  };

  return (
    
    <button
      onClick={handleGoogleClick}
      type='button'
      className='bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95'
    >
      Continue with google
    </button>
  );
}